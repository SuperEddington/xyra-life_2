import { getTranslations } from "next-intl/server";
import Image from "next/image";
// 👇 修正：使用了你原代码中的路径，确保能找到组件
import { MotionDiv } from "../../components/MotionDiv"; 

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Page Header - 使用你的 about-hero.jpg */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/about-hero.jpg"
          alt="About XYRA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white font-bold tracking-widest drop-shadow-lg">
              OUR STORY
            </h1>
          </MotionDiv>
        </div>
      </div>

      {/* 2. Intro Text */}
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-serif italic text-charcoal mb-8">
            Redefining the outdoor experience for the modern woman.
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            XYRA was born from a simple observation: fishing gear was designed for utility, but rarely for beauty. We set out to change that, creating equipment that performs professionally while celebrating aesthetic sensibility.
          </p>
        </MotionDiv>
      </div>

      {/* 3. The Grid - 完美适配你的三张竖图 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 图1: Aesthetics */}
          <MotionDiv delay={0.1} className="flex flex-col gap-4">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden group">
              <Image
                src="/images/about-aesthetics.jpg"
                alt="Natural Aesthetics"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-serif font-bold mt-4 text-charcoal">Natural Aesthetics</h3>
            <p className="text-gray-500 text-sm">Inspired by the colors of nature—dried florals, autumn leaves, and morning mist.</p>
          </MotionDiv>

          {/* 图2: Designed - 设置了 margin-top 制造错落感 */}
          <MotionDiv delay={0.2} className="flex flex-col gap-4 md:mt-12"> 
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden group">
              <Image
                src="/images/about-designed.jpg"
                alt="Design Process"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-serif font-bold mt-4 text-charcoal">Thoughtful Design</h3>
            <p className="text-gray-500 text-sm">Ergonomic sizing for female hands, with materials that feel warm and luxurious.</p>
          </MotionDiv>

          {/* 图3: More */}
          <MotionDiv delay={0.3} className="flex flex-col gap-4">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden group">
              <Image
                src="/images/about-more.jpg"
                alt="Sustainability"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-serif font-bold mt-4 text-charcoal">Catch & Release</h3>
            <p className="text-gray-500 text-sm">Promoting sustainable practices and a respectful connection with our ecosystem.</p>
          </MotionDiv>

        </div>
      </div>
    </div>
  );
}