import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT || 3000)
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = Number(process.env.SMTP_PORT || 587)
const SMTP_SECURE = process.env.SMTP_SECURE === 'true'
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'blasco.ivia@gmail.com'

const smtpConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS)

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  if (!smtpConfigured) {
    return res.status(500).json({ error: 'SMTP no configurado. Revisa las variables de entorno.' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' })
  }

  const mailOptions = {
    from: `${name} <${email}>`,
    to: CONTACT_TO_EMAIL,
    subject: `Nuevo mensaje desde el portfolio de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    html: `
      <h2>Nuevo mensaje desde el portfolio</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.json({ ok: true })
  } catch (error) {
    console.error('Error al enviar email:', error)
    return res.status(500).json({ error: 'Error al enviar el mensaje. Intenta de nuevo más tarde.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server de contacto escuchando en http://localhost:${PORT}`)
})
