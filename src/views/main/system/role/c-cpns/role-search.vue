<template>
  <div class="role-search">
    <el-form :model="searchForm" ref="formRef" label-width="80px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="角色名称" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入查询的角色名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="权限介绍" prop="intro">
            <el-input v-model="searchForm.intro" placeholder="请输入查询的权限介绍"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.intro"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button type="primary" @click="handleQueryClick" icon="Search">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

// 定义数据
const emit = defineEmits(['queryClick', 'resetClick'])
const searchForm = reactive({
  name: '',
  intro: '',
  createAt: ''
})

// 点击事件
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
.role-search {
  background-color: #fff;
  padding: 20px;
  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }
  .btns {
    text-align: right;
    padding: 0 50px 10px 0;
  }
  .el-button {
    height: 36px;
  }
}
</style>
