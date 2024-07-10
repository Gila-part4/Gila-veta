import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const FALLBACK_URL = '/mypage';
// eslint-disable-next-line consistent-return
const protectiedAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  if (!token) {
    // 토큰값이 falsy한 사용자가 withAuth페이지에 진입하려하면,
    // 미들웨어에서 req객체 중에 NextUrl 안에 담긴 pathname을 쿼리스트링을 붙여서 로그인페이지로 리다이렉트 시킴
    url.pathname = '/login';
    // 로그인하면 이전페이지로 이동하기 위해서 쿼리스트링사용하여 붙여줌.
    url.search = `callbackUrl=${pathname}`;

    return NextResponse.redirect(url);
  }
};

// eslint-disable-next-line consistent-return
const publicAuth = async (req: NextRequest, token: boolean, to: string | null) => {
  const url = req.nextUrl.clone();

  if (token) {
    url.pathname = to ?? FALLBACK_URL;
    url.search = '';

    return NextResponse.redirect(url);
  }
};

const protectiedPageList = ['/mypage'];
const publicPageList = ['/login', '/register'];

// eslint-disable-next-line @typescript-eslint/naming-convention, consistent-return
export default async function middleware(req: NextRequest) {
  // 미들웨어 쿠키
  const cookie = req.cookies.get('Authroization')?.value || '';

  // setting Headers
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('Authroization', cookie);

  const token = await getToken({ req });
  const { searchParams } = req.nextUrl;
  const callbackUrl = searchParams.get('callbackUrl');
  const { pathname } = req.nextUrl;

  const isProtectiedRoutes = protectiedPageList.includes(pathname);
  const ispublicRoutes = publicPageList.includes(pathname);

  if (isProtectiedRoutes) return protectiedAuth(req, !!token);
  if (ispublicRoutes) return publicAuth(req, !!token, callbackUrl);
}

// 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능
export const config = {
  mathcher: [...protectiedPageList, ...publicPageList],
};
