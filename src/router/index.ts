import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
         name: 'home',
         path: '/',
         component: () => import('../views/HomeView.vue')
      },
      {
         name: 'projects_list',
         path: '/projects',
         component: () => import('../views/ProjectsListView.vue') 
      },
      {
         name: 'project',
         path: '/projects/:project_slug',
         component: () => import('../views/ProjectView.vue') 
      },
      {
         name: 'about',
         path: '/about',
         // route level code-splitting - lazy-loaded when the route is visited
         // generates a separate chunk (About.[hash].js) for this route
         component: () => import('../views/AboutView.vue')
      },
      { 
         name: 'notfound',
         path: '/:pathMatch(.*)*',
         component: () => import('../components/NotFound/NotFound.vue') 
      }
   ]
})


export default router