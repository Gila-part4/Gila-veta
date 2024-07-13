import Image from 'next/image';
import React from 'react';
import LogoImg from '@/public/logo.png';

export default function Logo() {
  return <Image alt="logo" src={LogoImg} layout="fixed" width={200} />;
}
