<template>
  <main class="portfolio-container">

    <header class="navbar" :class="{ scrolled: isScrolled }">
      <router-link to="/" class="logo" aria-label="Inicio">AB</router-link>
      <nav aria-label="Navegación principal">
        <router-link to="/" exact-active-class="active" active-class="active">Inicio</router-link>
        <router-link to="/projects" active-class="active">Proyectos</router-link>
        <router-link to="/skills" active-class="active">Skills</router-link>
        <router-link to="/contacto" active-class="active">Contacto</router-link>
      </nav>
      <router-link to="/contacto" class="nav-cta" aria-label="Página actual: Contacto">Contacto</router-link>
    </header>

    <div class="page-grid">

      <aside class="contact-info" aria-label="Información de contacto">
        <div class="info-inner">
          <span class="page-label" aria-hidden="true">04 / Contacto</span>

          <h1>
            ¿Hablamos<br/>
            <em>en serio?</em>
          </h1>

          <p class="info-desc">
            Estoy abierto a proyectos freelance, posiciones full-time y colaboraciones
            interesantes en Vue, Nest.js o Python. Si tienes algo en mente, escríbeme.
          </p>

          <div class="availability" aria-live="polite">
            <span class="avail-dot" aria-hidden="true"></span>
            <span>Disponible para nuevos proyectos</span>
          </div>

          <div class="contact-details" role="list" aria-label="Datos de contacto">
            <div class="detail-row" role="listitem">
              <span class="detail-label">Ubicación</span>
              <span class="detail-value">Valencia, España / Remoto</span>
            </div>
            <div class="detail-row" role="listitem">
              <span class="detail-label">Email</span>
              <a href="mailto:blasco.ivia@gmail.com" class="detail-value link">blasco.ivia@gmail.com</a>
            </div>
          </div>

          <div class="social-links" aria-label="Redes sociales">
            <a
              href="https://github.com/andrees-code"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Perfil de GitHub de Andrés"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andrés-blasco-aleixos-b06853282"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Perfil de LinkedIn de Andrés"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </aside>

      <section class="contact-form-section" aria-labelledby="form-title">
        <div class="form-container">
          <div class="form-topbar" aria-hidden="true">
            <div class="dots">
              <span class="dot r"></span>
              <span class="dot y"></span>
              <span class="dot g"></span>
            </div>
            <span class="filename">nuevo_mensaje.js</span>
          </div>

          <form @submit.prevent="handleSubmit" class="the-form" novalidate>
            <h2 id="form-title" class="sr-only">Formulario de contacto</h2>

            <div class="field-group">
              <label for="contact-name">
                <span class="label-comment" aria-hidden="true">// </span>Nombre completo
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                v-model="form.name"
                placeholder="Tu nombre"
                :disabled="isSending || isSent"
                required
                autocomplete="name"
                :aria-invalid="errors.name ? 'true' : 'false'"
                :aria-describedby="errors.name ? 'name-error' : undefined"
              />
              <span v-if="errors.name" class="field-error" id="name-error" role="alert">{{ errors.name }}</span>
            </div>

            <div class="field-group">
              <label for="contact-email">
                <span class="label-comment" aria-hidden="true">// </span>Email de contacto
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                v-model="form.email"
                placeholder="tu_email@ejemplo.com"
                :disabled="isSending || isSent"
                required
                autocomplete="email"
                :aria-invalid="errors.email ? 'true' : 'false'"
                :aria-describedby="errors.email ? 'email-error' : undefined"
              />
              <span v-if="errors.email" class="field-error" id="email-error" role="alert">{{ errors.email }}</span>
            </div>

            <div class="field-group">
              <label for="contact-message">
                <span class="label-comment" aria-hidden="true">// </span>Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                v-model="form.message"
                placeholder="Hola Andrés, me gustaría hablar sobre..."
                :disabled="isSending || isSent"
                required
                :aria-invalid="errors.message ? 'true' : 'false'"
                :aria-describedby="errors.message ? 'message-error' : undefined"
              ></textarea>
              <span v-if="errors.message" class="field-error" id="message-error" role="alert">{{ errors.message }}</span>
            </div>

            <button
              type="submit"
              class="submit-btn"
              :disabled="isSending || isSent"
              :aria-busy="isSending"
            >
              <span v-if="isSending" aria-live="polite">Enviando…</span>
              <span v-else-if="isSent" aria-live="polite">¡Mensaje enviado!</span>
              <span v-else>Enviar mensaje <span aria-hidden="true">→</span></span>
            </button>

            <p v-if="sendError" class="field-error" role="alert" aria-live="polite">
              {{ sendError }}
            </p>

            <p v-if="isSent" class="success-note" role="status" aria-live="polite">
              Gracias. Te responderé lo antes posible.
            </p>
          </form>
        </div>
      </section>

    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const form = ref({ name: '', email: '', message: '' })
const errors = ref({ name: '', email: '', message: '' })
const isSending = ref(false)
const isSent = ref(false)
const sendError = ref('')

const validate = () => {
  errors.value = { name: '', email: '', message: '' }
  let ok = true
  if (!form.value.name.trim()) { errors.value.name = 'El nombre es obligatorio.'; ok = false }
  if (!form.value.email.trim()) { errors.value.email = 'El email es obligatorio.'; ok = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) { errors.value.email = 'Introduce un email válido.'; ok = false }
  if (!form.value.message.trim()) { errors.value.message = 'El mensaje no puede estar vacío.'; ok = false }
  return ok
}

const handleSubmit = async () => {
  if (!validate()) return
  sendError.value = ''
  isSending.value = true

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data?.error || 'Error al enviar el mensaje.')

    isSent.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => { isSent.value = false }, 6000)
  } catch (error) {
    console.error('Contact form error:', error)
    sendError.value = error.message || 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.'
  } finally {
    isSending.value = false
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap')

$ink:       #0e0e0e
$parchment: #f2ede6
$accent:    #d4603a
$muted:     #7a7570
$card:      #141210
$border:    rgba(242,237,230,0.1)

// ─── SR-ONLY ───────────────────────────────────────────────
.sr-only
  position: absolute
  width: 1px
  height: 1px
  padding: 0
  margin: -1px
  overflow: hidden
  clip: rect(0,0,0,0)
  white-space: nowrap
  border: 0

// ─── NAVBAR ────────────────────────────────────────────────
.navbar
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 100
  display: flex
  align-items: center
  justify-content: space-between
  padding: 28px 60px
  transition: all 0.4s ease

  &.scrolled
    background: rgba($ink, 0.92)
    backdrop-filter: blur(12px)
    padding: 18px 60px
    border-bottom: 1px solid $border

  .logo
    font-family: 'Playfair Display', serif
    font-size: 1.4rem
    font-weight: 900
    color: $accent
    text-decoration: none

  nav
    display: flex
    gap: 40px

    a
      color: rgba($parchment, 0.55)
      text-decoration: none
      font-size: 0.875rem
      font-weight: 500
      letter-spacing: 0.04em
      transition: color 0.25s
      position: relative

      &::after
        content: ''
        position: absolute
        bottom: -4px
        left: 0
        width: 0
        height: 1px
        background: $accent
        transition: width 0.3s

      &:hover, &.active
        color: $parchment
        &::after
          width: 100%

  .nav-cta
    font-size: 0.8rem
    font-weight: 500
    letter-spacing: 0.08em
    text-transform: uppercase
    color: $ink
    background: $accent
    text-decoration: none
    padding: 9px 22px
    border-radius: 2px
    transition: all 0.25s
    &:hover
      background: lighten($accent, 8%)

// ─── LAYOUT ────────────────────────────────────────────────
.portfolio-container
  min-height: 100vh

.page-grid
  display: grid
  grid-template-columns: 1fr 1fr
  min-height: 100vh
  padding-top: 80px

// ─── LEFT INFO ─────────────────────────────────────────────
.contact-info
  padding: 80px 60px
  border-right: 1px solid $border
  display: flex
  align-items: center
  justify-content: center

  .info-inner
    width: 100%
    max-width: 480px

  .page-label
    font-family: 'DM Mono', monospace
    font-size: 0.72rem
    color: $muted
    letter-spacing: 0.15em
    text-transform: uppercase
    display: block
    margin-bottom: 24px

  h1
    font-family: 'Playfair Display', serif
    font-size: clamp(2.8rem, 5vw, 5rem)
    font-weight: 900
    line-height: 1.0
    margin-bottom: 28px
    letter-spacing: -0.02em

    em
      font-style: italic
      color: $accent

  .info-desc
    font-size: 1rem
    color: rgba($parchment, 0.6)
    line-height: 1.75
    margin-bottom: 36px
    max-width: 420px

  .availability
    display: inline-flex
    align-items: center
    gap: 10px
    font-family: 'DM Mono', monospace
    font-size: 0.72rem
    color: #4ade80
    letter-spacing: 0.08em
    text-transform: uppercase
    margin-bottom: 40px

    .avail-dot
      width: 8px
      height: 8px
      border-radius: 50%
      background: #4ade80
      flex-shrink: 0
      animation: pulse-green 2.5s ease infinite

  .contact-details
    display: flex
    flex-direction: column
    gap: 20px
    margin-bottom: 40px
    padding-top: 32px
    border-top: 1px solid $border

    .detail-row
      display: flex
      flex-direction: column
      gap: 4px

      .detail-label
        font-family: 'DM Mono', monospace
        font-size: 0.65rem
        color: $muted
        letter-spacing: 0.1em
        text-transform: uppercase

      .detail-value
        font-size: 0.95rem
        color: $parchment

        &.link
          text-decoration: none
          border-bottom: 1px solid rgba($parchment, 0.15)
          padding-bottom: 1px
          transition: all 0.25s
          display: inline

          &:hover
            color: $accent
            border-bottom-color: $accent

          &:focus-visible
            outline: 2px solid $accent
            outline-offset: 4px
            border-radius: 2px

  .social-links
    display: flex
    gap: 24px

    .social-link
      display: inline-flex
      align-items: center
      gap: 8px
      font-family: 'DM Mono', monospace
      font-size: 0.75rem
      color: $muted
      text-decoration: none
      letter-spacing: 0.08em
      text-transform: uppercase
      transition: color 0.25s

      &:hover
        color: $parchment

      &:focus-visible
        outline: 2px solid $accent
        outline-offset: 4px
        border-radius: 2px

// ─── RIGHT FORM ────────────────────────────────────────────
.contact-form-section
  padding: 80px 60px
  display: flex
  align-items: center
  justify-content: center

  .form-container
    width: 100%
    max-width: 520px

  .form-topbar
    display: flex
    align-items: center
    gap: 12px
    background: #1a1714
    padding: 12px 20px
    border-radius: 8px 8px 0 0
    border: 1px solid $border
    border-bottom: none

    .dots
      display: flex
      gap: 7px

      .dot
        width: 11px
        height: 11px
        border-radius: 50%

        &.r
          background: #ff5f57
        &.y
          background: #ffbd2e
        &.g
          background: #28c840

    .filename
      font-family: 'DM Mono', monospace
      font-size: 0.75rem
      color: $muted
      letter-spacing: 0.06em
      margin-left: auto

  .the-form
    background: #111009
    border: 1px solid $border
    border-top: none
    border-radius: 0 0 8px 8px
    padding: 40px

  .field-group
    margin-bottom: 28px

    label
      display: block
      font-family: 'DM Mono', monospace
      font-size: 0.75rem
      color: $accent
      letter-spacing: 0.08em
      margin-bottom: 12px

      .label-comment
        opacity: 0.5

    input, textarea
      width: 100%
      background: transparent
      border: none
      border-bottom: 1px solid rgba($parchment, 0.12)
      padding: 10px 0
      color: $parchment
      font-family: 'DM Sans', sans-serif
      font-size: 1rem
      transition: border-color 0.25s
      outline: none
      border-radius: 0

      &::placeholder
        color: rgba($parchment, 0.2)
        font-family: 'DM Mono', monospace
        font-size: 0.85rem

      &:focus
        border-bottom-color: $accent

      &:disabled
        opacity: 0.4
        cursor: not-allowed

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-moz-autofill,
      &:-internal-autofill-selected
        background-color: #111009 !important
        color: $parchment !important
        -webkit-text-fill-color: $parchment !important
        box-shadow: inset 0 0 0 1000px #111009 !important
        background-clip: content-box !important
        transition: background-color 5000s ease-in-out 0s

      &[aria-invalid="true"]
        border-bottom-color: #e87070

    textarea
      height: 110px
      resize: none
      display: block

    .field-error
      display: block
      font-family: 'DM Mono', monospace
      font-size: 0.7rem
      color: #e87070
      margin-top: 6px
      letter-spacing: 0.05em

  .submit-btn
    width: 100%
    background: $accent
    color: $ink
    border: none
    padding: 16px 32px
    font-family: 'DM Sans', sans-serif
    font-size: 0.95rem
    font-weight: 600
    letter-spacing: 0.06em
    text-transform: uppercase
    border-radius: 2px
    cursor: pointer
    transition: all 0.25s
    margin-top: 8px

    &:hover:not(:disabled)
      background: lighten($accent, 8%)
      transform: translateY(-2px)

    &:disabled
      opacity: 0.5
      cursor: not-allowed
      transform: none

    &:focus-visible
      outline: 2px solid $parchment
      outline-offset: 3px

  .success-note
    margin-top: 16px
    font-family: 'DM Mono', monospace
    font-size: 0.75rem
    color: #4ade80
    letter-spacing: 0.06em
    text-align: center

// ─── KEYFRAMES ─────────────────────────────────────────────
@keyframes pulse-green
  0%, 100%
    opacity: 1
    transform: scale(1)
  50%
    opacity: 0.5
    transform: scale(0.85)

// ─── RESPONSIVE ────────────────────────────────────────────
@media (max-width: 960px)
  .page-grid
    grid-template-columns: 1fr

  .contact-info
    padding: 120px 24px 60px
    border-right: none
    border-bottom: 1px solid rgba(242,237,230,0.1)
    .info-inner
      max-width: 520px
      margin: 0 auto

  .contact-form-section
    padding: 60px 24px 80px
    .form-container
      max-width: 520px
      margin: 0 auto

@media (max-width: 900px)
  .navbar
    padding: 22px 24px
    &.scrolled
      padding: 16px 24px
    nav, .nav-cta
      display: none
</style>
