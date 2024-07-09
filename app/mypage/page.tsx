'use client';

import { signOut } from 'next-auth/react';

export default function Mypage() {
  // 로그아웃시 nextauth 자체 메소드인 signOut으로 사용하시면 됩니다.
  return (
    <div>
      <button onClick={() => signOut()}>로그아웃</button>
    </div>
  );
}
