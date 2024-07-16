'use client';

import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import KakaoIcon from '@/public/kakaoICon.svg';
import { useParams } from 'next/navigation';

export default function ShareModal() {
  const params = useParams();

  const shareLink = async () => {
    await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/${params.activityId}`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">공유</Button>
      </DialogTrigger>
      <DialogContent className="w-[300px]">
        <DialogHeader>
          <DialogTitle>친구에게 공유하기</DialogTitle>
          <DialogDescription>함께하고 싶은 친구에게 공유해보세요!</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center gap-3">
          <Button type="button" size="sm" className="px-3" onClick={shareLink}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
          <Button type="button" size="sm" className="px-3">
            <Image src={KakaoIcon} alt="카카오톡 아이콘" width={18} height={18} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
