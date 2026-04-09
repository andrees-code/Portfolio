<template>
  <main class="portfolio-container">

    <!-- NAV -->
    <header class="navbar" :class="{ scrolled: isScrolled }">
      <router-link to="/" class="logo" aria-label="Inicio">AB</router-link>
      <nav aria-label="Navegación principal">
        <router-link to="/" exact-active-class="active" active-class="active">Inicio</router-link>
        <router-link to="/projects" active-class="active">Proyectos</router-link>
        <router-link to="/skills" active-class="active">Skills</router-link>
        <router-link to="/contacto" active-class="active">Contacto</router-link>
      </nav>
      <router-link to="/contacto" class="nav-cta" aria-label="Contactar a Andrés">Hablemos</router-link>
    </header>

    <!-- HERO -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-eyebrow">
        <span class="status-dot" aria-hidden="true"></span>
        <span>Disponible para proyectos</span>
      </div>

      <div class="hero-main">
        <div class="hero-number" aria-hidden="true">01</div>
        <h1 id="hero-title" class="hero-title">
          <span class="line-small">Hola, soy</span>
          <span class="line-big">Andrés</span>
          <span class="line-role">Full Stack Developer</span>
        </h1>
        <div class="hero-side">
          <p class="hero-desc">
            Construyo experiencias digitales que funcionan de verdad. Desde la interfaz hasta el servidor, con café y sin excusas.
          </p>
          <div class="hero-actions">
            <router-link to="/projects" class="btn-primary">Ver proyectos</router-link>
            <router-link to="/contacto" class="btn-ghost">Contactar</router-link>
          </div>
        </div>
      </div>

      <div class="hero-meta" aria-label="Información de ubicación y stack">
        <span>Valencia, España</span>
        <span class="sep" aria-hidden="true">·</span>
        <span>Vue · Nest.js · MongoDB · Python</span>
        <span class="sep" aria-hidden="true">·</span>
        <span>Remoto friendly</span>
      </div>

      <div class="hero-scroll" aria-hidden="true">
        <div class="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="projects-section" aria-labelledby="projects-title">
      <div class="section-header">
        <div class="section-number" aria-hidden="true">02</div>
        <h2 id="projects-title">Proyectos Destacados</h2>
        <router-link to="/projects" class="section-link" aria-label="Ver todos los proyectos">Ver todos →</router-link>
      </div>

      <div class="projects-list" role="list">
      <article
        v-for="(project, index) in projects"
        :key="index"
        class="project-row clickable"
        role="listitem"
        @click="openModal(project)"
      >
        <div class="project-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</div>

        <div class="project-thumb" aria-hidden="true">
          <img v-if="project.image" :src="project.image" :alt="'Captura de ' + project.title" />
          <div v-else class="thumb-placeholder"></div>
        </div>

        <div class="project-content">
          <div class="project-tags" role="list" :aria-label="'Tecnologías de ' + project.title">
            <span v-for="tag in project.tags" :key="tag" class="tag" role="listitem">{{ tag }}</span>
          </div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.desc }}</p>
        </div>

        <a :href="project.url" target="_blank" rel="noopener noreferrer" class="project-arrow" aria-label="Abrir demo" @click.stop>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </article>
    </div>

    <div v-if="isModalOpen" class="modal-backdrop" @click="closeModal">
      <div class="modal-container" @click.stop>
        <button class="modal-close" @click="closeModal" aria-label="Cerrar modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>

        <div v-if="isLoadingDetails" class="modal-loading">
          Cargando detalles...
        </div>

        <div v-else-if="activeProject" class="modal-body">
          <span class="modal-eyebrow">{{ activeProject.rol }} · {{ activeProject.duracion }}</span>
          <h2>{{ activeProject.title }}</h2>
          <img v-if="activeProject.image" :src="activeProject.image" class="modal-hero-img" alt="" />

          <div class="modal-text">
            <p>{{ activeProject.descripcion_larga }}</p>

            <h3 v-if="activeProject.retos">Retos Técnicos</h3>
            <ul v-if="activeProject.retos" class="modal-list">
              <li v-for="(reto, idx) in activeProject.retos" :key="idx">{{ reto }}</li>
            </ul>
          </div>

          <a :href="activeProject.url" target="_blank" class="btn-primary" style="margin-top: 24px;">Visitar Proyecto</a>
        </div>
      </div>
    </div>
    </section>

    <!-- ABOUT STRIP -->
    <section class="about-strip" aria-label="Sobre Andrés">
      <div class="strip-inner">
        <div class="strip-text">
          <div class="section-number" aria-hidden="true">03</div>
          <h2>Un poco sobre mí</h2>
          <p>
            Soy un desarrollador Full Stack formado en Valencia, apasionado por crear productos que resuelven problemas reales.
            Me muevo igual de cómodo en el frontend que en el backend, y disfruto especialmente diseñando arquitecturas limpias y escalables.
          </p>
          <p>
            Cuando no estoy programando, probablemente estoy pensando en cómo mejorar lo que acabo de programar.
          </p>
        </div>
        <div class="strip-stats" role="list" aria-label="Estadísticas">
          <div class="stat" role="listitem">
            <span class="stat-number" aria-label="3 proyectos publicados">3</span>
            <span class="stat-label">Proyectos publicados</span>
          </div>
          <div class="stat" role="listitem">
            <span class="stat-number" aria-label="5 tecnologías">5+</span>
            <span class="stat-label">Tecnologías</span>
          </div>
          <div class="stat" role="listitem">
            <span class="stat-number" aria-label="100 porciento remoto">50%</span>
            <span class="stat-label">Remoto</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT TEASER -->
    <section class="contact-teaser" aria-labelledby="contact-title">
      <div class="section-number" aria-hidden="true">04</div>
      <h2 id="contact-title">¿Empezamos algo?</h2>
      <p>Estoy abierto a proyectos freelance, posiciones full-time y colaboraciones interesantes.</p>
      <router-link to="/contacto" class="btn-primary large" aria-label="Ir a la página de contacto">Escríbeme</router-link>
      <div class="contact-links" aria-label="Redes sociales">
        <a href="https://github.com/andrees-code" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/andrés-blasco-aleixos-b06853282" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:blasco.ivia@gmail.com">blasco.ivia@gmail.com</a>
      </div>
    </section>

  </main>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import projectsData from '../assets/projects.json'

const projects = computed(() => {
  return projectsData.filter(project => project.destacados)
})

const isScrolled = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 40 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

// --- ESTADO DEL MODAL ---
const isModalOpen = ref(false)
const activeProject = ref(null)
const isLoadingDetails = ref(false)

const openModal = async (projectBase) => {
  isModalOpen.value = true
  isLoadingDetails.value = true

  try {
    // Usamos fetch nativo apuntando a la carpeta public
    const response = await fetch(`/projects-details/${projectBase.id}.json`)

    // Si el archivo no existe (ej. error 404), lanzamos un error para ir al catch
    if (!response.ok) throw new Error('Archivo JSON no encontrado')

    // Convertimos la respuesta a JSON
    const extraData = await response.json()

    // Fusionamos la info principal con la del JSON individual
    activeProject.value = { ...projectBase, ...extraData }

  } catch (error) {
    console.error(`Fallo al cargar detalles de ${projectBase.id}:`, error)
    // Fallback: Si falla, mostramos la info básica de la tarjeta
    activeProject.value = { ...projectBase, descripcion_larga: projectBase.desc }
  } finally {
    isLoadingDetails.value = false
    document.body.style.overflow = 'hidden' // Bloquea el scroll del fondo
  }
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => { activeProject.value = null }, 300) // Limpiar tras la animación
  // Restaurar el scroll
  document.body.style.overflow = 'auto'
}
</script>
<style lang="sass">
// ─── TOKENS ────────────────────────────────────────────────
$ink:       #0e0e0e
$parchment: #f2ede6
$accent:    #d4603a
$muted:     #7a7570
$card:      #171512
$border:    rgba(242,237,230,0.1)

// ─── GOOGLE FONTS ──────────────────────────────────────────
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap')

// ─── RESET ─────────────────────────────────────────────────
*, *::before, *::after
  box-sizing: border-box
  margin: 0
  padding: 0

html
  scroll-behavior: smooth

body
  background: $ink
  color: $parchment
  font-family: 'DM Sans', sans-serif
  font-size: 16px
  line-height: 1.6
  overflow-x: hidden
  -webkit-font-smoothing: antialiased

// ─── LAYOUT ────────────────────────────────────────────────
.portfolio-container
  min-height: 100vh

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
    letter-spacing: 0.05em
    &:focus-visible
      outline: 2px solid $accent
      outline-offset: 4px
      border-radius: 2px

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
        transition: width 0.3s ease

      &:hover, &.active
        color: $parchment

        &::after
          width: 100%

      &:focus-visible
        outline: 2px solid $accent
        outline-offset: 6px
        border-radius: 2px

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

    &:focus-visible
      outline: 2px solid $parchment
      outline-offset: 3px

// ─── HERO ──────────────────────────────────────────────────
.hero
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  padding: 160px 60px 80px
  position: relative
  border-bottom: 1px solid $border

  // Subtle grain texture overlay
  &::before
    content: ''
    position: absolute
    inset: 0
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")
    pointer-events: none

  .hero-eyebrow
    display: flex
    align-items: center
    gap: 10px
    font-family: 'DM Mono', monospace
    font-size: 0.75rem
    color: $muted
    letter-spacing: 0.1em
    text-transform: uppercase
    margin-bottom: 48px

    .status-dot
      width: 8px
      height: 8px
      border-radius: 50%
      background: #4ade80
      flex-shrink: 0
      animation: pulse-dot 2.5s ease infinite

  .hero-main
    display: grid
    grid-template-columns: 1fr 380px
    gap: 80px
    align-items: end
    margin-bottom: 64px

  .hero-number
    font-family: 'Playfair Display', serif
    font-size: 10rem
    font-weight: 900
    color: rgba($parchment, 0.04)
    position: absolute
    top: 120px
    right: 60px
    line-height: 1
    user-select: none
    pointer-events: none

  .hero-title
    display: flex
    flex-direction: column

    .line-small
      font-family: 'DM Mono', monospace
      font-size: 0.9rem
      color: $muted
      letter-spacing: 0.12em
      text-transform: uppercase
      margin-bottom: 8px

    .line-big
      font-family: 'Playfair Display', serif
      font-size: clamp(5rem, 10vw, 9rem)
      font-weight: 900
      line-height: 0.9
      color: $parchment
      letter-spacing: -0.02em

    .line-role
      font-family: 'Playfair Display', serif
      font-style: italic
      font-size: clamp(1.2rem, 2.5vw, 2rem)
      color: $accent
      margin-top: 16px
      font-weight: 400

  .hero-side
    padding-bottom: 8px

    .hero-desc
      font-size: 1.05rem
      color: rgba($parchment, 0.65)
      line-height: 1.75
      margin-bottom: 36px

  .hero-actions
    display: flex
    gap: 16px
    flex-wrap: wrap

  .hero-meta
    font-family: 'DM Mono', monospace
    font-size: 0.72rem
    color: $muted
    letter-spacing: 0.06em
    display: flex
    align-items: center
    gap: 14px
    flex-wrap: wrap

    .sep
      color: rgba($muted, 0.5)

  .hero-scroll
    position: absolute
    bottom: 40px
    right: 60px
    display: flex
    flex-direction: column
    align-items: center
    gap: 10px
    color: $muted
    font-family: 'DM Mono', monospace
    font-size: 0.65rem
    letter-spacing: 0.15em
    text-transform: uppercase

    .scroll-line
      width: 1px
      height: 48px
      background: linear-gradient($accent, transparent)
      animation: line-drop 2s ease infinite

// ─── BUTTONS ───────────────────────────────────────────────
.btn-primary
  display: inline-flex
  align-items: center
  background: $accent
  color: $ink
  font-weight: 600
  font-size: 0.875rem
  letter-spacing: 0.06em
  text-transform: uppercase
  text-decoration: none
  padding: 13px 30px
  border-radius: 2px
  transition: all 0.25s
  border: none
  cursor: pointer

  &:hover
    background: lighten($accent, 8%)
    transform: translateY(-2px)

  &.large
    padding: 17px 40px
    font-size: 1rem

  &:focus-visible
    outline: 2px solid $parchment
    outline-offset: 3px

.btn-ghost
  display: inline-flex
  align-items: center
  background: transparent
  color: $parchment
  font-weight: 500
  font-size: 0.875rem
  letter-spacing: 0.06em
  text-transform: uppercase
  text-decoration: none
  padding: 13px 30px
  border-radius: 2px
  border: 1px solid rgba($parchment, 0.2)
  transition: all 0.25s

  &:hover
    border-color: rgba($parchment, 0.5)
    background: rgba($parchment, 0.04)

  &:focus-visible
    outline: 2px solid $accent
    outline-offset: 3px

// ─── SECTION SHARED ────────────────────────────────────────
.section-number
  font-family: 'Playfair Display', serif
  font-size: 0.75rem
  color: $accent
  letter-spacing: 0.2em
  font-weight: 400
  font-style: italic

.section-header
  display: flex
  align-items: baseline
  gap: 20px
  margin-bottom: 48px
  padding: 0 60px
  border-bottom: 1px solid $border
  padding-bottom: 24px

  h2
    font-family: 'Playfair Display', serif
    font-size: 2.2rem
    font-weight: 700
    flex-grow: 1

  .section-link
    font-family: 'DM Mono', monospace
    font-size: 0.8rem
    color: $accent
    text-decoration: none
    letter-spacing: 0.05em
    transition: opacity 0.2s

    &:hover
      opacity: 0.7

    &:focus-visible
      outline: 2px solid $accent
      outline-offset: 4px
      border-radius: 2px

// ─── PROJECTS ──────────────────────────────────────────────
.projects-section
  padding: 100px 0
  border-bottom: 1px solid $border

  .projects-list
    padding: 0 60px

  .project-row
    display: grid
    grid-template-columns: 48px 180px 1fr 60px
    align-items: center
    gap: 40px
    padding: 32px 0
    border-bottom: 1px solid $border
    transition: all 0.3s
    position: relative

    &:last-child
      border-bottom: none

    &:hover
      .project-title
        color: $accent
      .project-arrow
        transform: translate(4px, -4px)
        color: $accent
      .project-thumb
        opacity: 1

    .project-index
      font-family: 'DM Mono', monospace
      font-size: 0.7rem
      color: $muted
      letter-spacing: 0.1em

    .project-thumb
      width: 120px
      height: 72px
      border-radius: 4px
      overflow: hidden
      opacity: 0.6
      transition: opacity 0.3s
      flex-shrink: 0

      img
        width: 100%
        height: 100%
        object-fit: cover

      .thumb-placeholder
        width: 100%
        height: 100%
        background: $card
        border: 1px solid $border

    .project-content
      .project-tags
        display: flex
        gap: 8px
        margin-bottom: 10px
        flex-wrap: wrap

        .tag
          font-family: 'DM Mono', monospace
          font-size: 0.65rem
          color: $muted
          letter-spacing: 0.08em
          text-transform: uppercase

      .project-title
        font-family: 'Playfair Display', serif
        font-size: 1.4rem
        font-weight: 700
        margin-bottom: 6px
        transition: color 0.25s

      .project-desc
        font-size: 0.9rem
        color: rgba($parchment, 0.55)
        line-height: 1.6

    .project-arrow
      color: rgba($parchment, 0.3)
      display: flex
      align-items: center
      justify-content: center
      transition: all 0.3s
      text-decoration: none

      &:focus-visible
        outline: 2px solid $accent
        outline-offset: 4px
        border-radius: 2px

// ─── ABOUT STRIP ───────────────────────────────────────────
.about-strip
  padding: 100px 60px
  border-bottom: 1px solid $border

  .strip-inner
    display: grid
    grid-template-columns: 1fr 320px
    gap: 80px
    align-items: start

  .strip-text
    .section-number
      margin-bottom: 16px
      display: block

    h2
      font-family: 'Playfair Display', serif
      font-size: 2.5rem
      font-weight: 700
      margin-bottom: 24px
      line-height: 1.15

    p
      font-size: 1rem
      color: rgba($parchment, 0.65)
      line-height: 1.8
      margin-bottom: 16px

      &:last-child
        margin-bottom: 0

  .strip-stats
    display: flex
    flex-direction: column
    gap: 32px
    padding-top: 52px

    .stat
      .stat-number
        font-family: 'Playfair Display', serif
        font-size: 3.5rem
        font-weight: 900
        color: $accent
        display: block
        line-height: 1

      .stat-label
        font-family: 'DM Mono', monospace
        font-size: 0.72rem
        color: $muted
        letter-spacing: 0.1em
        text-transform: uppercase
        margin-top: 6px
        display: block

// ─── CONTACT TEASER ────────────────────────────────────────
.contact-teaser
  padding: 120px 60px
  text-align: center
  display: flex
  flex-direction: column
  align-items: center
  gap: 0

  .section-number
    margin-bottom: 20px

  h2
    font-family: 'Playfair Display', serif
    font-size: clamp(2.5rem, 6vw, 5rem)
    font-weight: 900
    line-height: 1.05
    margin-bottom: 20px

  p
    font-size: 1.1rem
    color: rgba($parchment, 0.55)
    max-width: 500px
    margin-bottom: 44px
    line-height: 1.7

  .contact-links
    display: flex
    gap: 36px
    margin-top: 32px
    flex-wrap: wrap
    justify-content: center

    a
      font-family: 'DM Mono', monospace
      font-size: 0.78rem
      color: $muted
      text-decoration: none
      letter-spacing: 0.08em
      transition: color 0.25s
      border-bottom: 1px solid transparent
      padding-bottom: 2px

      &:hover
        color: $parchment
        border-bottom-color: rgba($parchment, 0.3)

      &:focus-visible
        outline: 2px solid $accent
        outline-offset: 4px
        border-radius: 2px

// ─── KEYFRAMES ─────────────────────────────────────────────
@keyframes pulse-dot
  0%, 100%
    opacity: 1
    transform: scale(1)
  50%
    opacity: 0.5
    transform: scale(0.8)

@keyframes line-drop
  0%
    transform: scaleY(0)
    transform-origin: top
  50%
    transform: scaleY(1)
    transform-origin: top
  51%
    transform-origin: bottom
  100%
    transform: scaleY(0)
    transform-origin: bottom

// ─── RESPONSIVE ────────────────────────────────────────────
@media (max-width: 900px)
  .navbar
    padding: 22px 24px
    &.scrolled
      padding: 16px 24px
    nav
      display: none
    .nav-cta
      display: none

  .hero
    padding: 120px 24px 60px
    .hero-main
      grid-template-columns: 1fr
      gap: 40px
    .hero-number
      display: none
    .hero-scroll
      display: none
    .hero-title .line-big
      font-size: clamp(3.5rem, 15vw, 6rem)

  .section-header
    padding: 0 24px
    padding-bottom: 20px
    flex-wrap: wrap

  .projects-section .projects-list
    padding: 0 24px

  .project-row
    grid-template-columns: 1fr 40px
    gap: 16px

    .project-index, .project-thumb
      display: none

  .about-strip
    padding: 80px 24px
    .strip-inner
      grid-template-columns: 1fr
      gap: 48px
    .strip-stats
      flex-direction: row
      flex-wrap: wrap
      padding-top: 0

  .contact-teaser
    padding: 80px 24px

    // Cambios en la tarjeta original
.project-row.clickable
  cursor: pointer // Indicamos que toda la fila es clicable

.project-thumb
  width: 180px !important // Aumentamos el tamaño de la imagen (antes 120px)
  height: 108px !important

@media (max-width: 900px)
  .project-row
    grid-template-columns: 1fr 40px !important // Reajuste móvil si es necesario

// Estilos del nuevo Modal
.modal-backdrop
  position: fixed
  inset: 0
  background: rgba($ink, 0.85)
  backdrop-filter: blur(8px)
  z-index: 999
  display: flex
  align-items: center
  justify-content: center
  padding: 40px

.modal-container
  background: $card
  border: 1px solid $border
  border-radius: 4px
  width: 100%
  max-width: 700px
  max-height: 90vh
  overflow-y: auto
  position: relative
  padding: 48px
  animation: modal-fade-in 0.3s ease-out

  &::-webkit-scrollbar
    width: 6px
  &::-webkit-scrollbar-thumb
    background: $muted
    border-radius: 3px

.modal-close
  position: absolute
  top: 24px
  right: 24px
  background: transparent
  border: none
  color: $muted
  cursor: pointer
  transition: color 0.2s

  &:hover
    color: $accent

.modal-eyebrow
  font-family: 'DM Mono', monospace
  font-size: 0.75rem
  color: $accent
  letter-spacing: 0.1em
  text-transform: uppercase
  display: block
  margin-bottom: 12px

.modal-body h2
  font-family: 'Playfair Display', serif
  font-size: 2.5rem
  font-weight: 700
  margin-bottom: 24px
  color: $parchment

.modal-hero-img
  width: 100%
  height: auto
  aspect-ratio: 16/9
  object-fit: cover
  border-radius: 4px
  margin-bottom: 32px
  border: 1px solid $border

.modal-text p
  color: rgba($parchment, 0.7)
  font-size: 1.05rem
  line-height: 1.8
  margin-bottom: 24px

.modal-text h3
  font-family: 'Playfair Display', serif
  font-size: 1.4rem
  color: $parchment
  margin: 32px 0 16px

.modal-list
  list-style: none
  padding: 0

  li
    position: relative
    padding-left: 20px
    color: rgba($parchment, 0.7)
    margin-bottom: 12px
    font-size: 1rem

    &::before
      content: '→'
      position: absolute
      left: 0
      color: $accent
      font-family: 'DM Mono', monospace

@keyframes modal-fade-in
  from
    opacity: 0
    transform: translateY(20px)
  to
    opacity: 1
    transform: translateY(0)

@media (max-width: 768px)
  .modal-backdrop
    padding: 20px
  .modal-container
    padding: 32px 24px
</style>
