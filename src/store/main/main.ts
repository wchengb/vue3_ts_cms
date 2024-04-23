import { getEntireDepartments, getEntireRoles } from "@/service/main/main";
import { defineStore } from "pinia";

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRoles()
      const departmentsResult = await getEntireDepartments()
      console.log('11', rolesResult, departmentsResult);


      // 保存数据
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentsResult.data.list

      console.log('22', rolesResult, departmentsResult);

    }
  }
})

export default useMainStore
