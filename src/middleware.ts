import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextRequest, NextResponse} from "next/server";

const authRoutes = ['profile'];

export default async function middleware(request: NextRequest) {
  const [, , ...segments] = request.nextUrl.pathname.split('/');
  const isAuthed = true;
  if (authRoutes.includes(segments.join('/')) && !isAuthed) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  return response;
}


export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(zh|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
