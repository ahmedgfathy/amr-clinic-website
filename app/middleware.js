import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const isEnglish = pathname.startsWith('/en');
  
  // Set HTML lang attribute and dir based on path
  const response = NextResponse.next();
  response.headers.set('x-lang', isEnglish ? 'en' : 'ar');
  response.headers.set('x-dir', isEnglish ? 'ltr' : 'rtl');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
