import Image from 'next/image';
import React from 'react';
import LogoImg from '@/public/logo.png';

interface Props {
  widthSize?: number;
  heightSize?: number;
}

export default function Logo({ widthSize, heightSize }: Props) {
  return (
    <div className={`relative w-[200px] h-[200px] w-[${widthSize}] h-[${heightSize}px]`}>
      <Image alt="logo" src={LogoImg} fill />
    </div>
  );
}
