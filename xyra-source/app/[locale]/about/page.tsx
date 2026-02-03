import { getTranslations, setRequestLocale } from "next-intl/server";
import { MotionDiv } from "../../components/MotionDiv";

// 1. 定义 Params 为 Promise (Next.js 15 标准)
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  // 2. 必须先 await 解构 params
  const { locale } = await params;

  // 3. 启用静态生成 (与你的 Layout 保持一致)
  setRequestLocale(locale);

  // 4. 获取翻译 (传入 locale 确保静态构建正确)
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-gold italic">
              {t("subtitle")}
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-8" />
          </MotionDiv>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                {/* 这里的图片路径请确保在 public/images/ 下存在，否则显示灰色背景 */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                   [Image: Brand Story]
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                {t("story.title")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("story.content")}
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-serif font-bold mb-6">
                {t("mission.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t("mission.content")}
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                 <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-400">
                   [Image: Our Mission]
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Elegance",
                descKey: "elegance", 
              },
              {
                title: "Quality",
                descKey: "quality",
              },
              {
                title: "Empowerment",
                descKey: "empowerment",
              },
            ].map((value, index) => (
              <MotionDiv
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                  {value.title}
                </h3>
                {/* 注意：这里假设你的翻译文件结构里有 values.elegance 等键值 */}
                <p className="text-gray-600">
                  {/* 这里为了防止翻译键缺失报错，你可以根据实际 json 修改 */}
                  {t(`values.${value.descKey}` as any)} 
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
