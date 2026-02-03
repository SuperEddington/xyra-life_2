import { Product } from "../types";

export const products: Product[] = [
  {
    id: "elegant-fishing-rod",
    name: "Elegant Fishing Rod",
    price: 299,
    image: "/images/rod.jpg",
    description: "A beautifully crafted fishing rod designed for the modern woman angler. Features premium carbon fiber construction with an elegant rose gold finish.",
    category: "Rods",
  },
  {
    id: "premium-reel",
    name: "Premium Reel",
    price: 189,
    image: "/images/reel.jpg",
    description: "Smooth-operating premium reel with precision engineering. Lightweight design with champagne gold accents.",
    category: "Reels",
  },
  {
    id: "designer-tackle-box",
    name: "Designer Tackle Box",
    price: 129,
    image: "/images/tackle.jpg",
    description: "Stylish and functional tackle box with organized compartments. Crafted from sustainable materials with leather trim.",
    category: "Accessories",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(currentId: string): Product[] {
  return products.filter((p) => p.id !== currentId).slice(0, 2);
}
