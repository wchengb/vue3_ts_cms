<template>
  <div class="goods-modal">
    <el-dialog v-model="DialogVisible" title="新建商品" width="500" center>
      <el-form :model="formData" label-width="100px" size="large">
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品原价格" prop="oldPrice">
          <el-input v-model="formData.oldPrice" placeholder="请输入商品原价格"></el-input>
        </el-form-item>
        <el-form-item label="商品新价格" prop="newPrice">
          <el-input v-model="formData.newPrice" placeholder="请输入商品新价格"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="desc">
          <el-input v-model="formData.desc" placeholder="请输入商品描述"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-input v-model="formData.status" placeholder="确认商品状态"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="imgUrl">
          <el-input v-model="formData.imgUrl" placeholder="商品图片"></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="inventoryCount">
          <el-input v-model="formData.inventoryCount" placeholder="请输入商品库存"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="dddress">
          <el-input v-model="formData.address" placeholder="请输入商品地址"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="DialogVisible = false"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  oldPrice: '',
  newPrice: '',
  desc: '',
  status: '',
  imgUrl: '',
  inventoryCount: '',
  address: ''
})

const DialogVisible = ref(false)

function setDialogVisible() {
  DialogVisible.value = true
}
defineExpose({ setDialogVisible })
</script>

<style lang="less" scoped>
.goods-modal {
  color: red;
}
</style>
