<template>
  <div class="category">
    <categorySearch @reset-click="handleResetClick" @query-click="handleQueryClick" />
    <categoryContent ref="ContentRef" @new-click="handleNewClick" @edit-click="handleEditClick" />
    <categoryModal ref="ModalRef" />
  </div>
</template>

<script setup lang="ts">
import categorySearch from './c-cpns/category-search.vue'
import categoryContent from './c-cpns/category-content.vue'
import categoryModal from './c-cpns/category-modal.vue'
import { ref } from 'vue'

// 对content
const ContentRef = ref<InstanceType<typeof categoryContent>>()
function handleResetClick() {
  ContentRef.value?.fetchCategoryListData()
}
function handleQueryClick(formData: any) {
  ContentRef.value?.fetchCategoryListData(formData)
}
// 对modal
const ModalRef = ref<InstanceType<typeof categoryModal>>()
function handleNewClick() {
  ModalRef.value?.setDialogVisible()
}
function handleEditClick(itemdata: any) {
  ModalRef.value?.setDialogVisible(false, itemdata)
}
</script>

<style lang="less" scoped>
.category {
  color: red;
}
</style>
