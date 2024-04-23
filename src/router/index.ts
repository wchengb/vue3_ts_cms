import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue'),
      // children: [
      //   {
      //     path: '/main/analysis/overview',
      //     component: () => import('@/views/main/analysis/overview/overview.vue')
      //   },
      //   {
      //     path: '/main/analysis/dashboard',
      //     component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
      //   },
      //   {
      //     path: '/main/system/user',
      //     component: () => import('@/views/main/system/user/user.vue')
      //   },
      //   {
      //     path: '/main/system/role',
      //     component: () => import('@/views/main/system/role/role.vue')
      //   }
      // ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/Not-found.vue')
    }
  ]
})

// 导航守卫
// 参数：to(跳转到的位置)/from(从哪里跳转过来)
// 返回值：返回值决定导航的路径
router.beforeEach((to) => {
  // 只有登录成功(拿到token),才能真正进入到main页面
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  // 如果进入main
  if (to.path === '/main') {
    return firstMenu?.url
  }
})

// 动态路由的添加
// router.addRoute('main',)

export default router
