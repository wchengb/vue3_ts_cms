<template>
  <div class="content">
    <div class="header">
      <h3 class="title">部门列表</h3>
      <el-button type="primary" @click="handleNewDepartmentClick">新建部门</el-button>
    </div>
    <div class="table">
      <el-table :data="departmentList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="60px"></el-table-column>
        <el-table-column align="center" type="index" label="序号" width="60px"></el-table-column>
        <el-table-column
          align="center"
          label="部门名称"
          prop="name"
          width="180px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="部门领导"
          prop="leader"
          width="180px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="上级名称"
          prop="parentId"
          width="180px"
        ></el-table-column>
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
        <el-table-column align="center" label="操作" prop="enable" width="160px">
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
        :total="departmentTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const pageSize = ref(10)
const currentPage = ref(1)
const systemStore = useSystemStore()

const { departmentList, departmentTotalCount } = storeToRefs(systemStore)

fetchDepartmentListData()
function fetchDepartmentListData(formData: any = {}) {
  // 获取offset和size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  // 发送网络请求
  const queryInfo = { ...pageInfo, ...formData }
  systemStore.getDepartmentListAction(queryInfo)
}
defineExpose({ fetchDepartmentListData })

// 定义事件
const emit = defineEmits(['newClick', 'editClick'])

// 新建按钮
function handleNewDepartmentClick() {
  emit('newClick')
}

// 删除按钮
function handleDeleteBtnClick(id: number) {}

//编辑按钮
function handleEditBtnClick(itemData: any) {
  emit('editClick', itemData)
}

function handleSizeChange() {
  fetchDepartmentListData()
}
function handleCurrentChange() {
  fetchDepartmentListData()
}
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
    .title {
      font-size: 20px;
    }
  }
  :deep(.el-table__cell) {
    padding: 12px 0;
  }
  .el-button {
    padding: 0 8px;
  }
}
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
