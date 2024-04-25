<template>
  <div class="menu-content">
    <div class="header">
      <h3 class="title">菜单管理</h3>
      <el-button type="primary">新建菜单</el-button>
    </div>
    <div class="table">
      <el-table :data="menuList" style="width: 100%; margin-bottom: 20px" row-key="id" border>
        <el-table-column align="center" prop="name" label="菜单名称" />
        <el-table-column align="center" prop="type" label="级别" width="80px" />
        <el-table-column align="center" prop="url" label="菜单url" />
        <el-table-column align="center" prop="icon" label="菜单icon" />
        <el-table-column align="center" type="index" label="排序" width="80px" />
        <el-table-column align="center" prop="sort" label="权限" width="80px" />
        <el-table-column align="center" prop="createAt" label="创建时间">
          <template #default="scoped">
            {{ formatUTC(scoped.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="updateAt" label="更新时间">
          <template #default="scoped">
            {{ formatUTC(scoped.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="" label="操作">
          <template #default="scope">
            <el-button size="small" icon="Delete" type="danger" text @click="">删除</el-button>
            <el-button size="small" icon="Edit" type="primary" text @click="">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'

const systemStore = useSystemStore()
const tableData = {}

systemStore.getMenuListData(tableData)

const { menuList } = storeToRefs(systemStore)
</script>

<style lang="less" scoped>
.menu-content {
  background-color: #fff;
  padding: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
    .title {
      font-size: 20px;
    }
  }
  .table {
    :deep(.el-table__cell) {
      padding: 12px 0;
    }
  }
}
</style>
