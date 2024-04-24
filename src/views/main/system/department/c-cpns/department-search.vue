<template>
  <div class="search">
    <el-form :model="searchForm" ref="formRef" label-width="120px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入部门名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="searchForm.leader" placeholder="请输入部门领导"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-model="searchForm.createAt"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleQueryClick">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

// 定义自定义事件
const emit = defineEmits(['queryClick', 'resetClick'])

// 1.创建表单的数据
const searchForm = reactive({
  name: '',
  leader: '',
  createAt: ''
})

// 重置操作
const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  formRef.value?.resetFields()
  emit('resetClick')
}
function handleQueryClick() {
  emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;

  .el-form-item {
    padding: 20px 40px;
    margin-bottom: 0;
  }
}
.btns {
  text-align: right;
  padding: 0 50px 10px 0;
}
.el-button {
  height: 36px;
}
</style>
