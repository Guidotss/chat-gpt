import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {

  if (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/settings') {
    if (!req.cookies.get('token')) {
      return NextResponse.redirect(new URL('/auth/login', req.nextUrl.href));
    }
    return NextResponse.next();
  }
}
