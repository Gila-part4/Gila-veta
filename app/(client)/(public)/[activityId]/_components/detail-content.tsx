import { SubImage } from '@/type/activities';
import DetailTitle from '@/app/(client)/(public)/[activityId]/_components/detail-title';
import DetailDescription from '@/app/(client)/(public)/[activityId]/_components/detail-description';
import { DetailCarousel } from '@/components/ui/detail-carousel';

interface Props {
  data: {
    id: number;
    title: string;
    category: string;
    description: string;
    address: string;
    rating: number;
    reviewCount: number;
    bannerImageUrl: string;
    subImages: SubImage[];
  };
}

export default function DetailContent({ data }: Props) {
  const {
    id,
    title,
    category,
    description,
    address,
    rating,
    reviewCount,
    bannerImageUrl,
    subImages,
  } = data;

  const carouselImagesUrl = [{ id: id, imageUrl: bannerImageUrl }, ...subImages];

  return (
    <div className="m-40">
      <DetailTitle
        title={title}
        category={category}
        address={address}
        rating={rating}
        reviewCount={reviewCount}
      />
      <DetailCarousel carouselImagesUrl={carouselImagesUrl} />
      <DetailDescription description={description} address={address} />
    </div>
  );
}
