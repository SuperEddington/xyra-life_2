export interface Product {
  id: string;
  name: string; // 产品名称
  price: number;
  image: string;
  category: string;
  // description 字段已移除，将在组件中通过 t(`products.${id}.description`) 获取
}

export const products: Product[] = [
  {
    id: 'muse-bfs-28',
    name: 'Muse BFS 28mm [Limited]',
    price: 459.00,
    image: '/images/reel-bfs.png', // 记得确保 public/images 下有这张图 (png格式)
    category: 'Reels'
  },
  {
    id: 'siren-spin-2000',
    name: 'Siren Silk 2000',
    price: 329.00,
    image: '/images/reel-spin.png', // 记得确保有这张图 (png格式)
    category: 'Reels'
  },
  {
    id: 'macaron-gift-box',
    name: 'Macaron Cranks Gift Set',
    price: 129.00,
    image: '/images/lure-macaron.jpg', // jpg格式
    category: 'Lures'
  },
  {
    id: 'crystal-minnow',
    name: 'Crystal Prism Minnow',
    price: 35.00,
    image: '/images/lure-crystal.jpg', // jpg格式
    category: 'Lures'
  },
  {
    id: 'mermaid-tail',
    name: 'Mermaid Tail Soft Lure',
    price: 18.00,
    image: '/images/lure-soft.png', // png格式
    category: 'Lures'
  }
];

// 👇👇👇 必须加上这两个函数，否则详情页会报错 "is not a function" 👇👇👇

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(currentId: string): Product[] {
  // 简单的推荐算法：推荐除了自己以外的前3个产品
  return products.filter((p) => p.id !== currentId).slice(0, 3);
}