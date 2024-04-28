<template>
  <div class="goods-content">
    <div class="header">
      <h3 class="title">商品列表</h3>
      <el-button type="primary" @click="handleNewClick">新建商品</el-button>
    </div>
    <div class="table">
      <el-table :data="goodsList" border>
        <el-table-column align="center" type="selection" width="80px" />
        <el-table-column align="center" label="序号" type="index" width="80px" />
        <el-table-column align="center" label="商品名称" width="240px" prop="name" />
        <el-table-column align="center" label="原价格" width="100px" prop="oldPrice" />
        <el-table-column align="center" label="新价格" width="100px" prop="newPrice" />
        <el-table-column align="center" label="商品描述" width="240px" prop="desc" />
        <el-table-column align="center" label="状态" width="60px" prop="status" />
        <el-table-column align="center" label="图片" prop="imgUrl">
          <template #default="scope">
            <el-image :src="scope.row.imgUrl"></el-image>
          </template>
        </el-table-column>
        <el-table-column align="center" label="库存" width="60px" prop="inventoryCount" />
        <el-table-column align="center" label="销量" width="60px" prop="saleCount" />
        <el-table-column align="center" label="收藏" width="60px" prop="favorCount" />
        <el-table-column align="center" label="地址" width="60px" prop="address" />
        <el-table-column align="center" label="创建时间" prop="createAt">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        layout="sizes, prev, pager, next, jumper, total"
        :total="goodsTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useProduct from '@/store/main/product/product'
import { formatUTC } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)
const goodstotalCount = ref()
const productStore = useProduct()

const { goodsTotalCount, goodsList } = storeToRefs(productStore)

function fetGoodsListData(formdata: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const PageInfo = { size, offset }

  const queryInfo = { ...PageInfo, ...formdata }

  productStore.getGoodsListAction(queryInfo)
}
fetGoodsListData()
defineExpose({ fetGoodsListData })

const emit = defineEmits(['newClick'])
function handleNewClick() {
  emit('newClick')
}

function handleSizeChange() {
  fetGoodsListData()
}
function handleCurrentChange() {
  fetGoodsListData()
}
</script>

<style lang="less" scoped>
.goods-content {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 10px;
    .title {
      font-size: 20px;
      color: #000;
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
