import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/comics',
      name: 'comics',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComicsView.vue'),
    },
    {
      path: '/comics/:id',
      name: 'comic',
      component: () => import('../views/comics/ComicDetailView.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  const fpath = from.path.slice(1)
  const tpath = to.path.slice(1)

  if (fpath.length > 0 && tpath.length > 0) {
    if (fpath.startsWith(tpath) || tpath.startsWith(fpath)) {
      from.meta.leaveToClass = 'fade-leave-to'
      from.meta.leaveActiveClass = 'fade-leave-active'
      to.meta.enterFromClass = 'fade-enter-from'
      to.meta.enterActiveClass = 'fade-enter-active'
    }
  }

  return true
})

export default router
