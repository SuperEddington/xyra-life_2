# XYRA - The Muse

一个功能完整的多语言电商网站原型，面向女性钓鱼生活方式品牌。

## 技术栈

- **框架**: Next.js 16 + App Router
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **国际化**: next-intl
- **动画**: Framer Motion
- **图标**: Lucide React
- **状态管理**: React Context API

## 功能特性

- 多页面架构（首页、商店、产品详情、关于）
- 多语言支持（英语、日语、简体中文、法语）
- 功能完整的购物车系统
- 动态产品页面
- 响应式设计
- 优雅的动画效果

## 项目结构

```
xyra-source/
├── app/
│   ├── [locale]/           # 多语言页面
│   │   ├── page.tsx        # 首页
│   │   ├── shop/page.tsx   # 商店页
│   │   ├── about/page.tsx  # 关于页
│   │   └── product/[id]/   # 产品详情页
│   ├── components/         # 组件
│   ├── hooks/              # 自定义 Hooks
│   ├── data/               # 数据文件
│   └── types/              # TypeScript 类型
├── i18n/                   # 国际化配置
├── messages/               # 翻译文件
├── public/images/          # 图片资源
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 快速开始

### 1. 安装依赖

```bash
cd xyra-source
npm install
```

### 2. 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
```

构建输出在 `dist/` 目录。

## 添加新产品

编辑 `app/data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: "your-product-id",
    name: "Product Name",
    price: 199,
    image: "/images/your-image.jpg",
    description: "Product description...",
    category: "Category",
  },
  // ...
];
```

## 添加新语言

1. 在 `i18n/config.ts` 中添加语言代码
2. 在 `messages/` 目录创建翻译文件
3. 更新 `LanguageSwitcher` 组件

## 部署

### Vercel

```bash
npm i -g vercel
vercel
```

### 静态导出

```bash
npm run build
# 部署 dist/ 目录
```

## 许可证

MIT
