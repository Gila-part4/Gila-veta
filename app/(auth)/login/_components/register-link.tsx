import Link from 'next/link';
import React from 'react';

export default function RegisterLink() {
  return (
    <div className="text-gray-700 mt-8">
      회원이 아니신가요?&nbsp;
      <Link className="text-green-900 underline" href="/register">
        회원가입하기
      </Link>
    </div>
  );
}
