import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import { localCache } from '@/utils/cache';
import { defineStore } from 'pinia'
import router from '@/router';
import { LOGIN_TOKEN } from '@/global/constants';
import { mapMenusToRoute } from '@/utils/map-menus'
import mainHeaderVue from '@/components/main-header/main-header.vue';
import useMainStore from '../main/main';

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any[]
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async loginAccountAction(account: { name: string; password: string }) {
      // 1. 帐号登录，获取token等信息
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      // const name = loginResult.data.name
      this.token = loginResult.data.token
      // console.log(loginResult);

      // const { id, token } = loginResult.data
      // this.token = token

      // 保存在cache中
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 2. 获取登录用户的详细信息(role信息)
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      // 3. 根据角色请求用户的权限(menus菜单)
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data
      this.userMenus = userMenus

      // 重要： 动态的添加路由
      const routes = mapMenusToRoute(userMenus)
      routes.forEach((route) => router.addRoute('main', route))

      // 4. 进行本地缓存
      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)

      // 5. 请求所有roles/departments数据
      const MainStore = useMainStore()
      MainStore.fetchEntireDataAction()

      // 6. 页面跳转(main页面)
      router.push('/main')
    },
    loadLocalCacheAction() { // 刷新
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 请求所有roles / departments数据
        const MainStore = useMainStore()
        MainStore.fetchEntireDataAction()

        // 动态的添加路由
        const routes = mapMenusToRoute(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
