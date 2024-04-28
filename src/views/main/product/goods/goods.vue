<template>
  <div class="goods">
    <goodsSearch @query-click="handleQueryClick" />
    <goodsContent @new-click="handleNewClick" ref="ContentRef" />
    <goodsModal ref="ModalRef" />
  </div>
</template>

<script setup lang="ts">
import goodsContent from './c-cpns/goods-content.vue'
import goodsSearch from './c-cpns/goods-search.vue'
import goodsModal from './c-cpns/goods-modal.vue'
import { ref } from 'vue'

// 对content
const ContentRef = ref<InstanceType<typeof goodsContent>>()
function handleQueryClick(formData: any) {
  ContentRef.value?.fetGoodsListData(formData)
}
// 对modal
const ModalRef = ref<InstanceType<typeof goodsModal>>()
function handleNewClick() {
  ModalRef.value?.setDialogVisible()
}
</script>

<style lang="less" scoped>
.goods {
  color: red;
}
</style>
