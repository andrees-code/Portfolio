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

    <!-- 404 CONTENT -->
    <section class="error-404" aria-labelledby="error-title">
      <div class="error-container">
        <div class="error-code" aria-hidden="true">404</div>
        <h1 id="error-title" class="error-title">
          <span class="line-small">Página no encontrada</span>
          <span class="line-big">Oops!</span>
        </h1>
        <p class="error-desc">
          Parece que esta página se ha perdido en el código. No te preocupes, sucede hasta a los mejores desarrolladores.
        </p>
        <div class="error-actions">
          <router-link to="/" class="btn-primary">Volver al inicio</router-link>
          <router-link to="/contacto" class="btn-ghost">Contactar</router-link>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'NotFoundView',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.error-404 {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-container {
  text-align: center;
  max-width: 600px;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  color: #f2ede6;
  opacity: 0.1;
  margin-bottom: 2rem;
  font-family: 'DM Sans', monospace;
}

.error-title {
  margin-bottom: 2rem;
}

.error-title .line-small {
  display: block;
  font-size: 1.125rem;
  font-weight: 400;
  color: #a8a29e;
  margin-bottom: 0.5rem;
}

.error-title .line-big {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  color: #f2ede6;
  margin-bottom: 0.5rem;
}

.error-desc {
  font-size: 1.125rem;
  color: #a8a29e;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-ghost {
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #f2ede6;
  color: #0e0e0e;
}

.btn-primary:hover {
  background: #e5e0d5;
  transform: translateY(-2px);
}

.btn-ghost {
  border: 2px solid #f2ede6;
  color: #f2ede6;
  background: transparent;
}

.btn-ghost:hover {
  background: #f2ede6;
  color: #0e0e0e;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .error-code {
    font-size: 6rem;
  }

  .error-title .line-big {
    font-size: 2.5rem;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-ghost {
    width: 100%;
    max-width: 200px;
  }
}
</style>
