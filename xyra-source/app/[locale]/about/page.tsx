import { getTranslations } from "next-intl/server";
import { MotionDiv } from "../../components/MotionDiv";

export default async function AboutPage() {
  const t = await getTranslations();

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
              {t("about.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gold italic">
              {t("about.subtitle")}
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
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="/images/about-story.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                {t("about.story.title")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("about.story.content")}
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
                {t("about.mission.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t("about.mission.content")}
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] bg-gray-700 rounded-2xl overflow-hidden">
                <img
                  src="/images/about-mission.jpg"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
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
                description:
                  "We believe that fishing gear should be as beautiful as it is functional.",
              },
              {
                title: "Quality",
                description:
                  "Every product is crafted with premium materials and attention to detail.",
              },
              {
                title: "Empowerment",
                description:
                  "We celebrate women who embrace their passion for fishing.",
              },
            ].map((value, index) => (
              <MotionDiv
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
