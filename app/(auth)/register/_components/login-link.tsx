import Link from 'next/link';
import React from 'react';

export default function LoginLink() {
  return (
    <div className="text-gray-700 mt-8">
      회원이신가요?&nbsp;
      <Link className="text-green-900 underline" href="/login">
        로그인하기
      </Link>
    </div>
  );
}
