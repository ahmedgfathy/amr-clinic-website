import { Cairo } from 'next/font/google';
import "./globals.css";
import Header from "./_components/Header";
import Footers from "./_components/Footers";

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: "مركز الأمل",
  description: "مركز متخصص لدعم وعلاج التوحد وADHD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Header />
        {children}
        <Footers />
      </body>
    </html>
  );
}
