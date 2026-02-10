<template>
  <main class="portfolio-container">
    <header class="navbar">
      <div class="logo">Portfolio</div>
      <nav>
        <a href="/home" >Home</a>
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

const techStack = ref([
  {
    title: 'Frontend Development',
    items: [
      { name: 'Vue.js', level: 90, icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"/><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H22l42,72l42-72H78.8z"/></svg>' },
      { name: 'JavaScript (ES6+)', level: 85, icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#f7df1e" d="M1.4 1.4h125.2v125.2h-125.2z"/><path d="M67.8 108.2c2.1 3.8 6.6 6.5 11.5 6.5 7.1 0 11.5-3.5 11.5-16.1v-44.5h14.1v44.8c0 20.3-11.8 28.1-25.2 28.1-11.4 0-19-5.4-23.3-13.8l11.4-5z"/></svg>' },
      { name: 'CSS / SASS', level: 80, icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#cf649a" d="M64 107.5c-43.2-1.7-56-18.6-56-31.1 0-16.9 14.1-24.3 22.1-23.7 9.8.7 13.9 8.2 13.9 8.2l.2.1s3.7-18.3 23.3-18.3c15 0 23.5 10.3 23.5 21 0 16.4-14.8 21.6-27 23.8z"/></svg>' }
    ]
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Nest.js', level: 85, icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#E0234E" d="M64 4.6L12.4 31.7v64.6L64 123.4l51.6-27.1V31.7L64 4.6z"/></svg>' },
      { name: 'Python', level: 75, icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#3776AB" d="M64 12c-18.4 0-24 9.6-24 9.6V35h24v3.6H28S12 37.6 12 64c0 19.6 12.8 20.8 12.8 20.8h6.8v-8.8s-.4-10.4 10.4-10.4h24.4c10.4 0 10.4-10.4 10.4-10.4V29.6s.4-17.6-12.8-17.6z"/></svg>' },
      { name: 'MongoDB', level: 80, icon: '<svg viewBox="0 0 128 128" width="30"><path fill="#4DB33D" d="M64 4C64 4 32 50 32 78c0 20 12 38 32 46 20-8 32-26 32-46C96 50 64 4 64 4z"/></svg>' }
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

.skills-header
  padding: 60px 0 40px
  text-align: center
  background-image: linear-gradient(rgba($text-white, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba($text-white, 0.03) 1px, transparent 1px)
  background-size: 50px 50px

  h1
    font-size: 3rem
    margin-bottom: 10px

  .highlight
    background: linear-gradient(90deg, $primary-green, #42b883)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

.skills-sections
  padding: 40px 20px
  display: flex
  flex-direction: column
  gap: 60px

  .skill-category
    h2
      font-size: 1.5rem
      margin-bottom: 30px
      border-left: 4px solid $primary-green
      padding-left: 15px

  .skills-grid
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
    gap: 20px

  .skill-item
    background: $bg-card
    border: 1px solid $border-color
    padding: 20px
    border-radius: 12px
    display: flex
    align-items: center
    gap: 20px
    transition: all 0.3s ease

    &:hover
      transform: scale(1.02)
      border-color: rgba($primary-green, 0.5)
      box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 0 15px rgba($primary-green, 0.1)

      .progress-fill
        box-shadow: 0 0 10px $primary-green

    .skill-icon-container
      width: 50px
      height: 50px
      display: flex
      align-items: center
      justify-content: center
      background: rgba(255, 255, 255, 0.03)
      border-radius: 10px

    .skill-info
      flex: 1

      .skill-name
        display: block
        margin-bottom: 8px
        font-weight: 600
        color: $text-white

      .progress-bar
        height: 6px
        background: rgba(255,255,255,0.1)
        border-radius: 10px
        overflow: hidden

        .progress-fill
          height: 100%
          background: $primary-green
          border-radius: 10px
          transition: width 1s ease-out
</style>
