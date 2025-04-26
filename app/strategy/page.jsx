import Image from 'next/image';

export default function Strategy() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">استراتيجيتنا ورؤيتنا</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نسعى لتقديم أفضل رعاية ممكنة لأطفال التوحد وADHD من خلال نهج شامل ومتكامل
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-teal-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🔭</span>
                <h2 className="text-3xl font-bold text-gray-800">رؤيتنا</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                أن نكون المركز الرائد في تقديم خدمات التشخيص والعلاج للأطفال المصابين بالتوحد وADHD في المنطقة، وأن نساهم في تحسين جودة حياتهم وأسرهم.
              </p>
              <ul className="space-y-3">
                {[
                  "تقديم رعاية عالية الجودة",
                  "دعم الأسر والمجتمع",
                  "تطوير مهارات الأطفال",
                  "تحقيق الاستقلالية"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🎯</span>
                <h2 className="text-3xl font-bold text-gray-800">رسالتنا</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                توفير بيئة داعمة وآمنة تساعد الأطفال على تطوير قدراتهم وتحقيق إمكاناتهم الكاملة من خلال برامج علاجية متخصصة ومتكاملة.
              </p>
              <ul className="space-y-3">
                {[
                  "تشخيص دقيق وشامل",
                  "علاج متخصص ومتكامل",
                  "متابعة مستمرة للتقدم",
                  "تمكين الأسر والمجتمع"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach Section */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">نهجنا الاستراتيجي</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "التشخيص المبكر",
                description: "نؤمن بأهمية التشخيص المبكر في تحسين نتائج العلاج وتعزيز فرص التطور",
                icon: "🔍"
              },
              {
                title: "العلاج الفردي",
                description: "نصمم برامج علاجية مخصصة تناسب احتياجات كل طفل وظروفه الخاصة",
                icon: "⚡"
              },
              {
                title: "دعم الأسرة",
                description: "نعمل مع الأسر كشركاء في رحلة العلاج ونقدم التدريب والدعم اللازم",
                icon: "💝"
              },
              {
                title: "التطوير المستمر",
                description: "نواكب أحدث الأساليب العلاجية ونطور برامجنا باستمرار",
                icon: "📈"
              },
              {
                title: "التكامل العلاجي",
                description: "ندمج مختلف التخصصات العلاجية لتحقيق أفضل النتائج",
                icon: "🤝"
              },
              {
                title: "التقييم المستمر",
                description: "نراقب التقدم بشكل منتظم ونعدل الخطط العلاجية وفقاً للنتائج",
                icon: "📊"
              }
            ].map((strategy, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
