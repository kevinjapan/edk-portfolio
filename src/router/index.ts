import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
         path: '/',
         name: 'home',
         component: () => import('../views/HomeView.vue')
      },
      {
         path: '/projects',
         name: 'projects_list',
         component: () => import('../views/ProjectsListView.vue') 
      },
      {
         path: '/projects/:project_slug',
         name: 'project',
         component: () => import('../views/ProjectView.vue') 
      },
      {
         path: '/about',
         name: 'about',
         // route level code-splitting - lazy-loaded when the route is visited
         // generates a separate chunk (About.[hash].js) for this route
         component: () => import('../views/AboutView.vue')
      },
      {
         path: '/notfound',
         name: 'notfound',
         component: () => import('../components/NotFound/NotFound.vue')
      }
   ]
})


export default router