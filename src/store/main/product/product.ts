import { getCategoryListData } from '@/service/main/product/product'

import { defineStore } from "pinia";


const useProduct = defineStore('product', {
  state: () => ({

  }),
  actions: {
    async getProductListAction(queryInfo: any) {
      const productResult = await getCategoryListData(queryInfo)
    }
  }
})
