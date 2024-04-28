<template>
  <div class="goods-search">
    <el-form :model="formData" ref="formRef" label-width="80px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="formData.name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="商品地址" prop="address">
            <el-input v-model="formData.address" placeholder="请输入商品地址"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="status">
            <el-select v-model="formData.status" placeholder="请选择查询状态">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="formData.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btn">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleQueryClick">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  address: '',
  status: '',
  createAt: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  formRef.value?.resetFields()
}
const emit = defineEmits(['queryClick'])
function handleQueryClick() {
  emit('queryClick',formData)
}
</script>

<style lang="less" scoped>
.goods-search {
  background-color: #fff;
  padding: 20px;
  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }
  .btn {
    text-align: right;
    margin: 0 50px 10px 0;
    .el-button {
      height: 36px;
    }
  }
}
</style>
