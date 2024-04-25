<template>
  <div class="role-modal">
    <el-dialog
      v-model="DialogVisible"
      :title="isNewRef ? '新建用户' : '编辑用户'"
      width="500"
      center
    >
      <el-form class="form" size="large">
        <el-form-item label="角色名称" prop="name">
          <el-input placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item label="权限介绍" prop="leader">
          <el-input placeholder="请输入权限介绍"></el-input>
        </el-form-item>
      </el-form>
      <!-- <el-tree
        style="max-width: 600px"
        :data=""
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props=""
      /> -->
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const DialogVisible = ref(false)
const isNewRef = ref(true)

function setModalVisible() {
  DialogVisible.value = true
}
defineExpose({ setModalVisible })

function handleConfirmClick() {}
</script>

<style lang="less" scoped>
// .role-modal {
//   color: red;
// }
</style>
