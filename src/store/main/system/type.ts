export interface IUser {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface ISystemState {
  usersList: any[]
  usersTotalCount: number
  roleList: any[]
  roleTotalCount: number
  menuList: any[]
  departmentList: any[]
  departmentTotalCount: number
}
