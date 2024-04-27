<template>
  <div class="category-modal">
    <el-dialog
      v-model="DialogVisible"
      :title="isNewRef ? '新建类别' : '编辑类别'"
      width="500"
      center
    >
      <el-form :model="forData" label-width="80px" size="large">
        <el-form-item label="类别名称" prop="name">
          <el-input v-model="forData.name" placeholder="请输入类别名称"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useProduct from '@/store/main/product/product'

const isNewRef = ref(true)
const editData = ref()
const DialogVisible = ref(false)
const productStore = useProduct()

const forData = reactive<any>({
  name: ''
})

function setDialogVisible(isNew: boolean = true, itemdata?: any) {
  DialogVisible.value = true
  isNewRef.value = isNew
  if (!isNew && itemdata) {
    for (const key in forData) {
      forData[key] = itemdata[key]
    }
    editData.value = itemdata
  } else {
    for (const key in forData) {
      forData[key] = ''
    }
    editData.value = null
  }
}
defineExpose({ setDialogVisible })

function handleConfirmClick() {
  DialogVisible.value = false
  if (!isNewRef.value && editData.value) {
    productStore.editProductAction(editData.value.id, forData)
  } else {
    productStore.newProductAction(forData)
  }
}
</script>

<style lang="less" scoped>
.category-modal {
  color: red;
}
</style>
