<template>
  <div class="department-modal">
    <el-dialog
      :title="isNewRef ? '新建部门' : '编辑部门'"
      v-model="DialogVisible"
      width="500"
      center
    >
      <el-form class="form" v-model="formData" size="large">
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入部门名称"></el-input>
        </el-form-item>
        <el-form-item label="部门领导" prop="leader">
          <el-input v-model="formData.leader" placeholder="请输入部门领导"></el-input>
        </el-form-item>
        <el-form-item label="上级名称" prop="parentId">
          <el-input v-model="formData.parentId" placeholder="请输入上级名称"></el-input>
        </el-form-item>
      </el-form>
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
import useSystemStore from '@/store/main/system/system'
import { ref, reactive } from 'vue'

const DialogVisible = ref(false)
const isNewRef = ref(true)
const systemStore = useSystemStore()
const editData = ref()

const formData = reactive<any>({
  name: '',
  leader: '',
  parentId: ''
})

function setModalVisible(isNew: boolean = true, itemData?: any) {
  DialogVisible.value = true
  isNewRef.value = isNew
  if (!isNew && itemData) {
    // 编辑
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新建
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}

defineExpose({ setModalVisible })

// 点击事件
function handleConfirmClick() {
  DialogVisible.value = false
  if (!isNewRef.value && editData.value) {
    systemStore.editDepartmentAction(editData.value.id, formData)
  } else {
    systemStore.newDepartmentAction(formData)
  }
}
</script>

<style lang="less" scoped>
.department-modal {
  .form {
    padding: 0 20px;
  }
}
</style>
