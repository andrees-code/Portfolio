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
      <router-link to="/contacto" class="nav-cta" aria-label="Contactar a Andrés">Hablemos</router-link>
    </header>

    <!-- PAGE HERO -->
    <section class="page-hero" aria-labelledby="skills-title">
      <div class="page-hero-inner">
        <span class="page-label" aria-hidden="true">03 / Skills</span>
        <h1 id="skills-title">
          Con qué<br/>
          <em>trabajo</em>
        </h1>
        <p>Herramientas y tecnologías que uso a diario para transformar ideas en productos funcionales.</p>
      </div>
    </section>

    <!-- SKILLS -->
    <div class="skills-wrapper">
      <section
        v-for="(category, catIndex) in techStack"
        :key="catIndex"
        class="skill-category"
        :aria-labelledby="'cat-' + catIndex"
      >
        <div class="category-header">
          <span class="cat-number" aria-hidden="true">{{ String(catIndex + 1).padStart(2, '0') }}</span>
          <h2 :id="'cat-' + catIndex">{{ category.title }}</h2>
        </div>

        <div class="skills-grid" role="list" :aria-label="category.title + ' skills'">
          <div
            v-for="skill in category.items"
            :key="skill.name"
            class="skill-card"
            role="listitem"
          >
            <div class="skill-top">
              <div class="skill-icon" v-html="skill.icon" aria-hidden="true"></div>
              <div class="skill-level-badge" :aria-label="skill.name + ' nivel ' + skill.level + ' porciento'">
                <span>{{ skill.level }}%</span>
              </div>
            </div>

            <div class="skill-info">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <div
                class="progress-track"
                role="progressbar"
                :aria-valuenow="skill.level"
                aria-valuemin="0"
                aria-valuemax="100"
                :aria-label="skill.name"
              >
                <div class="progress-fill" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
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

const techStack = ref([
  {
    title: 'Frontend',
    items: [
      { name: 'Vue.js', level: 80, icon: '<svg viewBox="0 0 128 128" width="28"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"/><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H22l42,72l42-72H78.8z"/></svg>' },
      { name: 'Angular', level: 50, icon: '<svg viewBox="0 0 24 24" width="28" fill="#DD0031"><path d="M12 2.5l-9.9 3.6 1.6 13.4L12 21.5l8.3-2 1.6-13.4L12 2.5zm0 2.8l6.7 2.4-1.2 9.7-5.5 1.3-5.5-1.3-1.2-9.7 6.7-2.4z"/></svg>' },
      { name: 'Ionic', level: 50, icon: '<svg viewBox="0 0 512 512" width="28" fill="#3880ff"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"/><circle cx="256" cy="256" r="48" fill="#fff"/></svg>' },
      { name: 'JavaScript ES6+', level: 90, icon: '<svg viewBox="0 0 128 128" width="28"><path fill="#f7df1e" d="M1.4 1.4h125.2v125.2h-125.2z"/><path d="M67.8 108.2c2.1 3.8 6.6 6.5 11.5 6.5 7.1 0 11.5-3.5 11.5-16.1v-44.5h14.1v44.8c0 20.3-11.8 28.1-25.2 28.1-11.4 0-19-5.4-23.3-13.8l11.4-5z"/></svg>' },
      { name: 'CSS / SASS', level: 70, icon: '<svg viewBox="0 0 128 128" width="28"><path fill="#CD6799" d="M64,128c35.3,0,64-28.7,64-64S99.3,0,64,0S0,28.7,0,64S28.7,128,64,128z"/></svg>' },
      { name: 'Tailwind CSS', level: 70, icon: '<svg viewBox="0 0 128 128" width="28"><path fill="#38bdf8" d="M64 16c-17 0-27.5 8.5-31.5 25.5 6.3-8.5 13.7-11.7 22-9.6 4.8 1.2 8.2 4.7 12 8.4 6.2 6.1 13.4 13.2 29 13.2 17 0 27.5-8.5 31.5-25.5-6.3 8.5-13.7 11.7-22 9.6-4.8-1.2-8.2-4.7-12-8.4C86.8 23.1 79.6 16 64 16zm-32 34C15 50 4.5 58.5.5 75.5c6.3-8.5 13.7-11.7 22-9.6 4.8 1.2 8.2 4.7 12 8.4 6.2 6.1 13.4 13.2 29 13.2 17 0 27.5-8.5 31.5-25.5-6.3 8.5-13.7 11.7-22 9.6-4.8-1.2-8.2-4.7-12-8.4C54.8 57.1 47.6 50 32 50z"/></svg>' },
    ]
  },
  {
    title: 'Backend & Datos',
    items: [
      { name: 'Nest.js', level: 85, icon: '<svg viewBox="0 0 128 128" width="28"><path fill="#E0234E" d="M64 4.6L12.4 31.7v64.6L64 123.4l51.6-27.1V31.7L64 4.6z M107 90L64 112 21 90V38l43-22 43 22v52z"/></svg>' },
      { name: 'Python', level: 75, icon: '<svg viewBox="0 0 128 128" width="28"><path fill="#3776AB" d="M64 12c-18.4 0-24 9.6-24 9.6V35h24v3.6H28S12 37.6 12 64c0 19.6 12.8 20.8 12.8 20.8h6.8v-8.8s-.4-10.4 10.4-10.4h24.4c10.4 0 10.4-10.4 10.4-10.4V29.6s.4-17.6-12.8-17.6z"/><path fill="#FFD43B" d="M64 116c18.4 0 24-9.6 24-9.6V93H64v-3.6h36s16-2.6 16-29c0-19.6-12.8-20.8-12.8-20.8h-6.8v8.8s.4 10.4-10.4 10.4H61.6c-10.4 0-10.4 10.4-10.4 10.4v26s-.4 17.6 12.8 17.6z"/></svg>' },
      { name: 'MongoDB', level: 80, icon: '<svg viewBox="0 0 24 24" width="28" fill="#47A248"><path d="M12.19 21.82c-.85-2.07-2.38-4.72-2.38-8.91 0-3.35 1.63-7.55 1.63-7.55s.98 3.52 1.63 6.94c.15.82 1 5.37-1 9.5zM12 0S6.16 6.13 6.16 12.44C6.16 22 12 24 12 24s5.84-2 5.84-11.56C17.84 6.13 12 0 12 0z"/></svg>' },
      { name: 'Firebase', level: 80, icon: '<svg viewBox="0 0 24 24" width="28"><path fill="#FFCA28" d="M4.6 16.5l2.8-8.8 1.4-1.3L3.3 2.6c-.3-.8-1.5-.6-1.5.3l2.8 13.6z"/><path fill="#FFA000" d="M15.4 5.9L12.6.4c-.3-.6-1.2-.6-1.5 0l-4 7.6 5.6 10.7 2.7-12.8z"/><path fill="#FFCA28" d="M15.4 5.9l-2.4 11.5 6.7 3.8c.8.5 1.8-.1 1.8-1L15.4 5.9z"/></svg>' },
      { name: 'MySQL', level: 80, icon: '<svg viewBox="0 0 24 24" width="28" fill="#00758F"><path d="M12.1 12.3c-.4.5-.4.8-.4 1.1 0 1.5 1.6 2.3 2.7 2.3 2.3 0 2.2-2.3 2.1-3.6-.1-1.3-1-3.3-2-4.1-.7-.6-1.7-1.1-2.9-1.1-3.6 0-5.7 3-5.7 7 0 2.7 1.3 5.4 4.5 5.4 1.8 0 3.2-.8 3.8-1.4l.7 1.5c-.8.8-2.6 1.8-5 1.8-4.8 0-7-3.9-7-8.1 0-5.4 3.3-8.8 8.1-8.8 3.8 0 5.4 2.5 5.4 4.8 0 1.9-.9 4.8-4.3 4.8-.9.1-1.5-.3-1.6-.7h1.6z"/></svg>' },
      { name: 'Hugging Face', level: 40, icon: '<text y="20" font-size="20">🤗</text>' },
      { name: 'MySQL Server', level: 50, icon: '<svg viewBox="0 0 24 24" width="28" fill="#00758F"><path d="M12.1 12.3c-.4.5-.4.8-.4 1.1 0 1.5 1.6 2.3 2.7 2.3 2.3 0 2.2-2.3 2.1-3.6-.1-1.3-1-3.3-2-4.1-.7-.6-1.7-1.1-2.9-1.1-3.6 0-5.7 3-5.7 7 0 2.7 1.3 5.4 4.5 5.4 1.8 0 3.2-.8 3.8-1.4l.7 1.5c-.8.8-2.6 1.8-5 1.8-4.8 0-7-3.9-7-8.1 0-5.4 3.3-8.8 8.1-8.8 3.8 0 5.4 2.5 5.4 4.8 0 1.9-.9 4.8-4.3 4.8-.9.1-1.5-.3-1.6-.7h1.6z"/></svg>' },
    ]
  },
  {
    title: 'Despliegue',
    items: [
      { name: 'GitHub', level: 65, icon: '<svg viewBox="0 0 24 24" width="28" fill="#f2ede6"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>' },
      { name: 'Vercel', level: 70, icon: '<svg viewBox="0 0 24 24" width="28" fill="#f2ede6"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>' },
      { name: 'Render', level: 50, icon: '<svg viewBox="0 0 24 24" width="28" fill="none" stroke="#f2ede6" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h5a2 2 0 0 1 0 4H8m0-4v8m5-4h3"/></svg>' },
      { name: 'CleverCloud', level: 20, icon: '<svg viewBox="0 0 24 24" width="28" fill="none" stroke="#f2ede6" stroke-width="1.5"><path d="M7 19h11a5 5 0 0 0 .6-9.9 7 7 0 0 0-13.2-2.1A5 5 0 0 0 7 19z"/></svg>' },
      { name: 'SEO & Optimización', level: 52, icon: '<svg viewBox="0 0 24 24" width="28" fill="none" stroke="#f2ede6" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6m-3-3h6"/></svg>' },
    ]
  },
  {
    title: 'Redes & Servidores',
    items: [
      { name: 'WebSockets', level: 15, icon: '<svg viewBox="0 0 24 24" width="28" fill="none" stroke="#f2ede6" stroke-width="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>' },
      { name: 'Balanceo de Carga', level: 15, icon: '<svg viewBox="0 0 24 24" width="28" fill="none" stroke="#f2ede6" stroke-width="1.5"><path d="M12 3v18M3 9l9-6 9 6M3 15l9 6 9-6"/></svg>' },
      { name: 'Nginx', level: 15, icon: '<svg viewBox="0 0 24 24" width="28" fill="#009639"><path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 2.5l8.1 4.7v9.6L12 21.5 3.9 16.8V7.2L12 2.5z"/></svg>' },
      { name: 'Apache2', level: 15, icon: '<svg viewBox="0 0 24 24" width="28" fill="#D22128"><path d="M12 1L2 6.5v11L12 23l10-5.5v-11L12 1z"/></svg>' },
    ]
  },
  {
    title: 'Infraestructura & Cloud',
    items: [
      { name: 'Docker (Microsoft)', level: 70, icon: '<svg viewBox="0 0 24 24" width="28" fill="#2496ED"><path d="M13.983 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.283 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.283 8.378h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186V8.564c0-.102.084-.186.186-.186zm-2.7 2.7h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.583a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.7 0h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H5.883a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zm2.7-2.7h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.583a.186.186 0 01-.186-.186V8.564c0-.102.084-.186.186-.186zm0-2.7h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.583a.186.186 0 01-.186-.186V5.864c0-.102.084-.186.186-.186zm-2.7 2.7h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H5.883a.186.186 0 01-.186-.186V8.564c0-.102.084-.186.186-.186zm-2.7 2.7h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H3.183a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM22.347 13.423c-.118-.696-.612-1.285-1.275-1.603-1.033-.505-2.135-.334-3.489-.334-.264 0-.549-.002-.866-.012v2.09c.86.05 1.511.23 2.04.428.375.141.6.301.693.466.148.259.085.551-.086.826-.372.597-1.332.934-2.31 1.054a10.024 10.024 0 01-1.333.056c-1.89-.01-4.01-.21-5.956-.816V18.5c.594.12 1.155.211 1.683.27 1.13.127 1.834.155 2.856.155.114 0 .228 0 .342-.003 4.412-.11 8.286-2.518 8.746-5.5zm-4.346-3.085h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186z"/></svg>' },
      { name: 'Vercel Blob', level: 60, icon: '<svg viewBox="0 0 24 24" width="28" fill="#f2ede6"><path d="M12 2L2 19.777h20L12 2z"/></svg>' },
      { name: 'GitHub Actions', level: 65, icon: '<svg viewBox="0 0 24 24" width="28" fill="#f2ede6"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>' },
    ]
  }
])
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap')

$ink:       #0e0e0e
$parchment: #f2ede6
$accent:    #d4603a
$muted:     #7a7570
$card:      #141210
$border:    rgba(242,237,230,0.1)

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

// ─── PAGE HERO ─────────────────────────────────────────────
.page-hero
  padding: 160px 60px 80px
  border-bottom: 1px solid $border

  .page-hero-inner
    max-width: 700px

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
    font-size: clamp(3rem, 7vw, 6rem)
    font-weight: 900
    line-height: 1.0
    margin-bottom: 24px
    letter-spacing: -0.02em

    em
      font-style: italic
      color: $accent

  p
    font-size: 1.1rem
    color: rgba($parchment, 0.6)
    line-height: 1.7

// ─── SKILLS ────────────────────────────────────────────────
.skills-wrapper
  padding: 80px 60px 120px

.skill-category
  margin-bottom: 80px

  &:last-child
    margin-bottom: 0

.category-header
  display: flex
  align-items: baseline
  gap: 20px
  margin-bottom: 40px
  padding-bottom: 16px
  border-bottom: 1px solid $border

  .cat-number
    font-family: 'Playfair Display', serif
    font-size: 0.75rem
    color: $accent
    letter-spacing: 0.15em
    font-style: italic

  h2
    font-family: 'Playfair Display', serif
    font-size: 1.8rem
    font-weight: 700

.skills-grid
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))
  gap: 2px
  background: $border

.skill-card
  background: $ink
  padding: 28px
  transition: background 0.25s
  display: flex
  flex-direction: column
  gap: 20px

  &:hover
    background: $card
    .progress-fill
      filter: brightness(1.2)

.skill-top
  display: flex
  justify-content: space-between
  align-items: flex-start

  .skill-icon
    width: 36px
    height: 36px
    display: flex
    align-items: center
    justify-content: center

  .skill-level-badge
    font-family: 'DM Mono', monospace
    font-size: 0.75rem
    color: $muted
    letter-spacing: 0.05em

.skill-info
  .skill-name
    font-size: 0.95rem
    font-weight: 500
    color: $parchment
    margin-bottom: 12px
    font-family: 'DM Sans', sans-serif

  .progress-track
    height: 3px
    background: rgba($parchment, 0.08)
    border-radius: 2px
    overflow: hidden

    .progress-fill
      height: 100%
      background: $accent
      border-radius: 2px
      transition: width 1.2s cubic-bezier(0.25, 1, 0.5, 1)

// ─── RESPONSIVE ────────────────────────────────────────────
@media (max-width: 900px)
  .navbar
    padding: 22px 24px
    &.scrolled
      padding: 16px 24px
    nav, .nav-cta
      display: none

  .page-hero
    padding: 120px 24px 60px

  .skills-wrapper
    padding: 60px 24px 80px

  .skills-grid
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))
</style>
