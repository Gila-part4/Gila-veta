import { Star, MapPin } from 'lucide-react';

interface Props {
  title: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
}

export default function DetailTitle({ title, category, address, rating, reviewCount }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-800 text-base font-normal leading-normal">{category}</p>
      <p className="text-2xl font-bold leading-normal">{title}</p>
      <div className="flex items-center gap-2">
        <div className="flex">
          <Star color="#FFC23D" size={20} fill="#FFC23D" />
          <p className="ml-1 text-sm font-normal leading-normal">{`${rating} (${reviewCount})`}</p>
        </div>
        <div className="flex">
          <MapPin size={20} />
          <p className="ml-1 text-sm font-normal leading-normal">{address}</p>
        </div>
      </div>
    </div>
  );
}
