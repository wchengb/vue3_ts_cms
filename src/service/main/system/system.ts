import { LOGIN_TOKEN } from "@/global/constants";
import hyRequest from "@/service";
import { localCache } from "@/utils/cache";

// 用户网络请求
export function postUsersListData(queryInfo: any) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo,

  })
}

export function deleteUserById(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}

export function newUserData(userInfo: any) {
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}
// 部门网络请求
export function getDepartmentData(queryInfo: any) {
  return hyRequest.post({
    url: '/department/list',
    data: queryInfo
  })
}

export function deleteDepartmentData(id: number) {
  return hyRequest.delete({
    url: `/department/${id}`
  })
}

export function newDepartmentData(departmentInfo: any) {
  return hyRequest.post({
    url: '/department',
    data: departmentInfo
  })
}

export function editDepartmentData(id: number, departmentInfo: any) {
  return hyRequest.patch({
    url: `/department/${id}`,
    data: departmentInfo
  })
}

// 菜单网络请求
export function getMenuData(queryInfo: any) {
  return hyRequest.post({
    url: '/menu/list',
    data: queryInfo
  })
}

// 角色网络请求
export function getRoleListData(queryInfo: any) {
  return hyRequest.post({
    url: '/role/list',
    data: queryInfo
  })
}
export function newRoleData(roleInfo: any) {
  return hyRequest.post({
    url: '/role',
    data: roleInfo
  })
}
export function deleteRoleListData(id: number) {
  return hyRequest.delete({
    url: `/role/${id}`
  })
}

export function editRoleListData(id: number, RoleInfo: any) {
  return hyRequest.patch({
    url: `/role/${id}`,
    data: RoleInfo
  })
}


