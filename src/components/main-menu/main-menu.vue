<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <div v-show="!isFold" class="title">xx管理系统</div>
    </div>
    <div class="menu">
      <el-menu
        :default-active="defaultActive"
        active-text-color="#fff"
        background-color="#001529"
        text-color="#b7bdc3"
        :collapse="isFold"
      >
        <!-- 遍历菜单 -->
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleItemClick(subitem)">{{
                subitem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>商品统计</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item>用户管理</el-menu-item>
          <el-menu-item>部门管理</el-menu-item>
          <el-menu-item>菜单管理</el-menu-item>
          <el-menu-item>角色管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><ShoppingBag /></el-icon>
            <span>商品中心</span>
          </template>
          <el-menu-item>商品类别</el-menu-item>
          <el-menu-item>商品信息</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>随便聊聊</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>商品统计</el-menu-item>

          <el-sub-menu index="">
            <template #title>音乐资源</template>
            <el-menu-item>民风音乐</el-menu-item>
            <el-menu-item>摇滚音乐</el-menu-item>
          </el-sub-menu>
        </el-sub-menu> -->
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import userLoginStore from '@/store/login/login'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mapPathToMenu } from '@/utils/map-menus'

// 定义props
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

// 1. 获取动态菜单
const loginStore = userLoginStore()
const userMenus = loginStore.userMenus

// 2. 监听item点击
const router = useRouter()
function handleItemClick(item: any) {
  const url = item.url
  router.push(url)
}

// 3.ElMenu的默认菜单
const route = useRoute()
const pathMenu = mapPathToMenu(route.path, userMenus)
const defaultActive = ref<string>(pathMenu.id + '')
</script>

<style lang="less" scoped>
.main-menu {
  color: red;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }
  .img {
    height: 100%;
    margin: 0 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
  .menu {
    .el-menu {
      border-right: none;
      user-select: none;
    }
    .el-sub-menu {
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135;
      }
      .el-menu-item:hover {
        color: #fff;
      }
      .el-menu-item.is-active {
        background-color: #0a60bd;
      }
    }
  }
}
</style>
