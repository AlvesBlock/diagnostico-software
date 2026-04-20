import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import DiagnosisPage from '@/pages/DiagnosisPage.vue';
import ResultPage from '@/pages/ResultPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
    },
    {
      path: '/diagnostico',
      name: 'diagnosis',
      component: DiagnosisPage,
    },
    {
      path: '/resultado',
      name: 'result',
      component: ResultPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
});

export default router;
