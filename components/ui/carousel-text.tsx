import { Star } from 'lucide-react';

interface Props {
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
}

export default function CarouselText({ title, price, rating, reviewCount }: Props) {
  return (
    <div className="absolute left-4 bottom-4 w-full">
      <p>인기 경험 BEST 6</p>
      <p>{title}</p>
      <p>{`₩ ${price.toLocaleString()} / 인`}</p>
      <div className="flex items-center">
        <Star color="#FFC23D" size={20} />
        <p className="ml-1">{`${rating} (${reviewCount})`}</p>
      </div>
    </div>
  );
}
