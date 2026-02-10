<template>
  <main class="portfolio-container">
    <header class="navbar">
      <div class="logo">Portfolio</div>
      <nav>
        <a href="/home">Home</a>
        <a href="/projects">Projects</a>
        <a href="/skills">Skills</a>
        <a href="/contacto" class="active">Contact</a>
      </nav>
      <div class="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </header>

    <section class="contact-hero">
      <div class="contact-info-side">
        <span class="status-badge">
          <span class="dot"></span> Disponible para nuevos proyectos
        </span>
        <h1>¿Tienes un <span class="highlight">desafío</span> para mí?</h1>
        <p class="subtitle">
          Estoy interesado en oportunidades de Full Stack, proyectos de IA o simplemente charlar sobre tecnología.
          ¡Escríbeme y hagamos que suceda!
        </p>

        <div class="direct-contact">
          <div class="contact-method">
            <div class="method-icon">📍</div>
            <div class="method-text">
              <span>Ubicación</span>
              <p>España(Valencia) / Remoto</p>
            </div>
          </div>
          <div class="contact-method">
            <div class="method-icon">📧</div>
            <div class="method-text">
              <span>Email</span>
              <p>blasco.ivia@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="social-large">
          <a
            href="https://www.linkedin.com/in/andrés-blasco-aleixos-b06853282"
            target="_blank"
            rel="noopener noreferrer"
            class="social-btn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/andrees-code"
            target="_blank"
            rel="noopener noreferrer"
            class="social-btn"
          >
            GitHub
          </a>
        </div>
      </div>

      <div class="contact-form-side">
        <div class="form-wrapper">
          <div class="form-header">
            <div class="window-dots">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <span class="window-title">nuevo_mensaje.js</span>
          </div>

          <form @submit.prevent="handleSubmit" class="terminal-form">
            <div class="form-group">
              <label>// Nombre completo</label>
              <input
                type="text"
                name="name"
                v-model="form.name"
                placeholder="Tu nombre"
                required
                :disabled="isSending"
              />
            </div>

            <div class="form-group">
              <label>// Email de contacto</label>
              <input
                type="email"
                name="email"
                v-model="form.email"
                placeholder="tu_email@ejemplo.com"
                required
                :disabled="isSending"
              />
            </div>

            <div class="form-group">
              <label>// Mensaje</label>
              <textarea
                name="message"
                v-model="form.message"
                placeholder="Hola Andrés, hablemos sobre..."
                :disabled="isSending"
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-submit"
              :disabled="isSending || isSent"
            >
              <template v-if="isSending">Enviando...</template>
              <template v-else-if="isSent">¡Mensaje Enviado!</template>
              <template v-else>
                Enviar Mensaje <span class="arrow">→</span>
              </template>
            </button>

            <p v-if="isSent" class="success-msg">
              Gracias Andrés, te responderé lo antes posible.
            </p>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSending = ref(false)
const isSent = ref(false)

const handleSubmit = () => {
  isSending.value = true

  // Simulación de envío de API
  setTimeout(() => {
    console.log('Datos enviados:', form.value)
    isSending.value = false
    isSent.value = true

    // Limpiar formulario tras el envío
    form.value = { name: '', email: '', message: '' }

    // Resetear el estado del botón después de 5 segundos
    setTimeout(() => {
      isSent.value = false
    }, 5000)
  }, 1500)
}
</script>

<style lang="sass" scoped>
$bg-dark: #151517
$bg-card: #1e1e24
$primary-green: #5cdb95
$text-white: #ffffff
$text-gray: #a0a0a0
$border-color: #333

.contact-hero
  display: flex
  gap: 80px
  padding: 80px 5%
  align-items: center
  min-height: 80vh
  background-image: linear-gradient(rgba($text-white, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba($text-white, 0.02) 1px, transparent 1px)
  background-size: 60px 60px

  @media (max-width: 968px)
    flex-direction: column
    padding: 40px 20px

.contact-info-side
  flex: 1

  .status-badge
    display: inline-flex
    align-items: center
    gap: 8px
    background: rgba($primary-green, 0.1)
    color: $primary-green
    padding: 6px 16px
    border-radius: 20px
    font-size: 0.85rem
    font-weight: 500
    margin-bottom: 20px

    .dot
      width: 8px
      height: 8px
      background: $primary-green
      border-radius: 50%
      animation: pulse 2s infinite

  h1
    font-size: 3.5rem
    line-height: 1.1
    margin-bottom: 25px

  .highlight
    background: linear-gradient(90deg, $primary-green, #42b883)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

  .subtitle
    font-size: 1.1rem
    color: $text-gray
    margin-bottom: 40px
    max-width: 500px

  .direct-contact
    display: flex
    flex-direction: column
    gap: 25px
    margin-bottom: 40px

    .contact-method
      display: flex
      align-items: center
      gap: 15px

      .method-icon
        font-size: 1.5rem
        background: $bg-card
        width: 50px
        height: 50px
        display: flex
        align-items: center
        justify-content: center
        border-radius: 12px
        border: 1px solid $border-color

      .method-text
        span
          display: block
          font-size: 0.8rem
          color: $text-gray
        p
          font-weight: 600

  .social-large
    display: flex
    gap: 15px

    .social-btn
      color: $text-white
      text-decoration: none
      font-size: 0.9rem
      padding: 8px 16px
      border-bottom: 2px solid $border-color
      transition: all 0.3s
      &:hover
        color: $primary-green
        border-color: $primary-green

.contact-form-side
  flex: 1
  width: 100%

  .form-wrapper
    background: $bg-card
    border: 1px solid $border-color
    border-radius: 12px
    overflow: hidden
    box-shadow: 0 30px 60px rgba(0,0,0,0.4)

    .form-header
      background: #25252b
      padding: 12px 20px
      display: flex
      justify-content: space-between
      align-items: center
      border-bottom: 1px solid $border-color

      .window-dots
        display: flex
        gap: 8px
        span
          width: 12px
          height: 12px
          border-radius: 50%
        .dot-red
          background: #ff5f56
        .dot-yellow
          background: #ffbd2e
        .dot-green
          background: #27c93f

      .window-title
        font-family: monospace
        font-size: 0.85rem
        color: $text-gray

    .terminal-form
      padding: 30px

      .form-group
        margin-bottom: 25px

        label
          display: block
          font-family: monospace
          color: $primary-green
          margin-bottom: 10px
          font-size: 0.9rem

        input, textarea
          width: 100%
          background: transparent
          border: none
          border-left: 2px solid $border-color
          padding: 10px 20px
          color: $text-white
          font-family: 'Inter', sans-serif
          font-size: 1rem
          transition: all 0.3s

          &:disabled
            opacity: 0.5
            cursor: not-allowed

          &:focus
            outline: none
            border-left-color: $primary-green
            background: rgba(255,255,255,0.02)

        textarea
          height: 120px
          resize: none

      .btn-submit
        width: 100%
        padding: 15px
        display: flex
        justify-content: center
        align-items: center
        gap: 10px
        font-size: 1rem

        &:disabled
          background: #333
          color: $text-gray
          box-shadow: none
          cursor: not-allowed
          transform: none

      .success-msg
        margin-top: 15px
        color: $primary-green
        font-family: monospace
        font-size: 0.8rem
        text-align: center

@keyframes pulse
  0%
    box-shadow: 0 0 0 0 rgba($primary-green, 0.4)
  70%
    box-shadow: 0 0 0 10px rgba($primary-green, 0)
  100%
    box-shadow: 0 0 0 0 rgba($primary-green, 0)
</style>
