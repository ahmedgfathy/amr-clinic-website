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

          <div className="flex items-center gap-8">
            {/* Main Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                <li><Link href="/" className="text-gray-600 hover:text-teal-600">الرئيسية</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-teal-600">عن المركز</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-teal-600">خدماتنا</Link></li>
                <li><Link href="/strategy" className="text-gray-600 hover:text-teal-600">استراتيجيتنا</Link></li>
                <li><Link href="/news" className="text-gray-600 hover:text-teal-600">الأخبار</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-teal-600">اتصل بنا</Link></li>
              </ul>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
