import Image from 'next/image';

export default function Services() {
  return (
    <main>
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
                image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed"
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
                image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74"
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
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
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
                image: "https://images.unsplash.com/photo-1517971053567-8bde93bc6a58"
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
    </main>
  );
}
