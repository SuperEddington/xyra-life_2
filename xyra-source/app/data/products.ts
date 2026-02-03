export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Muse Reel 3000',
    price: 399,
    image: '/images/reel-1.jpg', // 确保 public/images 下有图，没有也没事，只显示占位
    category: 'Reels',
    description: 'Professional grade fishing reel.'
  },
  {
    id: '2',
    name: 'Siren Lure Set',
    price: 89,
    image: '/images/lure-1.jpg',
    category: 'Lures',
    description: 'Hand-painted premium lures.'
  },
  {
    id: '3',
    name: 'Voyager Rod',
    price: 450,
    image: '/images/rod-1.jpg',
    category: 'Rods',
    description: 'Carbon fiber lightweight rod.'
  }
];
