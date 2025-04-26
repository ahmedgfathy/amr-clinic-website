import Link from 'next/link';

export default function Sitemap() {
  const siteLinks = {
    'الصفحات الرئيسية': [
      { title: 'الرئيسية', href: '/' },
      { title: 'عن المركز', href: '/about' },
      { title: 'خدماتنا', href: '/services' },
      { title: 'استراتيجيتنا', href: '/strategy' },
      { title: 'اتصل بنا', href: '/contact' }
    ],
    'معلومات مهمة': [
      { title: 'الأسئلة الشائعة', href: '/faq' },
      { title: 'رؤيتنا', href: '/vision' },
      { title: 'آخر الأخبار', href: '/news' }
    ],
    'خدمات المركز': [
      { title: 'تشخيص التوحد', href: '/services#autism' },
      { title: 'تشخيص ADHD', href: '/services#adhd' },
      { title: 'العلاج السلوكي', href: '/services#behavioral' },
      { title: 'الدعم الأسري', href: '/services#family' }
    ]
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">خريطة الموقع</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              جميع صفحات ومحتويات موقع مركز الأمل مرتبة بشكل منظم لسهولة الوصول
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(siteLinks).map(([category, links]) => (
              <div key={category} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{category}</h2>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
