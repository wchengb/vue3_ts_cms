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
