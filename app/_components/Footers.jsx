import React from 'react';
import Link from 'next/link';

function Footers() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-teal-600">مركز الأمل</h2>
            <p className="mt-4 text-gray-600">
              متخصصون في تشخيص وعلاج التوحد واضطراب فرط الحركة ونقص الانتباه
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">روابط سريعة</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="/about">عن المركز</Link>
                <Link className="hover:opacity-75" href="/services">خدماتنا</Link>
                <Link className="hover:opacity-75" href="/strategy">منهجيتنا</Link>
                <Link className="hover:opacity-75" href="/vision">رؤيتنا</Link>
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

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="text-center text-sm text-gray-500">
            <p>جميع الحقوق محفوظة © 2024 مركز الأمل</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
