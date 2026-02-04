import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// 使用默认配置，让它自己去找 i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // 👇 关键：删掉了 distDir: "dist"，让它默认生成到 .next 文件夹
  images: {
    // 如果你想用 Vercel 自带的图片优化，这行也可以删掉；
    // 但为了保险起见（防止消耗过多配额），保留它也没问题。
    unoptimized: true, 
  },
};

export default withNextIntl(nextConfig);
