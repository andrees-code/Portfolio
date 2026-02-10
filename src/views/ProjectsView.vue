<template>
  <main class="portfolio-container">
    <header class="navbar">
      <div class="logo">Portfolio</div>
      <nav>
        <a href="/home">Home</a>
        <a href="/projects" class="active">Projects</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact</a>
      </nav>
      <div class="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </header>

    <section class="projects-header">
      <div class="header-content">
        <h1>Mis <span class="highlight">Proyectos</span></h1>
        <p class="subtitle">Una selección de mis trabajos más recientes y experimentos técnicos.</p>
      </div>

      <div class="filter-bar">
        <button
          v-for="filter in ['Todos', 'Vue', 'Nest.js', 'Firebase', 'CSS']"
          :key="filter"
          @click="currentFilter = filter"
          :class="['filter-btn', { active: currentFilter === filter }]"
        >
          {{ filter }}
        </button>
      </div>
    </section>

    <section class="projects-grid">
      <div
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="project-card-large"
      >
        <div class="project-visual">
          <img v-if="project.image" :src="project.image" :alt="project.title" />
          <div v-else class="placeholder-visual"></div>
          <div class="overlay">
            <a :href="project.url" target="_blank" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>

        <div class="project-info">
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <div class="project-footer">
            <a :href="project.github" v-if="project.github" class="github-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Repositorio
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentFilter = ref('Todos')

const projects = ref([
  {
    title: 'TuZona App',
    image: '/img/tuZona.png',
    desc: 'Plataforma de estudio interactiva con generación de exámenes y retos mediante inteligencia artificial. Optimizada para rendimiento y escalabilidad.',
    tags: ['Vue', 'Nest.js', 'MongoDB'],
    url: 'https://www.ponteaprobados.es',
    github: '#'
  },
  {
    title: 'PicsView App',
    image: '/img/picsView.png',
    desc: 'Sistema de gestión de datos en tiempo real. Utiliza Firebase para la autenticación y almacenamiento, con una interfaz fluida gestionada por Pinia.',
    tags: ['Vue', 'Pinia', 'Firebase'],
    url: 'https://firebase-firestore-pinia-favoritos.vercel.app',
    github: '#'
  },
  {
    title: 'WorkSpace App',
    image: '/img/workSpace.png',
    desc: 'E-commerce conceptual con un enfoque minimalista. Implementación avanzada de layouts con CSS Grid y transiciones suaves.',
    tags: ['CSS', 'Pinia', 'Vue'],
    url: 'https://workspace-kappa-wheat.vercel.app',
    github: '#'
  }
])

const filteredProjects = computed(() => {
  if (currentFilter.value === 'Todos') return projects.value
  return projects.value.filter(p => p.tags.includes(currentFilter.value))
})
</script>

<style lang="sass" scoped>
$bg-dark: #151517
$bg-card: #1e1e24
$primary-green: #5cdb95
$text-white: #ffffff
$text-gray: #a0a0a0
$border-color: #333

.projects-header
  padding: 60px 5% 40px
  background-image: linear-gradient(rgba($text-white, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba($text-white, 0.03) 1px, transparent 1px)
  background-size: 50px 50px
  border-bottom: 1px solid $border-color

  .highlight
    background: linear-gradient(90deg, $primary-green, #42b883)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

  .filter-bar
    margin-top: 30px
    display: flex
    gap: 10px
    flex-wrap: wrap

    .filter-btn
      background: transparent
      border: 1px solid $border-color
      color: $text-gray
      padding: 8px 20px
      border-radius: 25px
      cursor: pointer
      transition: all 0.3s

      &:hover, &.active
        border-color: $primary-green
        color: $primary-green
        background: rgba($primary-green, 0.05)

.projects-grid
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))
  gap: 40px
  padding: 60px 5%

.project-card-large
  background: $bg-card
  border: 1px solid $border-color
  border-radius: 20px
  overflow: hidden
  transition: transform 0.4s ease

  &:hover
    transform: translateY(-10px)
    border-color: rgba($primary-green, 0.4)

  .project-visual
    height: 250px
    position: relative
    overflow: hidden
    background: #2a2a30

    img
      width: 100%
      height: 100%
      object-fit: cover
      transition: transform 0.6s ease

    .overlay
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba($bg-dark, 0.8)
      display: flex
      align-items: center
      justify-content: center
      opacity: 0
      transition: opacity 0.3s ease

    &:hover
      .overlay
        opacity: 1
      img
        transform: scale(1.1)

  .project-info
    padding: 30px

    h3
      font-size: 1.5rem
      margin: 15px 0
      color: $text-white

    p
      color: $text-gray
      line-height: 1.6
      font-size: 0.95rem
      margin-bottom: 20px

    .project-tags
      display: flex
      gap: 10px

      .tag
        font-size: 0.75rem
        color: $primary-green
        background: rgba($primary-green, 0.1)
        padding: 4px 12px
        border-radius: 15px

    .project-footer
      border-top: 1px solid $border-color
      padding-top: 20px

      .github-link
        color: $text-gray
        text-decoration: none
        display: flex
        align-items: center
        gap: 8px
        font-size: 0.9rem
        transition: color 0.3s

        &:hover
          color: $text-white

@media (max-width: 600px)
  .projects-grid
    grid-template-columns: 1fr
</style>
