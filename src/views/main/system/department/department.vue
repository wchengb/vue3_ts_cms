<template>
  <div class="department">
    <departmentSearch @reset-click="handleResetClick" @query-click="handleQueryClick" />
    <departmentContent ref="contentRef" />
  </div>
</template>

<script setup lang="ts">
import departmentSearch from './c-cpns/department-search.vue'
import departmentContent from './c-cpns/department-content.vue'
import departmentModal from './c-cpns/department-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof departmentContent>>()
function handleResetClick() {
  contentRef.value?.fetchDepartmentListData()
}
function handleQueryClick(searchForm: any) {
  contentRef.value?.fetchDepartmentListData(searchForm)
}
</script>

<style lang="less" scoped>
// .department {
//   color: red;
// }
</style>
