import Image from 'next/image';

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا العلاجية</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات العلاجية المتخصصة للأطفال المصابين بالتوحد وADHD، مع التركيز على احتياجات كل طفل بشكل فردي
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "التشخيص الشامل",
                description: "تقييم دقيق للحالة باستخدام أحدث المقاييس العالمية",
                features: [
                  "تقييم المهارات الاجتماعية",
                  "تقييم القدرات المعرفية",
                  "تقييم المهارات الحركية",
                  "تقييم مهارات التواصل"
                ],
                image: "/images/services/diagnosis.jpg"
              },
              {
                title: "العلاج السلوكي",
                description: "برامج سلوكية متخصصة لتعديل السلوك وتنمية المهارات",
                features: [
                  "تحليل السلوك التطبيقي (ABA)",
                  "تدريب على المهارات الاجتماعية",
                  "تعديل السلوكيات غير المرغوبة",
                  "تطوير مهارات التواصل"
                ],
                image: "/images/services/behavioral.jpg"
              },
              {
                title: "العلاج الوظيفي",
                description: "تحسين المهارات الحركية والحسية للطفل",
                features: [
                  "تطوير المهارات الحركية الدقيقة",
                  "تحسين التناسق الحركي",
                  "تنمية المهارات الحسية",
                  "دعم الاستقلالية الذاتية"
                ],
                image: "/images/services/occupational.jpg"
              },
              {
                title: "علاج النطق والتخاطب",
                description: "تطوير مهارات التواصل اللفظي وغير اللفظي",
                features: [
                  "تحسين النطق واللغة",
                  "تطوير مهارات المحادثة",
                  "دعم التواصل البصري",
                  "تنمية مهارات الفهم"
                ],
                image: "/images/services/speech.jpg"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">خدمات الدعم الإضافية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "الدعم الأسري",
                description: "جلسات إرشادية للأسر لفهم احتياجات أطفالهم وكيفية التعامل معها",
                icon: "🤝"
              },
              {
                title: "متابعة التقدم",
                description: "تقييم دوري لتقدم الطفل وتعديل الخطة العلاجية وفقاً لذلك",
                icon: "📈"
              },
              {
                title: "برامج منزلية",
                description: "إرشادات وتمارين يمكن تطبيقها في المنزل لدعم التطور المستمر",
                icon: "🏠"
              }
            ].map((support, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{support.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{support.title}</h3>
                <p className="text-gray-600">{support.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
