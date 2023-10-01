import { createRouter, createWebHistory } from 'vue-router';
import Point from './point.vue';
import Level from './level.vue';

const routes = [
	{ path: '/point', component: Point },
	{ path: '/level', component: Level }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})
export default router;