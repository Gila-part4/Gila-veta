import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function RegisterButton() {
  return (
    <Button variant={'ghost'} asChild>
      <Link href={'/register'}>회원가입</Link>
    </Button>
  );
}
