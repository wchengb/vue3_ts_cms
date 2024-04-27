<template>
  <div class="category">
    <categorySearch />
    <categoryContent />
  </div>
</template>

<script setup lang="ts">
import categorySearch from './c-cpns/category-search.vue'
import categoryContent from './c-cpns/category-content.vue'
import categoryModal from './c-cpns/category-modal.vue'
</script>

<style lang="less" scoped>
.category {
  color: red;
}
</style>
