import Image from 'next/image';
import React from 'react';
import LogoImg from '@/public/logo.png';

function Logo() {
  return (
    <div>
      <Image alt="logo" src={LogoImg} layout="fixed" width={200} />
    </div>
  );
}

export default Logo;
