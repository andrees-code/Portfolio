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

    <section class="page-hero" aria-labelledby="projects-page-title">
      <div class="page-hero-inner">
        <span class="page-label" aria-hidden="true">02 / Proyectos</span>
        <h1 id="projects-page-title">
          Cosas que<br/>
          <em>he construido</em>
        </h1>
        <p>Una selección de proyectos reales, con código real y decisiones técnicas que puedo defender.</p>
      </div>
    </section>

    <div class="filter-bar" role="group" aria-label="Filtrar proyectos por tecnología">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="currentFilter = filter"
        :class="['filter-btn', { active: currentFilter === filter }]"
        :aria-pressed="currentFilter === filter"
      >
        {{ filter }}
      </button>
    </div>

    <section class="projects-grid" aria-live="polite" aria-label="Lista de proyectos filtrados">
      <article
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        class="project-card"
      >
        <div class="card-visual">
          <img v-if="project.image" :src="project.image" :alt="'Captura de pantalla de ' + project.title" />
          <div v-else class="card-placeholder" aria-hidden="true">
            <span>{{ project.title.charAt(0) }}</span>
          </div>
          <div class="card-overlay" aria-hidden="true">
            <a :href="project.url" target="_blank" rel="noopener noreferrer" tabindex="-1">Abrir →</a>
          </div>
        </div>

        <div class="card-body">
          <div class="card-meta">
            <div class="card-tags" role="list" :aria-label="'Tecnologías'">
              <span v-for="tag in project.tags" :key="tag" class="tag" role="listitem">{{ tag }}</span>
            </div>
            <span class="card-index" aria-hidden="true">{{ String(index + 1).padStart(2,'0') }}</span>
          </div>

          <h2 class="card-title">{{ project.title }}</h2>
          <p class="card-desc">{{ project.desc }}</p>

          <div class="card-footer">
            <a :href="project.url" target="_blank" rel="noopener noreferrer" class="card-link" :aria-label="'Ver demo de ' + project.title">
              <span>Ver demo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="card-link ghost" :aria-label="'Ver repositorio de ' + project.title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span>Código</span>
            </a>
          </div>
        </div>
      </article>
    </section>

    <div v-if="filteredProjects.length === 0" class="empty-state" role="alert">
      <p>No hay proyectos con el filtro <em>{{ currentFilter }}</em> por ahora.</p>
    </div>

  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import projectsData from '../assets/projects.json'

const isScrolled = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const currentFilter = ref('Todos')
const filters = ['Todos', 'Vue', 'Nest.js', 'MongoDB', 'Python', 'AI']

const projects = ref(projectsData)

const filteredProjects = computed(() => {
  if (currentFilter.value === 'Todos') return projects.value
  return projects.value.filter(p => p.tags.includes(currentFilter.value))
})
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap')

$ink:       #0e0e0e
$parchment: #f2ede6
$accent:    #d4603a
$muted:     #7a7570
$card:      #141210
$border:    rgba(242,237,230,0.1)

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
    max-width: 460px

// ─── FILTERS ───────────────────────────────────────────────
.filter-bar
  display: flex
  gap: 0
  padding: 0 60px
  border-bottom: 1px solid $border
  overflow-x: auto
  scrollbar-width: none

  &::-webkit-scrollbar
    display: none

  .filter-btn
    background: transparent
    border: none
    border-bottom: 2px solid transparent
    color: $muted
    font-family: 'DM Mono', monospace
    font-size: 0.75rem
    letter-spacing: 0.1em
    text-transform: uppercase
    padding: 20px 28px
    cursor: pointer
    transition: all 0.25s
    white-space: nowrap

    &:hover
      color: $parchment

    &.active
      color: $accent
      border-bottom-color: $accent

    &:focus-visible
      outline: 2px solid $accent
      outline-offset: -2px

// ─── PROJECTS GRID ─────────────────────────────────────────
.projects-grid
  display: flex
  flex-wrap: wrap
  justify-content: center
  gap: 32px
  margin: 60px

  .project-card
    width: 360px
    max-width: 100%
    background: $ink
    border: 1px solid $border
    display: flex
    flex-direction: column
    transition: background 0.3s

    &:hover
      background: $card
      .card-visual img
        transform: scale(1.04)
      .card-overlay
        opacity: 1
      .card-title
        color: $accent

    .card-visual
      aspect-ratio: 16/9
      overflow: hidden
      position: relative
      background: $card
      border-bottom: 1px solid $border

      img
        width: 100%
        height: 100%
        object-fit: cover
        transition: transform 0.6s ease
        display: block

      .card-placeholder
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        background: darken($card, 2%)

        span
          font-family: 'Playfair Display', serif
          font-size: 5rem
          font-weight: 900
          color: rgba($parchment, 0.05)

      .card-overlay
        position: absolute
        inset: 0
        background: rgba($ink, 0.75)
        display: flex
        align-items: center
        justify-content: center
        opacity: 0
        transition: opacity 0.3s

        a
          color: $parchment
          font-family: 'DM Mono', monospace
          font-size: 0.85rem
          letter-spacing: 0.1em
          text-transform: uppercase
          text-decoration: none
          border-bottom: 1px solid rgba($parchment, 0.4)
          padding-bottom: 4px

    .card-body
      padding: 28px 32px 32px
      flex-grow: 1
      display: flex
      flex-direction: column

    .card-meta
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 16px

    .card-tags
      display: flex
      gap: 10px
      flex-wrap: wrap

      .tag
        font-family: 'DM Mono', monospace
        font-size: 0.65rem
        color: $muted
        letter-spacing: 0.08em
        text-transform: uppercase

    .card-index
      font-family: 'Playfair Display', serif
      font-size: 0.7rem
      color: rgba($muted, 0.4)
      letter-spacing: 0.1em

    .card-title
      font-family: 'Playfair Display', serif
      font-size: 1.6rem
      font-weight: 700
      margin-bottom: 12px
      transition: color 0.25s
      line-height: 1.2

    .card-desc
      font-size: 0.9rem
      color: rgba($parchment, 0.55)
      line-height: 1.7
      flex-grow: 1
      margin-bottom: 28px

    .card-footer
      display: flex
      gap: 20px
      border-top: 1px solid $border
      padding-top: 20px

    .card-link
      display: inline-flex
      align-items: center
      gap: 8px
      font-family: 'DM Mono', monospace
      font-size: 0.75rem
      letter-spacing: 0.08em
      text-transform: uppercase
      color: $parchment
      text-decoration: none
      background: $accent
      padding: 9px 18px
      border-radius: 2px
      transition: all 0.25s

      &:hover
        background: lighten($accent, 8%)

      &.ghost
        background: transparent
        color: $muted
        padding: 9px 0

        &:hover
          color: $parchment

      &:focus-visible
        outline: 2px solid $parchment
        outline-offset: 3px

// ─── EMPTY STATE ───────────────────────────────────────────
.empty-state
  text-align: center
  padding: 80px 60px
  color: $muted
  font-family: 'DM Mono', monospace
  font-size: 0.9rem

  em
    color: $accent
    font-style: italic

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

  .filter-bar
    padding: 0 24px

  .projects-grid
    margin: 40px 24px
    gap: 24px

  .project-card
    width: 100%

  .card-body
    padding: 24px !important
</style>
