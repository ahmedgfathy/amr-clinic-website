import Link from 'next/link';

function Footers() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-teal-600">مركز الأمل</h2>
            <p className="mt-4 text-gray-600">
              متخصصون في تشخيص وعلاج التوحد واضطراب فرط الحركة ونقص الانتباه
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">روابط سريعة</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="/about">عن المركز</Link>
                <Link className="hover:opacity-75" href="/services">خدماتنا</Link>
                <Link className="hover:opacity-75" href="/strategy">منهجيتنا</Link>
                <Link className="hover:opacity-75" href="/contact">اتصل بنا</Link>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900">معلومات إضافية</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="/faq">الأسئلة الشائعة</Link>
                <Link className="hover:opacity-75" href="/sitemap">خريطة الموقع</Link>
                <Link className="hover:opacity-75" href="/news">آخر الأخبار</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>جميع الحقوق محفوظة © 2024 مركز الأمل</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
