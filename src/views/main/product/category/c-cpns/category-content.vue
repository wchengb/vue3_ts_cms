<template>
  <div class="category-content">
    <div class="header">
      <h3 class="title">类别列表</h3>
      <el-button type="primary" @click="handleNewClick">新建类别</el-button>
    </div>
    <div class="table">
      <el-table :data="categoryList" border>
        <el-table-column align="center" type="selection" width="80px" />
        <el-table-column align="center" label="序号" type="index" width="80px" />
        <el-table-column align="center" label="类别名称" prop="name" width="160px" />
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
            <el-button icon="Edit" type="primary" text @click="handleEditClick(scope.row)"
              >编辑</el-button
            >
            <el-button icon="Delete" type="danger" text @click="handleDeleteClick(scope.row.id)"
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
        :total="categoryTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useProduct from '@/store/main/product/product'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format'
import { reactive, ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)
const productStore = useProduct()

const { categoryTotalCount, categoryList } = storeToRefs(productStore)

function fetchCategoryListData(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }

  // 发送请求
  const queryInfo = { ...pageInfo, ...formData }
  productStore.getProductListAction(queryInfo)
}
fetchCategoryListData()
defineExpose({ fetchCategoryListData })

const emit = defineEmits(['newClick', 'editClick'])
function handleNewClick() {
  emit('newClick')
}

function handleEditClick(itemdata: any) {
  emit('editClick', itemdata)
}
function handleDeleteClick(id: number) {
  productStore.deleteProductAction(id)
}

function handleSizeChange() {
  fetchCategoryListData()
}
function handleCurrentChange() {
  fetchCategoryListData()
}
</script>

<style lang="less" scoped>
.category-content {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: flex-end;
    .title {
      color: #000;
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
