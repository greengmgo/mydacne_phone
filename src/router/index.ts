import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'DoCard',
     component: () => import(/* webpackChunkName: "DoCard" */ '../views/Add.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
