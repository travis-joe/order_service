export interface ProductInfoInput {
  name: string // 商品名称
  price: number // 单价
  stock?: number // 库存
  status?: number // 商品状态: 0正常, 1下架
  description?: string // 描述
  icon?: string // 小图
}

export interface ProductInfoStockInput {
  id: string
  quantity: number
}

