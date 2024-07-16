import KakaoMap from '@/app/(client)/(public)/[activityId]/_components/kakao-map';
import { MapPin } from 'lucide-react';

interface Props {
  description: string;
  address: string;
}

export default function DetailDescription({ description, address }: Props) {
  return (
    <div>
      <p className="text-gray-900 text-lg font-bold leading-26">체험 설명</p>
      <p className="text-gray-800 text-base font-normal leading-26">{description}</p>
      <KakaoMap address={address} />
      <div className="flex">
        <MapPin size={20} />
        <p className="ml-1 text-sm font-normal leading-normal">{address}</p>
      </div>
    </div>
  );
}
