import Link from 'next/link';

export default async function Home() {
  return (
    <main>
      main
      <Link href="/mypage">마이페이지</Link>
    </main>
  );
}
