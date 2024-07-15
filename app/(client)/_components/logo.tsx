import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <Image src={'/logo-nav.png'} alt={'logo'} width={165} height={28} />
    </Link>
  );
}
