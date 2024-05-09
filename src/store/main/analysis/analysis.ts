import { getAmoutListData } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
  amountList: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: []
  }),
  actions: {
    async fetchAnalysisDataAction() {
      const amoutResult = await getAmoutListData()
      this.amountList = amoutResult.data
    }
  }
})

export default useAnalysisStore
