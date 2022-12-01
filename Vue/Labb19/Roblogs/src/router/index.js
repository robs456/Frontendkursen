// import { createRouter, createWebHistory } from 'vue-router'
// import Overview from '../views/Overview.vue'

// import Editing from '../views/Editing.vue'
// import NotFound from '../views/NotFound.vue'


// const routes = [
//     {
//       path: '/',
//       name: 'overview',
//       component: Overview
//     },
//     {
//       path: '/details',
//       name: 'details',
//       component: Deetview
//     },
//     {
//       path: '/new',
//       name: 'new',
//       component: Editing
//     },
//     {
     
//     }
//   ]
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'
import Editing from '../views/Editing.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/newPost',
      name: 'editing',
      component: Editing
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
