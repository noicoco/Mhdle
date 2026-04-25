import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonsterView from '../views/MonsterView.vue'
import RoarView from '../views/RoarView.vue'
import SkillView from '../views/SkillView.vue'
import CompendiumView from '../views/CompendiumView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/monster',
      name: 'monster',
      component: MonsterView,
    },
    {
      path: '/roar',
      name: 'roar',
      component: RoarView,
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillView,
    },
    {
      path: '/compendium',
      name: 'compendium',
      component: CompendiumView,
    }
  ]
})

export default router
