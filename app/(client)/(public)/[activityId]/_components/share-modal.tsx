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
import { toast } from 'sonner';

export default function ShareModal() {
  const params = useParams();

  const shareLink = async () => {
    await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/${params.activityId}`);
    toast.message('링크를 복사했습니다.');
  };

  const shareKakao = () => {
    const { Kakao } = window;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Gila',
        description: '새로운 장소에서 새로운 사람들과 새로운 경험을 해보세요!',
        imageUrl: '',
        link: {
          mobileWebUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.activityId}`,
        },
      },
      buttons: [
        {
          title: '새로운 경험하러 가기',
          link: {
            mobileWebUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.activityId}`,
          },
        },
      ],
    });
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
          <Button type="button" size="sm" className="px-3" onClick={shareKakao}>
            <Image src={KakaoIcon} alt="카카오톡 아이콘" width={18} height={18} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
