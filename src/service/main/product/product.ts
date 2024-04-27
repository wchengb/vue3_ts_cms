import hyRequest from "@/service";

// 商品类别
export function getCategoryListData(queryInfo: any) {
  return hyRequest.post({
    url: '/category/list',
    data: queryInfo
  })
}

export function newCategoryListData(categoryInfo: any) {
  return hyRequest.post({
    url: '/category',
    data: categoryInfo
  })
}

export function deleteCategoryListData(id: number) {
  return hyRequest.delete({
    url: `/category/${id}`
  })
}

export function editCategoryListData(id: number, queryInfo: any) {
  return hyRequest.patch({
    url: `/category/${id}`,
    data: queryInfo
  })
}
