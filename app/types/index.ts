export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  // description 已经移除了，从翻译文件读取
}

// ✨ 新增：定义购物车商品 (继承自 Product，但多了一个 quantity 数量字段)
export interface CartItem extends Product {
  quantity: number;
}
