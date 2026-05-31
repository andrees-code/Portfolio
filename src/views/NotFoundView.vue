<template>
  <main class="not-found-page">
    <header class="navbar" :class="{ scrolled: isScrolled }">
      <router-link to="/" class="logo" aria-label="Inicio">AB</router-link>
      <nav aria-label="Navegacion principal">
        <router-link to="/" exact-active-class="active" active-class="active">Inicio</router-link>
        <router-link to="/projects" active-class="active">Proyectos</router-link>
        <router-link to="/skills" active-class="active">Skills</router-link>
        <router-link to="/contacto" active-class="active">Contacto</router-link>
      </nav>
      <router-link to="/contacto" class="nav-cta" aria-label="Contactar a Andres">Hablemos</router-link>
    </header>

    <section class="error-shell" aria-labelledby="error-title">
      <div class="error-panel">
        <p class="eyebrow">Error 404</p>
        <h1 id="error-title">Esta ruta no existe</h1>
        <p class="description">
          No encontramos <code>{{ currentPath }}</code>. Puede que el enlace este roto o que la pagina se haya movido.
        </p>

        <div class="actions">
          <router-link to="/" class="btn-primary">Ir al inicio</router-link>
          <button type="button" class="btn-ghost" @click="goBack">Volver atras</button>
          <router-link to="/projects" class="btn-link">Ver proyectos</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isScrolled = ref(false)
const route = useRoute()
const router = useRouter()
const defaultTitle = 'Portfolio | Andres Blasco'

const currentPath = computed(() => route.fullPath || '/')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
    return
  }

  router.push('/')
}

onMounted(() => {
  document.title = '404 | Andres Blasco'
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.title = defaultTitle
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 20%, rgba(212, 96, 58, 0.18) 0%, transparent 36%),
    radial-gradient(circle at 88% 70%, rgba(242, 237, 230, 0.08) 0%, transparent 44%),
    #0e0e0e;
  color: #f2ede6;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 56px;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 16px 56px;
  background: rgba(14, 14, 14, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(242, 237, 230, 0.12);
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 900;
  color: #d4603a;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 34px;
}

nav a {
  color: rgba(242, 237, 230, 0.6);
  text-decoration: none;
  font-size: 0.86rem;
  letter-spacing: 0.04em;
}

nav a.active,
nav a:hover {
  color: #f2ede6;
}

.nav-cta {
  color: #0e0e0e;
  background: #d4603a;
  text-decoration: none;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 3px;
}

.error-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 120px 24px 40px;
}

.error-panel {
  width: min(780px, 100%);
  border: 1px solid rgba(242, 237, 230, 0.12);
  background: linear-gradient(145deg, rgba(23, 21, 18, 0.9), rgba(14, 14, 14, 0.92));
  backdrop-filter: blur(6px);
  padding: clamp(28px, 4vw, 52px);
  border-radius: 10px;
}

.eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
  color: #d4603a;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 14px;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.05;
  margin-bottom: 18px;
}

.description {
  color: rgba(242, 237, 230, 0.72);
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 30px;
}

code {
  background: rgba(242, 237, 230, 0.08);
  color: #f2ede6;
  border: 1px solid rgba(242, 237, 230, 0.18);
  padding: 2px 7px;
  border-radius: 4px;
  font-family: 'DM Mono', monospace;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-ghost,
.btn-link {
  font-size: 0.84rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 11px 22px;
  border-radius: 4px;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.btn-primary {
  color: #0e0e0e;
  background: #d4603a;
}

.btn-ghost {
  color: #f2ede6;
  background: transparent;
  border: 1px solid rgba(242, 237, 230, 0.24);
  cursor: pointer;
}

.btn-link {
  color: #f2ede6;
  border: 1px dashed rgba(242, 237, 230, 0.18);
}

.btn-primary:hover,
.btn-ghost:hover,
.btn-link:hover {
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .navbar {
    padding: 20px 22px;
  }

  .navbar.scrolled {
    padding: 14px 22px;
  }

  nav,
  .nav-cta {
    display: none;
  }
}
</style>
