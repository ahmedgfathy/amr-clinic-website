'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-teal-600">
            مركز الأمل
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li><Link href="/" className="text-gray-600 hover:text-teal-600">الرئيسية</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-teal-600">عن المركز</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-teal-600">خدماتنا</Link></li>
              <li><Link href="/strategy" className="text-gray-600 hover:text-teal-600">استراتيجيتنا</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-teal-600">اتصل بنا</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
