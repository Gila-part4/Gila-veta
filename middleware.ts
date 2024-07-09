import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // 로그인시 로그인, 회원가입 페이지 접근시 메인페이지'/'로 리다이렉션, nextauth middleware로 인증 여부 분별후 로그인페이지로 리다이렉션
  function middleware(req) {
    const hasAccessToken = req.nextauth.token?.accessToken;
    const { pathname } = req.nextUrl;
    const authRoutes = ['/login', '/register'];

    const isAuthRoutes = authRoutes.includes(pathname);

    if (hasAccessToken && isAuthRoutes) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  },
);

export const config = {
  matcher: ['/mypage', '/login', '/register'],
};
