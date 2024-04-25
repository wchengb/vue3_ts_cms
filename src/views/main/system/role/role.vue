<template>
  <div class="role">
    <roleSearch @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <roleContent @new-role-click="handleNewClick" ref="contentRef" />
    <roleModal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import roleSearch from './c-cpns/role-search.vue'
import roleModal from './c-cpns/role-modal.vue'
import roleContent from './c-cpns/role-content.vue'

import { ref } from 'vue'

// 对content
const contentRef = ref<InstanceType<typeof roleContent>>()
function handleQueryClick(searchForm: any) {
  contentRef.value?.fetchRoleListData(searchForm)
}
function handleResetClick() {
  contentRef.value?.fetchRoleListData()
}

// 对modal
const modalRef = ref<InstanceType<typeof roleModal>>()
function handleNewClick() {
  modalRef.value?.setModalVisible()
}
</script>

<style lang="less" scoped>
// .role {
//   color: red;
// }
</style>
