import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const FALLBACK_URL = '/mypage';
// eslint-disable-next-line consistent-return
const protectiedAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();

  if (!token) {
    url.pathname = '/login';

    return NextResponse.redirect(url);
  }
};

// eslint-disable-next-line consistent-return
const publicAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();

  if (token) {
    url.pathname = FALLBACK_URL;

    return NextResponse.redirect(url);
  }
};

const protectiedPageList = ['/mypage'];
const publicPageList = ['/login', '/register'];

// eslint-disable-next-line @typescript-eslint/naming-convention, consistent-return
export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  const isProtectiedRoutes = protectiedPageList.includes(pathname);
  const ispublicRoutes = publicPageList.includes(pathname);

  if (isProtectiedRoutes) return protectiedAuth(req, !!token);
  if (ispublicRoutes) return publicAuth(req, !!token);
}

// 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능
export const config = {
  mathcher: ['/mypage', '/login', '/register'],
};
