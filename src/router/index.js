import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from "@/configs/firebase";

// Auth Guard
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser

  // console.log("Before enter: ", user)

  if (!user) next({ name: "LogIn", params: {} })
  else next()
}

const routes = [
  {
    path: '/',
    name: 'Table',
    meta: {
      layout: "form",
    },
    component: () => 
      import('../views/tableView.vue'), 
      beforeEnter: requireAuth,
  },
  {
    path: '/add',
    name: 'Add',
    meta: {
      layout: "form",
    },
    component: () => import('../views/addView.vue')
  },
  {
    path: '/edit/:docId',
    name: 'Edit',
    meta: {
      layout: "form",
    },
    component: () => import('../views/editView.vue')
  },
  {
    path: '/login',
    name: 'LogIn',
    meta: {
      layout: "auth",
    },
    component: () => import('../views/loginView.vue')
  },{
    path: '/signup',
    name: 'SignUp',
    meta: {
      layout: "auth",
    },
    component: () => import('../views/signupView.vue')
  },
  {
    path: '/logout',
    name: 'LogOut',
    component: () => import('../views/logoutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
