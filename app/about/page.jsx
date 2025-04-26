import Image from 'next/image';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">عن مركز الأمل</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن مركز متخصص في تشخيص وعلاج اضطراب طيف التوحد واضطراب فرط الحركة ونقص الانتباه، نقدم خدماتنا بأعلى معايير الجودة والرعاية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/center-facility.jpg"
                alt="مركز الأمل"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">رؤيتنا وقيمنا</h2>
              <p className="text-gray-600 leading-relaxed">
                نسعى لأن نكون المركز الرائد في تقديم خدمات التشخيص والعلاج للأطفال المصابين بالتوحد وADHD في المنطقة، من خلال تطبيق أحدث الأساليب العلاجية المعتمدة عالمياً.
              </p>
              <ul className="space-y-4">
                {[
                  "فريق متخصص من المعالجين والأخصائيين",
                  "برامج علاجية مخصصة لكل حالة",
                  "بيئة آمنة وداعمة للأطفال",
                  "تعاون مستمر مع الأسر",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">فريقنا المتخصص</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "د. أحمد محمد",
                role: "أخصائي نفسي",
                description: "خبرة 15 عاماً في علاج التوحد",
                image: "/images/team/doctor-1.jpg"
              },
              {
                name: "د. سارة أحمد",
                role: "معالج سلوكي",
                description: "متخصصة في علاج ADHD",
                image: "/images/team/doctor-2.jpg"
              },
              {
                name: "د. محمد علي",
                role: "أخصائي تخاطب",
                description: "خبير في تطوير مهارات التواصل",
                image: "/images/team/doctor-3.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-teal-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "حالة تم علاجها" },
              { number: "15+", label: "سنوات خبرة" },
              { number: "20+", label: "متخصص معتمد" },
              { number: "95%", label: "نسبة رضا الأهالي" },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
