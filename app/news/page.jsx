import Image from 'next/image';

export default function News() {
  const newsArticles = [
    {
      title: "افتتاح قسم جديد للعلاج الوظيفي",
      date: "15 يناير 2024",
      summary: "يسعدنا الإعلان عن افتتاح قسم متخصص للعلاج الوظيفي مجهز بأحدث المعدات والتقنيات",
      image: "/images/news/occupational-therapy.jpg",
      tag: "تطوير"
    },
    {
      title: "ورشة عمل للأهالي حول التعامل مع ADHD",
      date: "10 يناير 2024",
      summary: "ورشة عمل متخصصة للأهالي تقدم استراتيجيات عملية للتعامل مع تحديات ADHD اليومية",
      image: "/images/news/workshop.jpg",
      tag: "فعاليات"
    },
    {
      title: "برنامج تدريبي جديد للمختصين",
      date: "5 يناير 2024",
      summary: "إطلاق برنامج تدريبي متقدم للمختصين في مجال التوحد بالتعاون مع خبراء عالميين",
      image: "/images/news/training.jpg",
      tag: "تدريب"
    },
    {
      title: "نجاحات ملهمة: قصص من المركز",
      date: "1 يناير 2024",
      summary: "نشارككم قصص نجاح ملهمة لأطفالنا وأسرهم في رحلتهم مع المركز",
      image: "/images/news/success.jpg",
      tag: "قصص نجاح"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">آخر الأخبار والمستجدات</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تابع آخر أخبار وفعاليات مركز الأمل للتوحد وADHD
            </p>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
                    {article.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">{article.date}</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.summary}
                  </p>
                  <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                    اقرأ المزيد ←
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            احصل على آخر الأخبار والمستجدات مباشرة في بريدك الإلكتروني
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              اشتراك
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
