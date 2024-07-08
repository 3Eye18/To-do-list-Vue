import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Table',
    component: () => import(/* webpackChunkName: "about" */ '../views/tableView.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "about" */ '../views/addView.vue')
  },
  {
    path: '/edit/:docId',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/editView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
