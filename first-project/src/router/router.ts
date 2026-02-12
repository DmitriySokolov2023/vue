// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../components/todo/TodoPage.vue'),
	},
	{
		path: '/test',
		name: 'Test',
		component: () => import('../components/test/Test.vue'),
	},
	{
		path: '/notes',
		name: 'Notes',
		component: () => import('../components/notes/NotesPage.vue'),
	},
	{
		path: '/not-found',
		name: 'NotFound',
		component: () => import('../components/not-found/NotFound.vue'),
	},
	{
		path: '/form',
		name: 'Form',
		component: () => import('../components/form/Form.vue'),
	},
	{
		path: '/tailwind',
		name: 'Tailwind',
		component: () => import('../components/tailwind/Tailwind.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/not-found',
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
