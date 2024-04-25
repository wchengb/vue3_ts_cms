<template>
  <div class="role-content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" @click="handleNewRoleClick">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="roleList" style="width: 100%">
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column align="center" label="序号" type="index" width="80px" />
        <el-table-column align="center" label="角色名称" prop="name"></el-table-column>
        <el-table-column align="center" label="权限介绍" prop="intro"></el-table-column>
        <el-table-column align="center" label="创建时间" prop="createAt">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间" prop="updateAt">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="180px">
          <template #default="scope">
            <el-button type="primary" icon="Edit" text @click="handleEditClick()">编辑</el-button>
            <el-button type="danger" icon="Delete" text @click="handleDeleteClick()"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        layout="sizes, prev, pager, next, jumper,total"
        :total="roleTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { formatUTC } from '@/utils/format'

const pageSize = ref(10)
const currentPage = ref(1)
const systemStore = useSystemStore()

fetchRoleListData()
function fetchRoleListData(formData: any = {}) {
  // 获取offset和size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  // 发送网络请求
  const queryInfo = { ...pageInfo, ...formData }
  systemStore.getRoleListAction(queryInfo)
}
defineExpose({ fetchRoleListData })
const { roleTotalCount, roleList } = storeToRefs(systemStore)

// 点击事件
const emit = defineEmits(['newRoleClick'])
function handleNewRoleClick() {
  emit('newRoleClick')
}

function handleEditClick() {}
function handleDeleteClick() {}

function handleSizeChange() {
  fetchRoleListData()
}
function handleCurrentChange() {
  fetchRoleListData()
}
</script>

<style lang="less" scoped>
.role-content {
  background-color: #fff;
  margin-top: 20px;
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
    .el-button {
      padding: 0 6px;
    }
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}
</style>
