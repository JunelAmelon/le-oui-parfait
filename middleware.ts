import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const host = req.headers.get('host') || '';
  const proto = req.headers.get('x-forwarded-proto') || 'https';

  const isWww = host.startsWith('www.');
  const isHttp = proto === 'http';

  if (!isWww && !isHttp) return NextResponse.next();

  const newUrl = new URL(req.url);

  if (isWww) {
    newUrl.host = host.replace(/^www\./, '');
  }

  if (isHttp) {
    newUrl.protocol = 'https:';
  }

  return NextResponse.redirect(newUrl, 308);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map)$).*)',
  ],
};
