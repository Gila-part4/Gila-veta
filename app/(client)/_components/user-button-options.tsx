'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  imgUrl: string;
  username: string;
};

export function UserButtonOptions({ imgUrl, username }: Props) {
  const pathname = usePathname();
  const logout = () => {
    signOut({ callbackUrl: pathname });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="outline-none">
        <Button variant={'ghost'} className="flex items-center gap-x-2 px-1">
          <Avatar>
            <AvatarImage src={imgUrl} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span>{username}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={'/my-page'}>my page</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>로그아웃</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
