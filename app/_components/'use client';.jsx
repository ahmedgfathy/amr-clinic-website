'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { en } from '@/locale/en';
import { ar } from '@/locale/ar';

export default function Header() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const t = isEnglish ? en : ar;

  const toggleLanguage = () => {
    const newLocale = isEnglish ? 'ar' : 'en';
    const newPath = isEnglish ? pathname.replace('/en', '') : `/en${pathname}`;
    window.location.pathname = newPath;
  };

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={isEnglish ? "/en" : "/"} className="text-2xl font-bold text-teal-600">
            {isEnglish ? 'Hope Center' : 'مركز الأمل'}
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li><Link href={isEnglish ? "/en" : "/"} className="text-gray-600 hover:text-teal-600">{t.nav.home}</Link></li>
              <li><Link href={`${isEnglish ? "/en" : ""}/about`} className="text-gray-600 hover:text-teal-600">{t.nav.about}</Link></li>
              <li><Link href={`${isEnglish ? "/en" : ""}/services`} className="text-gray-600 hover:text-teal-600">{t.nav.services}</Link></li>
              <li><Link href={`${isEnglish ? "/en" : ""}/strategy`} className="text-gray-600 hover:text-teal-600">{t.nav.strategy}</Link></li>
              <li><Link href={`${isEnglish ? "/en" : ""}/contact`} className="text-gray-600 hover:text-teal-600">{t.nav.contact}</Link></li>
            </ul>
          </nav>

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-600 hover:text-teal-600"
          >
            <span>{isEnglish ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
