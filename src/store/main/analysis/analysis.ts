import { getAmoutListData, getGoodsAddressSale, getGoodsCategoryCount, getGoodsCategorySale, getGoodsFavorCount, getGoodsTopSale } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
  amountList: any[]
  goodsCategorySale: any[]
  goodsCategoryCount: any[]
  goodsAddressSale: any[]
  goodsTopSale: any[]
  goodsFavorCount: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    goodsCategorySale: [],
    goodsCategoryCount: [],
    goodsAddressSale: [],
    goodsTopSale: [],
    goodsFavorCount: []
  }),
  actions: {
    fetchAnalysisDataAction() {
      getAmoutListData().then(res => {
        this.amountList = res.data
      })
      getGoodsCategorySale().then(res => {
        this.goodsCategorySale = res.data
      })
      getGoodsCategoryCount().then(res => {
        this.goodsCategoryCount = res.data
      })
      getGoodsAddressSale().then(res => {
        this.goodsAddressSale = res.data
      })
      getGoodsTopSale().then(res => {
        this.goodsTopSale = res.data
      })
      getGoodsFavorCount().then(res => {
        this.goodsFavorCount = res.data
      })
    }
  }
})

export default useAnalysisStore
