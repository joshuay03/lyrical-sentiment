import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lyrics',
    name: 'Lyrics',
    component: () => import('../components/Lyrics.vue'),
  },
  {
    path: '/sentiment',
    name: 'Sentiment',
    component: () => import('../components/Sentiment.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
