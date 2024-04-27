import { getCategoryListData, newCategoryListData, deleteCategoryListData, editCategoryListData } from '@/service/main/product/product'
import type { ISproductionState } from './type'
import { defineStore } from "pinia";

const useProduct = defineStore('product', {
  state: (): ISproductionState => ({
    categoryTotalCount: 0,
    categoryList: []
  }),
  actions: {
    async getProductListAction(queryInfo: any) {
      const productResult = await getCategoryListData(queryInfo)
      console.log(productResult, '12');
      const { list, totalCount } = productResult.data
      this.categoryList = list
      this.categoryTotalCount = totalCount
    },
    async newProductAction(categoryInfo: any) {
      const categoryResult = await newCategoryListData(categoryInfo)
      this.getProductListAction({ size: 10, offset: 0 })
    },
    async deleteProductAction(id: number) {
      const deleteResult = await deleteCategoryListData(id)
      this.getProductListAction({ size: 10, offset: 0 })
    },
    async editProductAction(id: number, queryInfo: any) {
      const editResult = await editCategoryListData(id, queryInfo)
      this.getProductListAction({ size: 10, offset: 0 })
    }
  }
})
export default useProduct
