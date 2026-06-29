import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE = 'site-access';
const UNLOCK_PATH = '/unlock';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the unlock page and its API route
  if (pathname === UNLOCK_PATH || pathname.startsWith('/api/unlock')) {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE)?.value;
  if (token === process.env.SITE_KEY) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = UNLOCK_PATH;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
