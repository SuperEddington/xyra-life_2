export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  // 👇 删掉 description，或者改成可选 (description?: string)
  // 因为我们现在是从多语言 json 里读取描述，而不是从这里
}
