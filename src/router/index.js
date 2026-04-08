import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: { name: 'home' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactView,
      alias: '/contact',
    }
  ],
})

export default router
