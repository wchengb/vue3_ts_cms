import { deleteUserById, editUserData, newUserData, postUsersListData, getDepartmentData, getRoleListData } from "@/service/main/system/system";
import { defineStore } from "pinia";
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,
    departmentList: [],
    departmentTotalCount: 0,
    roleList: [],
    roleTotalCount: 0,
  }),
  actions: {
    async postUserListAction(queryInfo: any) {
      const usersListResult = await postUsersListData(queryInfo)
      const { totalCount, list } = usersListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    },
    async deleteUserByIdAction(id: number) {
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult);
      // 重新请求新的数据
      this.postUserListAction({ offset: 0, size: 10 })
    },
    async newUserDataAction(userInfo: any) {
      // 1. 创建用户
      const newResult = await newUserData(userInfo)
      console.log(newResult);
      // 2.重新请求新的数据
      this.postUserListAction({ offset: 0, size: 10 })
    },
    async editUserDataAction(id: number, userInfo: any) {
      // 1. 更新用户数据
      const editResult = await editUserData(id, userInfo)
      console.log(editResult);
      // 2. 重新请求新的数据
      this.postUserListAction({ offset: 0, size: 10 })
    },
    // ----------部门----------
    async getDepartmentListAction(queryInfo: any) {
      const departmentResult = await getDepartmentData(queryInfo)
      const { list, totalCount } = departmentResult.data
      this.departmentList = list
      this.departmentTotalCount = totalCount
    },

    // ----------角色----------
    async getRoleListAction(queryInfo: any) {
      const roleResult = await getRoleListData(queryInfo)
      const { list, totalCount } = roleResult.data
      this.roleTotalCount = totalCount
      this.roleList = list
    }
  }
})
export default useSystemStore