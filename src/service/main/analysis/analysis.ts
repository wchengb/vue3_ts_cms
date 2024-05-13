import hyRequest from "@/service";

export function getAmoutListData() {
  return hyRequest.get({
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return hyRequest.get({
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return hyRequest.get({
    url: '/goods/category/sale'
  })
}

export function getGoodsAddressSale() {
  return hyRequest.get({
    url: '/goods/address/sale'
  })
}

export function getGoodsTopSale() {
  return hyRequest.get({
    url: '/goods/sale/top10'
  })
}

export function getGoodsFavorCount() {
  return hyRequest.get({
    url: '/goods/category/favor'
  })
}

