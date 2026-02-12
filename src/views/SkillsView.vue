<template>
  <main class="portfolio-container">
    <header class="navbar">
      <div class="logo">Portfolio</div>
      <nav>
        <a href="/home">Home</a>
        <a href="/projects">Projects</a>
        <a href="/skills" class="active">Skills</a>
        <a href="/contacto">Contact</a>
      </nav>
      <div class="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
    </header>

    <section class="skills-header">
      <h1>Tech <span class="highlight">Stack</span></h1>
      <p class="subtitle">Herramientas y tecnologías que utilizo para dar vida a las ideas.</p>
    </section>

    <section class="skills-sections">
      <div v-for="(category, index) in techStack" :key="index" class="skill-category">
        <h2>{{ category.title }}</h2>
        <div class="skills-grid">
          <div v-for="skill in category.items" :key="skill.name" class="skill-item">
            <div class="skill-icon-container">
              <div class="icon-wrapper" v-html="skill.icon"></div>
            </div>
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

// He actualizado los SVGs para que correspondan a la marca real
const techStack = ref([
  {
    title: 'Frontend Development',
    items: [
      { 
        name: 'Vue.js', 
        level: 80, 
        icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"/><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H22l42,72l42-72H78.8z"/></svg>' 
      },
      { 
        name: 'Angular', 
        level: 50, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#DD0031"><path d="M12 2.5l-9.9 3.6 1.6 13.4L12 21.5l8.3-2 1.6-13.4L12 2.5zm0 2.8l6.7 2.4-1.2 9.7-5.5 1.3-5.5-1.3-1.2-9.7 6.7-2.4z"/></svg>' 
      },      
      { 
        name: 'Ionic', 
        level: 50, 
        icon: '<svg viewBox="0 0 512 512" width="30" fill="#3880ff"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"/><circle cx="256" cy="256" r="48" fill="#fff"/></svg>' 
      },    
      { 
        name: 'JavaScript (ES6+)', 
        level: 90, 
        icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#f7df1e" d="M1.4 1.4h125.2v125.2h-125.2z"/><path d="M67.8 108.2c2.1 3.8 6.6 6.5 11.5 6.5 7.1 0 11.5-3.5 11.5-16.1v-44.5h14.1v44.8c0 20.3-11.8 28.1-25.2 28.1-11.4 0-19-5.4-23.3-13.8l11.4-5z"/></svg>' 
      },  
      { 
        name: 'CSS / SASS', 
        level: 70, 
        icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#CD6799" d="M64,128c35.3,0,64-28.7,64-64S99.3,0,64,0S0,28.7,0,64S28.7,128,64,128z M35,46.3c0-4.5,3.6-8.1,8.1-8.1 c4.5,0,8.1,3.6,8.1,8.1c0,4.5-3.6,8.1-8.1,8.1C38.6,54.4,35,50.8,35,46.3z M84.9,46.3c0-4.5,3.6-8.1,8.1-8.1 c4.5,0,8.1,3.6,8.1,8.1c0,4.5-3.6,8.1-8.1,8.1C88.5,54.4,84.9,50.8,84.9,46.3z M34.4,86.2c9.5,8.9,20,13.8,29.9,13.8 c14.2,0,22.8-9.8,22.8-26.1c0-21.6-17.5-24.8-24.9-26.4c-6.1-1.3-7.5-3.1-7.5-5.9c0-3,2.4-5.1,6.5-5.1c4.5,0,9,2.3,13.1,6.1 l5.8-7.6c-4.8-4.9-11.4-8.3-19-8.3c-10.4,0-17.4,6.7-17.4,16c0,13.1,12.3,17.4,22.4,19.6c6.1,1.3,7.5,3.5,7.5,6.5 c0,5.1-4.7,8-11.5,8c-6.6,0-12.7-3.8-17.6-9.1L34.4,86.2z"/></svg>' 
      },      
      { 
        name: 'Tailwind/ Css', 
        level: 70, 
        icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#CD6799" d="M64,128c35.3,0,64-28.7,64-64S99.3,0,64,0S0,28.7,0,64S28.7,128,64,128z M35,46.3c0-4.5,3.6-8.1,8.1-8.1 c4.5,0,8.1,3.6,8.1,8.1c0,4.5-3.6,8.1-8.1,8.1C38.6,54.4,35,50.8,35,46.3z M84.9,46.3c0-4.5,3.6-8.1,8.1-8.1 c4.5,0,8.1,3.6,8.1,8.1c0,4.5-3.6,8.1-8.1,8.1C88.5,54.4,84.9,50.8,84.9,46.3z M34.4,86.2c9.5,8.9,20,13.8,29.9,13.8 c14.2,0,22.8-9.8,22.8-26.1c0-21.6-17.5-24.8-24.9-26.4c-6.1-1.3-7.5-3.1-7.5-5.9c0-3,2.4-5.1,6.5-5.1c4.5,0,9,2.3,13.1,6.1 l5.8-7.6c-4.8-4.9-11.4-8.3-19-8.3c-10.4,0-17.4,6.7-17.4,16c0,13.1,12.3,17.4,22.4,19.6c6.1,1.3,7.5,3.5,7.5,6.5 c0,5.1-4.7,8-11.5,8c-6.6,0-12.7-3.8-17.6-9.1L34.4,86.2z"/></svg>' 
      }
    ]
  },
  {
    title: 'Backend & Data',
    items: [
      { 
        name: 'Nest.js', 
        level: 85, 
        icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#E0234E" d="M64 4.6L12.4 31.7v64.6L64 123.4l51.6-27.1V31.7L64 4.6z M107 90L64 112 21 90V38l43-22 43 22v52z"/></svg>' 
      },
      { 
        name: 'Python', 
        level: 75, 
        icon: '<svg viewBox="0 0 128 128" width="30"><defs><linearGradient id="py1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3776AB"/><stop offset="100%" style="stop-color:#306998"/></linearGradient><linearGradient id="py2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FFD43B"/><stop offset="100%" style="stop-color:#FFE873"/></linearGradient></defs><path fill="url(#py1)" d="M64 12c-18.4 0-24 9.6-24 9.6V35h24v3.6H28S12 37.6 12 64c0 19.6 12.8 20.8 12.8 20.8h6.8v-8.8s-.4-10.4 10.4-10.4h24.4c10.4 0 10.4-10.4 10.4-10.4V29.6s.4-17.6-12.8-17.6z"/><path fill="url(#py2)" d="M64 116c18.4 0 24-9.6 24-9.6V93H64v-3.6h36s16-2.6 16-29c0-19.6-12.8-20.8-12.8-20.8h-6.8v8.8s.4 10.4-10.4 10.4H61.6c-10.4 0-10.4 10.4-10.4 10.4v26s-.4 17.6 12.8 17.6z"/></svg>' 
      },
      { 
        name: 'MongoDB', 
        level: 80, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#47A248"><path d="M12.19 21.82c-.85-2.07-2.38-4.72-2.38-8.91 0-3.35 1.63-7.55 1.63-7.55s.98 3.52 1.63 6.94c.15.82 1 5.37-1 9.5zM12 0S6.16 6.13 6.16 12.44C6.16 22 12 24 12 24s5.84-2 5.84-11.56C17.84 6.13 12 0 12 0z"/></svg>' 
      },
      { 
        name: 'Firebase', 
        level: 80, 
        icon: '<svg viewBox="0 0 24 24" width="30"><path fill="#FFCA28" d="M4.6 16.5l2.8-8.8 1.4-1.3L3.3 2.6c-.3-.8-1.5-.6-1.5.3l2.8 13.6z"/><path fill="#FFA000" d="M15.4 5.9L12.6.4c-.3-.6-1.2-.6-1.5 0l-4 7.6 5.6 10.7 2.7-12.8z"/><path fill="#FFCA28" d="M15.4 5.9l-2.4 11.5 6.7 3.8c.8.5 1.8-.1 1.8-1L15.4 5.9z"/></svg>' 
      },
      { 
        name: 'MySQL', 
        level: 80, 
        icon: '<svg viewBox="0 0 24 24" width="30"><path fill="#00758F" d="M12.1 12.3c-.4.5-.4.8-.4 1.1 0 1.5 1.6 2.3 2.7 2.3 2.3 0 2.2-2.3 2.1-3.6-.1-1.3-1-3.3-2-4.1-.7-.6-1.7-1.1-2.9-1.1-3.6 0-5.7 3-5.7 7 0 2.7 1.3 5.4 4.5 5.4 1.8 0 3.2-.8 3.8-1.4l.7 1.5c-.8.8-2.6 1.8-5 1.8-4.8 0-7-3.9-7-8.1 0-5.4 3.3-8.8 8.1-8.8 3.8 0 5.4 2.5 5.4 4.8 0 1.9-.9 4.8-4.3 4.8-.9.1-1.5-.3-1.6-.7h1.6z"/></svg>' 
      }
    ]
  },
  {
    title: 'Despliegue',
    items: [
      { 
        name: 'Github', 
        level: 65, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#ffffff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>' 
      },
      { 
        name: 'Vercel', 
        level: 70, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#ffffff"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>' 
      },
      { 
        name: 'Render', 
        level: 50, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#ffffff"><path d="M18.8 21.2H5.2C3.4 21.2 2 19.8 2 18V6c0-1.8 1.4-3.2 3.2-3.2h13.6c1.8 0 3.2 1.4 3.2 3.2v12c0 1.8-1.4 3.2-3.2 3.2zM7.5 16l4.5-6.5-4.5-6.5M16.5 16l-4.5-6.5 4.5-6.5"/></svg>' 
      },
      { 
        name: 'CleverCloud', 
        level: 20, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#ffffff"><path d="M7 19h11a5 5 0 0 0 .6-9.9 7 7 0 0 0-13.2-2.1A5 5 0 0 0 7 19z"/></svg>' 
      },
      { 
        name: 'Optimización y SEO', 
        level: 52, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#ffffff"><path d="M7 19h11a5 5 0 0 0 .6-9.9 7 7 0 0 0-13.2-2.1A5 5 0 0 0 7 19z"/></svg>' 
      }
    ]
  },
  {
    title: 'Redes & Servidores',
    items: [
      { 
        name: 'Sockets', 
        level: 15, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="none" stroke="#ffffff" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>' 
      },
      { 
        name: 'Balanceador de Carga', 
        level: 15, 
        icon: '<svg viewBox="0 0 128 128" width="30"><path d="M40 64h20m0 0l25-25m-25 25h30m-30 0l25 25" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/><circle cx="25" cy="64" r="15" fill="#5cdb95"/><rect x="85" y="24" width="20" height="20" rx="4" fill="#ffffff"/><rect x="85" y="54" width="20" height="20" rx="4" fill="#ffffff"/><rect x="85" y="84" width="20" height="20" rx="4" fill="#ffffff"/></svg>' 
      },
      { 
        name: 'Nginx', 
        level: 15, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#009639"><path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 2.5l8.1 4.7v9.6L12 21.5 3.9 16.8V7.2L12 2.5zm1.1 6.3l-3.2 5.6h2.2l3.2-5.6h-2.2z"/></svg>' 
      },
      { 
        name: 'Apache2', 
        level: 15, 
        icon: '<svg viewBox="0 0 24 24" width="30" fill="#D22128"><path d="M22.2 6.5c-.2-.7-.5-1.3-.9-1.9-2.3-3.6-6.6-4.5-6.6-4.5s-2.1 2.3-2.8 4.6c-.7-2.3-2.8-4.6-2.8-4.6s-4.3.9-6.6 4.5c-.4.6-.7 1.2-.9 1.9-.8 2.5-.1 5.3 1.8 7.3l.3.3c.3.3.6.5 1 .8 3 1.9 6.8 2.2 7.2 2.2.4 0 4.2-.3 7.2-2.2.3-.2.7-.5 1-.8l.3-.3c1.9-2 2.6-4.8 1.8-7.3z"/></svg>' 
      }
    ]
  }
])
</script>

<style lang="sass" scoped>
$bg-dark: #151517
$bg-card: #1e1e24
$primary-green: #5cdb95
$text-white: #ffffff
$text-gray: #a0a0a0
$border-color: #333

.portfolio-container
  background-color: $bg-dark
  min-height: 100vh
  color: $text-white
  font-family: 'Inter', sans-serif

.navbar
  display: flex
  justify-content: space-between
  align-items: center
  padding: 20px 40px
  background: rgba($bg-dark, 0.95)
  backdrop-filter: blur(10px)
  position: sticky
  top: 0
  z-index: 100
  border-bottom: 1px solid rgba($text-white, 0.05)

  .logo
    font-size: 1.5rem
    font-weight: 700
    color: $primary-green
    letter-spacing: -0.5px

  nav
    display: flex
    gap: 30px
    
    a
      color: $text-gray
      text-decoration: none
      font-weight: 500
      transition: color 0.3s ease
      font-size: 0.95rem
      
      &:hover, &.active
        color: $primary-green

  .search-icon
    color: $text-white
    cursor: pointer
    opacity: 0.7
    transition: opacity 0.3s
    
    &:hover
      opacity: 1

.skills-header
  padding: 80px 0 60px
  text-align: center
  background-image: linear-gradient(rgba($text-white, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba($text-white, 0.03) 1px, transparent 1px)
  background-size: 50px 50px
  background-position: center top

  h1
    font-size: 3.5rem
    margin-bottom: 15px
    font-weight: 800
    letter-spacing: -1px

  .subtitle
    color: $text-gray
    font-size: 1.1rem
    max-width: 500px
    margin: 0 auto
    line-height: 1.6

  .highlight
    background: linear-gradient(90deg, $primary-green, #42b883)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

.skills-sections
  padding: 40px 20px
  max-width: 1200px
  margin: 0 auto
  display: flex
  flex-direction: column
  gap: 80px
  padding-bottom: 100px

  .skill-category
    h2
      font-size: 1.5rem
      margin-bottom: 30px
      border-left: 4px solid $primary-green
      padding-left: 20px
      color: $text-white
      font-weight: 600

  .skills-grid
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
    gap: 25px

  .skill-item
    background: $bg-card
    border: 1px solid $border-color
    padding: 25px
    border-radius: 16px
    display: flex
    align-items: center
    gap: 20px
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)
    position: relative
    overflow: hidden

    &:hover
      transform: translateY(-5px)
      border-color: rgba($primary-green, 0.5)
      box-shadow: 0 10px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba($primary-green, 0.1)

      .progress-fill
        box-shadow: 0 0 15px rgba($primary-green, 0.5)

    .skill-icon-container
      width: 55px
      height: 55px
      display: flex
      align-items: center
      justify-content: center
      background: rgba(255, 255, 255, 0.03)
      border-radius: 12px
      flex-shrink: 0

    .skill-info
      flex: 1

      .skill-name
        display: block
        margin-bottom: 12px
        font-weight: 600
        font-size: 1.05rem
        color: $text-white

      .progress-bar
        height: 6px
        background: rgba(255,255,255,0.08)
        border-radius: 10px
        overflow: hidden

        .progress-fill
          height: 100%
          background: linear-gradient(90deg, $primary-green, darken($primary-green, 10%))
          border-radius: 10px
          transition: width 1s ease-out
</style>