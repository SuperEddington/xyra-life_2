import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

// 🔨 强硬手段：使用 process.cwd() 获取项目根目录，拼接出绝对路径
// 这样无论在哪个盘符，Next.js 都能精准找到它
const withNextIntl = createNextIntlPlugin(
  path.join(process.cwd(), "i18n/request.ts")
);

const nextConfig: NextConfig = {
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);