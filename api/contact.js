const nodemailer = require('nodemailer')

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' })
  }

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.CONTACT_TO_EMAIL || 'blasco.ivia@gmail.com',
      subject: `Nuevo mensaje desde el portfolio de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Error al enviar email:', error)
    return res.status(500).json({ error: 'Error al enviar el mensaje. Intenta de nuevo más tarde.' })
  }
}
