/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TheChile from "@/components/Paises/TheChile.vue";
import ThePeru from '@/components/Paises/ThePeru.vue';

const routes =[
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
},
{
  path: '/chile',
  name: 'CalendarioChile',
  component: TheChile,
},
{
  path: '/peru',
  name: 'CalendarioPeru',
  component: ThePeru,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
