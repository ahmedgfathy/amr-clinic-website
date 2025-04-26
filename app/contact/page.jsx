import Image from 'next/image';

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن هنا للإجابة على استفساراتكم وتقديم المساعدة. يمكنكم التواصل معنا عبر أي من الوسائل التالية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ارسل رسالة</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="الاسم الكامل"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">رقم الجوال</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="05xxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">الرسالة</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">معلومات التواصل</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: "📱",
                      title: "الجوال",
                      content: "0512345678",
                      link: "tel:+966512345678"
                    },
                    {
                      icon: "📧",
                      title: "البريد الإلكتروني",
                      content: "info@hopecenter.sa",
                      link: "mailto:info@hopecenter.sa"
                    },
                    {
                      icon: "📍",
                      title: "العنوان",
                      content: "الرياض، المملكة العربية السعودية",
                      link: "https://maps.google.com"
                    }
                  ].map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ساعات العمل</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">الأحد - الخميس: 8:00 صباحاً - 8:00 مساءً</p>
                  <p className="text-gray-600">السبت: 9:00 صباحاً - 3:00 مساءً</p>
                  <p className="text-gray-600">الجمعة: مغلق</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/map.jpg"
                alt="موقع المركز"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
