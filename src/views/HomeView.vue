<template>
  <main class="portfolio-container">
    <header class="navbar">
      <div class="logo">Portfolio</div>
      <nav>
        <a href="#home" class="active">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </header>

    <section class="hero">
      <div class="hero-content">
        <div class="profile-icon">P</div>
        <h1>
          Hola, Soy Andres,<br />
          <span class="highlight">Full Stack Developer</span>
        </h1>
        <p class="subtitle">Convirtiendo café en código ☕️</p>

        <div class="hero-buttons">
          <button class="btn btn-primary">Ver Proyectos</button>
          <button class="btn btn-outline">Contactame</button>
        </div>
      </div>

      <div class="hero-visual">
        <div class="scene">
          <div class="cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-section">
      <h2>Proyectos Destacados</h2>
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="card-image">
            <img v-if="project.image" :src="project.image" :alt="project.title" />
            <div v-else class="cross-icon"></div>
          </div>

          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
            <div class="card-actions">
              <a :href="project.url" target="_blank" rel="noopener noreferrer">
                <button class="btn-small">Ver Demo</button>
              </a>

              <div class="tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h2>Contact Me</h2>
      <div class="contact-container">
        <div class="tech-stack">
          <div class="tech-circle active">
            <svg viewBox="0 0 128 128" width="24" height="24">
              <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z" />
              <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H22l42,72l42-72H78.8z" />
            </svg>
            Vue
          </div>

          <div class="tech-circle active">
            <svg viewBox="0 0 128 128" width="24" height="24">
              <path fill="#E0234E" d="M64 4.6L12.4 31.7v64.6L64 123.4l51.6-27.1V31.7L64 4.6z" />
              <path fill="#fff" d="M64 74.4L37.1 58.9l26.9-15.5 26.9 15.5L64 74.4z" opacity="0.6" />
            </svg>
            Nest.js
          </div>

          <div class="tech-circle active">
            <svg viewBox="0 0 128 128" width="24" height="24">
              <path
                fill="#3776AB"
                d="M64 12c-18.4 0-24 9.6-24 9.6V35h24v3.6H28S12 37.6 12 64c0 19.6 12.8 20.8 12.8 20.8h6.8v-8.8s-.4-10.4 10.4-10.4h24.4c10.4 0 10.4-10.4 10.4-10.4V29.6s.4-17.6-12.8-17.6zm-10 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
              />
              <path
                fill="#FFD43B"
                d="M91.2 43.2H84.4v8.8s.4 10.4-10.4 10.4H49.6c-10.4 0-10.4 10.4-10.4 10.4v25.2s-.4 17.6 12.8 17.6c18.4 0 24-9.6 24-9.6V93h-24v-3.6h36s16 1.2 16-25.2c0-19.6-12.8-20.8-12.8-20.8zm1.2 60.8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
              />
            </svg>
            Python
          </div>

          <div class="tech-circle active">
            <svg viewBox="0 0 128 128" width="24" height="24">
              <path
                fill="#FFC107"
                d="M21.8 98L32.6 30.6c.3-1.8 2.6-2.2 3.5-.6l18.4 34.6L21.8 98z"
              />
              <path
                fill="#FFA000"
                d="M68.5 60.5l-14-25.9c-.9-1.6-3.2-1.3-3.5.6L44.5 64.6l24 4.1-24-4.1 24-4.1z"
              />
              <path fill="#FFCA28" d="M68.5 60.5L95.2 9.6c.9-1.8-1.5-3.6-3-2.1L54.5 64.6l14-4.1z" />
              <path
                fill="#F57C00"
                d="M21.8 98l42.2 25.5c2.3 1.4 5.3 1.4 7.6 0L114.2 98 68.5 60.5 21.8 98z"
              />
            </svg>
            Firebase
          </div>

          <div class="tech-circle active">
            <svg viewBox="0 0 128 128" width="24" height="24">
              <path
                fill="#4DB33D"
                d="M64 4C64 4 32 50 32 78c0 20 12 38 32 46 20-8 32-26 32-46C96 50 64 4 64 4z"
              />
              <path fill="#3F9132" d="M64 124c-12-6-24-20-24-46 0-30 24-74 24-74v120z" />
            </svg>
            MongoDB
          </div>

          <div class="tech-circle active">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6" y2="6"></line>
              <line x1="6" y1="18" x2="6" y2="18"></line>
            </svg>
            APIs
          </div>
        </div>

        <form class="contact-form" @submit.prevent>
          <div class="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea placeholder="Your message..."></textarea>
          </div>

          <div class="form-footer">
            <button class="btn btn-primary btn-full">Send Message</button>
            <div class="social-icons">
              <span class="soc">in</span>
              <span class="soc">gh</span>
              <span class="soc">tw</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'TuZona App',
    image: '/img/tuZona.png',
    desc: 'Plataforma de estudio interactiva con generacion de examenes y retos con ia.',
    tags: ['Vue', 'Nest.js', 'MongoDB'],
    url: 'https://www.ponteaprobados.es',
  },
  {
    title: 'PicsView App',
    image: '/img/picsView.png',
    desc: 'Sistema de gestión de datos con firebase, firestore y pinia.',
    tags: ['Vue', 'Pinia', 'firebase'],
    url: 'https://firebase-firestore-pinia-favoritos.vercel.app',
  },
  {
    title: 'E-commerce UI',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&auto=format&fit=crop&q=60',
    desc: 'Interfaz moderna para tienda online.',
    tags: ['CSS', 'Pinia'],
    url: 'https://www.ponteaprobados.es',
  },
])
</script>

<style lang="sass">
// Variables
$bg-dark: #151517
$bg-card: #1e1e24
$primary-green: #5cdb95
$text-white: #ffffff
$text-gray: #a0a0a0
$border-color: #333

// Reset & Base
*
  box-sizing: border-box
  margin: 0
  padding: 0

body
  background-color: $bg-dark
  color: $text-white
  font-family: 'Inter', sans-serif
  overflow-x: hidden

.portfolio-container
  max-width: 1200px
  margin: 0 auto
  padding: 20px
  border-left: 1px solid rgba(255, 255, 255, 0.05)
  border-right: 1px solid rgba(255, 255, 255, 0.05)
  min-height: 100vh
  // Añadido para que el fondo del hero no se salga
  position: relative
  overflow: hidden

// Navbar
.navbar
  display: flex
  justify-content: space-between
  align-items: center
  padding: 20px 0
  // Reducido el margen inferior para que el hero suba un poco más
  margin-bottom: 20px
  position: relative
  z-index: 10

  .logo
    font-size: 1.5rem
    font-weight: 700
    color: $text-white

  nav
    display: flex
    gap: 30px

    a
      color: $text-gray
      text-decoration: none
      font-size: 0.9rem
      position: relative
      transition: color 0.3s

      &:hover, &.active
        color: $text-white

      &.active::after
        content: ''
        position: absolute
        bottom: -5px
        left: 0
        width: 100%
        height: 2px
        background-color: $primary-green

  .search-icon
    color: $text-gray
    cursor: pointer
    transition: color 0.3s
    &:hover
      color: $primary-green

// Hero Section (MODIFICADO PARA CENTRADO Y FONDO)
.hero
  display: flex
  align-items: center // Centra verticalmente los hijos
  justify-content: space-between
  // Eliminado padding-top fijo
  // padding-top: 40px
  margin-bottom: 100px
  // Altura mínima para que el centrado vertical funcione bien
  min-height: 60vh
  position: relative

  // FONDO DE CUADRÍCULA TECNOLÓGICA
  background-image: linear-gradient(rgba($text-white, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba($text-white, 0.03) 1px, transparent 1px)
  background-size: 50px 50px // Tamaño de los cuadros de la red

  .hero-content
    max-width: 50%
    position: relative
    z-index: 2 // Asegura que el texto esté sobre el fondo
    margin-left: 5%

    .profile-icon
      width: 60px
      height: 60px
      background: $bg-card
      border-radius: 50%
      display: flex
      align-items: center
      justify-content: center
      font-size: 1.5rem
      border: 1px solid $border-color
      margin-bottom: 20px
      font-family: serif
      color: $primary-green
      box-shadow: 0 0 15px rgba($primary-green, 0.2)

    h1
      font-size: 2.5rem
      line-height: 1.2
      margin-bottom: 15px
      text-shadow: 0 2px 4px rgba(0,0,0,0.5)

    .highlight
      display: block
      margin-top: 5px
      background: linear-gradient(90deg, $primary-green, #42b883)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent

    .subtitle
      color: $text-gray
      margin-bottom: 30px
      font-size: 1.1rem

    .hero-buttons
      display: flex
      gap: 15px

// 3D CUBE ANIMATION & GLOW BACKGROUND
.hero-visual
  width: 40%
  height: 300px
  display: flex
  justify-content: center
  align-items: center
  perspective: 1000px
  position: relative // Necesario para el glow absolute
  z-index: 1

  // EL RESPLANDOR VERDE DETRÁS DEL CUBO
  &::before
    content: ''
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 350px
    height: 350px
    // Gradiente radial que se desvanece
    background: radial-gradient(circle, rgba($primary-green, 0.25) 0%, rgba($bg-dark, 0) 70%)
    filter: blur(60px) // Desenfoque fuerte para el efecto glow
    z-index: -1 // Detrás del cubo

  .scene
    width: 150px
    height: 150px
    position: relative
    transform-style: preserve-3d
    animation: rotateCube 12s infinite linear

  .cube
    width: 100%
    height: 100%
    position: absolute
    transform-style: preserve-3d

    .face
      position: absolute
      width: 150px
      height: 150px
      border: 2px solid $primary-green
      background: rgba($primary-green, 0.05) // Un poco más transparente
      box-shadow: 0 0 20px rgba($primary-green, 0.4) inset, 0 0 5px rgba($primary-green, 0.2) // Brillo interno y externo
      backface-visibility: visible

      &.front
        transform: translateZ(75px)
      &.back
        transform: rotateY(180deg) translateZ(75px)
      &.right
        transform: rotateY(90deg) translateZ(75px)
      &.left
        transform: rotateY(-90deg) translateZ(75px)
      &.top
        transform: rotateX(90deg) translateZ(75px)
      &.bottom
        transform: rotateX(-90deg) translateZ(75px)

@keyframes rotateCube
  0%
    transform: rotateX(-20deg) rotateY(0deg)
  100%
    transform: rotateX(-20deg) rotateY(360deg)

// Buttons
.btn
  padding: 12px 28px
  border-radius: 6px
  font-weight: 600
  cursor: pointer
  transition: all 0.3s
  border: none
  font-size: 0.9rem

  &-primary
    background-color: $primary-green
    color: #151517
    box-shadow: 0 0 15px rgba($primary-green, 0.3)
    &:hover
      background-color: lighten($primary-green, 10%)
      transform: translateY(-2px)
      box-shadow: 0 0 25px rgba($primary-green, 0.5)

  &-outline
    background-color: transparent
    border: 1px solid $text-gray
    color: $text-white
    &:hover
      border-color: $text-white
      background-color: rgba(255,255,255,0.05)

// Projects Section
.projects-section
  margin-bottom: 100px
  position: relative
  z-index: 2

  h2
    margin-bottom: 30px
    font-size: 1.8rem
    border-left: 4px solid $primary-green
    padding-left: 15px

  .projects-grid
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
    gap: 30px

  .project-card
    background-color: $bg-card
    border: 1px solid $border-color
    border-radius: 16px
    padding: 20px
    transition: transform 0.3s ease, border-color 0.3s ease
    display: flex
    flex-direction: column

    &:hover
      transform: translateY(-5px)
      border-color: rgba($primary-green, 0.5)

      .card-image img
        transform: scale(1.05)

    .card-image
      height: 180px
      background-color: #2a2a30
      border-radius: 12px
      margin-bottom: 20px
      position: relative
      overflow: hidden
      border: 1px solid $border-color

      img
        width: 100%
        height: 100%
        object-fit: cover
        display: block
        transition: transform 0.5s ease

      .cross-icon
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center

        &::before, &::after
          content: ''
          position: absolute
          width: 40px
          height: 1px
          background: $text-gray
        &::before
          transform: rotate(45deg)
        &::after
          transform: rotate(-45deg)

    .card-content
      flex-grow: 1
      display: flex
      flex-direction: column

      h3
        font-size: 1.2rem
        margin-bottom: 10px
        color: $text-white

      p
        font-size: 0.9rem
        color: $text-gray
        margin-bottom: 20px
        line-height: 1.5
        flex-grow: 1

      .card-actions
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: auto

        .btn-small
          background: transparent
          border: 1px solid $border-color
          color: $text-white
          padding: 8px 16px
          border-radius: 20px
          font-size: 0.8rem
          cursor: pointer
          transition: all 0.3s
          &:hover
            border-color: $primary-green
            color: $primary-green

        .tags
          display: flex
          gap: 8px
          flex-wrap: wrap
          justify-content: flex-end

          .tag
            font-size: 0.7rem
            color: $primary-green
            background: rgba($primary-green, 0.1)
            padding: 4px 10px
            border-radius: 12px
            font-weight: 500

// Contact Section
.contact-section
  border-top: 1px solid $border-color
  padding-top: 60px
  margin-bottom: 40px
  position: relative
  z-index: 2

  h2
    margin-bottom: 40px
    font-size: 1.8rem

  .contact-container
    display: flex
    gap: 60px
    flex-wrap: wrap

    .tech-stack
      flex: 1
      min-width: 250px
      display: flex
      flex-direction: column
      gap: 20px

      .tech-circle
        display: flex
        align-items: center
        gap: 15px
        padding: 10px
        border-radius: 50px
        transition: all 0.3s
        cursor: default
        color: $text-gray
        font-weight: 500
        border: 1px solid transparent

        &:hover
          color: $text-white
          background: rgba(255,255,255,0.05)
          border-color: rgba($primary-green, 0.3)
          transform: translateX(10px)

        svg
          min-width: 24px

    .contact-form
      flex: 1.5
      min-width: 300px

      .form-group
        margin-bottom: 20px

        label
          display: block
          font-size: 0.9rem
          margin-bottom: 8px
          color: $text-gray

        input, textarea
          width: 100%
          background: $bg-card
          border: 1px solid $border-color
          padding: 12px
          border-radius: 8px
          color: $text-white
          font-family: inherit
          transition: border-color 0.3s

          &:focus
            outline: none
            border-color: $primary-green

        textarea
          height: 120px
          resize: none

      .form-footer
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 30px

        .btn-full
          width: auto
          min-width: 150px

        .social-icons
          display: flex
          gap: 15px

          .soc
            width: 36px
            height: 36px
            background: $bg-card
            border-radius: 50%
            display: flex
            align-items: center
            justify-content: center
            font-size: 0.8rem
            color: $text-gray
            cursor: pointer
            border: 1px solid $border-color
            transition: all 0.3s
            &:hover
              background: $primary-green
              color: black
              border-color: $primary-green
              transform: translateY(-3px)
</style>
