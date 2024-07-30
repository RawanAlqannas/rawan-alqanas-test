// router/index.js or router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import SecondPage from './components/SecondPage.vue';
import PopPage from './components/PopPage.vue';
import ReportsPage from './components/ReportsPage.vue';

const routes = [
    { name: 'LoginPage', component: LoginPage, path: '/' },
    { name: 'SecondPage', component: SecondPage, path: '/second-page' },
    { name: 'ReportsPage', component: ReportsPage, path: '/reports' },
    { name: 'PopPage', component: PopPage, path: '/pop-page' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

