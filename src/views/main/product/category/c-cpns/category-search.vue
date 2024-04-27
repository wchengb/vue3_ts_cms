<template>
  <div class="category-search">
    <el-form label-width="80px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="类别名称" prop="name">
            <el-input placeholder="请输入类别名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="选择时间" prop="createAt">
            <el-date-picker
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
      <el-button icon="Refresh" @click="handleRefreshClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleSearchClick">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
function handleRefreshClick() {}
function handleSearchClick() {}
</script>

<style lang="less" scoped>
.category-search {
  padding: 20px;
  background-color: #fff;
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
