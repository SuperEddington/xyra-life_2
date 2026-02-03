import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server"; // 1. 引入这个
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MotionDiv } from "../components/MotionDiv";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  // 2. 必须先 await 解构 params
  const { locale } = await params;

  // 3. 【关键一步】首页也要加这行，才能静态生成！
  setRequestLocale(locale);

  const t = useTranslations("Index"); // 确保你的 json 里有 "Index" 或 "index" 键

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FDFBF7]/80" />
          {/* 这里可以放一张背景图或者视频占位 */}
          <div className="w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 font-serif text-5xl font-medium tracking-tight text-gray-900 md:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl font-light text-gray-600 md:text-2xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C4A026] text-white px-8 py-6 text-lg rounded-full">
                  {t("hero.cta")}
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                  {t("hero.secondary_cta")}
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl text-gray-900 md:text-4xl">
              {t("featured.title")}
            </h2>
            <div className="w-20 h-1 mx-auto bg-[#D4AF37]" />
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 这里是示例卡片，实际应该从 data.ts 读取 */}
            {[1, 2, 3].map((item) => (
              <MotionDiv
                key={item}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl aspect-[3/4] bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    [Product Image {item}]
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>
                <h3 className="mb-2 font-serif text-xl text-gray-900">XYRA Series {item}</h3>
                <p className="text-[#D4AF37]">$129.00</p>
              </MotionDiv>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/shop" className="inline-flex items-center text-lg text-gray-900 hover:text-[#D4AF37] transition-colors">
              {t("featured.view_all")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
