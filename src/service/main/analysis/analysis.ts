import hyRequest from "@/service";

export function getAmoutListData() {
  return hyRequest.get({
    url: '/goods/amount/list'
  })
}
