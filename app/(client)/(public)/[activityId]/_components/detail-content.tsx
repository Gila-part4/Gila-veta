import Image from 'next/image';
import { ActivityItem, SubImage } from '@/type/activities';
import DetailTitle from '@/app/(client)/(public)/[activityId]/_components/detail-title';
import DetailDescription from '@/app/(client)/(public)/[activityId]/_components/detail-description';
import { DetailCarousel } from '@/components/ui/detail-carousel';

interface Props extends ActivityItem {
  subImages: SubImage[];
}

export default function DetailContent({
  title,
  category,
  description,
  address,
  rating,
  reviewCount,
  bannerImageUrl,
  subImages,
}: Props) {
  return (
    <div>
      <div className="mt-10 mr-40 ml-40">
        <DetailTitle
          title={title}
          category={category}
          address={address}
          rating={rating}
          reviewCount={reviewCount}
        />
        <DetailCarousel subImages={subImages} />
        <DetailDescription description={description} address={address} />
      </div>
    </div>
  );
}
