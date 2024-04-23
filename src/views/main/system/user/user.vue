<template>
  <div class="user">
    <userSearch @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <userContent ref="contentRef" @new-click="handleNewClick" @edit-click="handleEditClick" />
    <userModal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
import userModal from './c-cpns/user-modal.vue'
import { ref } from 'vue'

// 对content组件的操作
const contentRef = ref<InstanceType<typeof userContent>>()

function handleQueryClick(formData: any) {
  console.log(formData)
  contentRef.value?.fetchUserListData(formData)
}
function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

// 对modal组件操作
const modalRef = ref<InstanceType<typeof userModal>>()
function handleNewClick() {
  modalRef.value?.setModalVisible()
}
function handleEditClick(itemData: any) {
  modalRef.value?.setModalVisible(false, itemData)
  console.log('321', itemData)
}
</script>

<style lang="less" scoped>
// .user {
//   color: red;
// }
</style>
