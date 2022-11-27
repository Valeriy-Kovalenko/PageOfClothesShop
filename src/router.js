import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage }  // change the way
    ]
});

export default router;