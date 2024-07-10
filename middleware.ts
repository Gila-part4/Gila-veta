import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const hasAccessToken = request.cookies.has('GilaToken');

  const { pathname } = request.nextUrl;
  const authRoutes = ['/login', '/register'];

  const isAuthRoutes = authRoutes.includes(pathname);

  if (hasAccessToken && isAuthRoutes) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
