import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              مركز الأمل للتوحد و ADHD
            </h1>
            <p className="text-xl text-white/90 mb-8">
              نقدم رعاية متخصصة ودعماً شاملاً لمساعدة الأطفال والعائلات في رحلتهم نحو حياة أفضل
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              احجز استشارة مجانية
            </button>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                  alt="Autism therapy session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-teal-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">التوحد (ASD)</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                اضطراب طيف التوحد هو حالة نمائية تؤثر على كيفية تفاعل الشخص مع الآخرين وتواصله معهم.
              </p>
              <ul className="space-y-3">
                {["صعوبات في التواصل الاجتماعي", "أنماط سلوكية متكررة", "اهتمامات محددة ومحدودة", "تحديات في التفاعل مع الآخرين"].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                  alt="ADHD support session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">ADHD</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                ADHD هو اضطراب عصبي نمائي يؤثر على القدرة على الانتباه والتحكم في السلوك الاندفاعي ومستويات النشاط.
              </p>
              <ul className="space-y-3">
                {["صعوبة في التركيز والانتباه", "فرط النشاط والحركة المفرطة", "الاندفاعية في السلوك والقرارات", "تحديات في التنظيم وإدارة الوقت"].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">خدماتنا المتخصصة</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "التشخيص المبكر",
                description: "تقييم شامل وتشخيص دقيق للحالات في مراحلها المبكرة",
                color: "teal",
                image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed"
              },
              {
                title: "العلاج السلوكي",
                description: "برامج علاجية متخصصة تناسب كل حالة على حدة",
                color: "amber",
                image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74"
              },
              {
                title: "الدعم الأسري",
                description: "إرشاد وتوجيه الأسر للتعامل مع التحديات اليومية",
                color: "teal",
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`overflow-hidden rounded-xl border-2 border-${service.color}-100 hover:border-${service.color}-300 transition-all`}
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
