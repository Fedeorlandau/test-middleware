import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname.match(/^\/dashboard/)) {
    const session = req.cookies;
    const token = session.token;
    if (!token) {
      return NextResponse.redirect('/login');
    }
  }

  return NextResponse.next();
}
