<template>
  <div class="user-content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" @click="handleNewUserClick">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" label="用户名" prop="name" width="150px" />
        <el-table-column align="center" label="真实姓名" prop="realname" width="150px" />
        <el-table-column align="center" label="手机号" prop="cellphone" width="180px" />
        <el-table-column align="center" label="状态" prop="enable" width="100px">
          <!-- 作用域插槽 -->
          <template #default="scope">
            <el-button size="small" :type="scope.row.enable ? 'primary' : 'danger'" plain>
              {{ scope.row.enable ? '启用' : '禁用' }}</el-button
            >
          </template>
        </el-table-column>
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
        <el-table-column align="center" label="操作" width="150px">
          <template #default="scope">
            <el-button
              size="small"
              icon="Edit"
              type="primary"
              text
              @click="handleEditBtnClick(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              icon="Delete"
              type="danger"
              text
              @click="handleDeleteBtnClick(scope.row.id)"
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
        layout="sizes, prev, pager, next, jumper, total"
        :total="usersTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format'

// 定义事件
const emit = defineEmits(['newClick', 'editClick'])

// 1. 发起action,请求usersList的数据
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchUserListData()

// 2. 获取userdList数据，进行展示
const { usersList, usersTotalCount } = storeToRefs(systemStore)

// 3.点击事件
function handleSizeChange() {
  fetchUserListData()
}
function handleCurrentChange() {
  fetchUserListData()
}
// 4.定义函数,发送网络请求
function fetchUserListData(formData: any = {}) {
  // 获取offset和size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }

  // 发生网络请求
  const queryInfo = { ...pageInfo, ...formData }
  systemStore.postUserListAction(queryInfo)
}
defineExpose({ fetchUserListData })

// 删除按钮
function handleDeleteBtnClick(id: number) {
  systemStore.deleteUserByIdAction(id)
}
// 编辑按钮
function handleEditBtnClick(itemData: any) {
  emit('editClick', itemData)
}

// 新建按钮
function handleNewUserClick() {
  emit('newClick')
}
</script>

<style lang="less" scoped>
.user-content {
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
