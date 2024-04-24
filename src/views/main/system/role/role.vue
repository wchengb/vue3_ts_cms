<template>
  <div class="role">
    <roleSearch @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <roleContent ref="contentRef" />
    <!-- <roleModal /> -->
  </div>
</template>

<script setup lang="ts">
import roleSearch from './c-cpns/role-search.vue'
import roleModal from './c-cpns/role-modal.vue'
import roleContent from './c-cpns/role-content.vue'

import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof roleContent>>()

function handleQueryClick(searchForm: any) {
  console.log('1')

  contentRef.value?.fetchRoleListData(searchForm)
}
function handleResetClick() {
  console.log('2')

  contentRef.value?.fetchRoleListData()
}
</script>

<style lang="less" scoped>
// .role {
//   color: red;
// }
</style>
