<template>
  <div class="category-content">
    <div class="header">
      <h3 class="title">类别列表</h3>
      <el-button type="primary">新建类别</el-button>
    </div>
    <div class="table">
      <el-table border>
        <el-table-column align="center" type="selection" width="80px" />
        <el-table-column align="center" label="序号" type="index" width="80px" />
        <el-table-column align="center" label="类别名称" prop="name" width="160px" />
        <el-table-column align="center" label="创建时间" prop="createAt">
          <!-- <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template> -->
        </el-table-column>
        <el-table-column align="center" label="更新时间" prop="updateAt">
          <!-- <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template> -->
        </el-table-column>
        <el-table-column align="center" label="操作" width="180px">
          <template #default="scope">
            <el-button icon="Edit" type="primary" text @click="handleEditClick()">编辑</el-button>
            <el-button icon="Delete" type="danger" text @click="handleDeleteClick()"
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
import { ref } from 'vue'

const currentPage = ref()
const pageSize = ref()
const categoryTotalCount = ref()

function handleEditClick() {}
function handleDeleteClick() {}

function handleSizeChange() {}
function handleCurrentChange() {}
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
