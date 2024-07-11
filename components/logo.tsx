import Image from 'next/image';
import React from 'react';
import LogoImg from '@/public/logo.png';

interface Props {
  size: number;
}

export default function Logo({ size }: Props) {
  return (
    <div className={`relative w-[${size}px]`}>
      <Image alt="logo" src={LogoImg} fill />
    </div>
  );
}
