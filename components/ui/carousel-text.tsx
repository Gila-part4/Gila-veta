interface CarouselItem {
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
}

interface Props {
  item: CarouselItem;
}

export default function CarouselText({ item }: Props) {
  return (
    <div className="absolute top-4 w-full">
      <p>인기 경험 BEST 6</p>
      <p>{item.title}</p>
      <p>{`₩ ${item.price} / 인`}</p>
      <div className="flex">
        <p className="text-base">⭐️</p>
        <p>{`${item.rating} (${item.reviewCount})`}</p>
      </div>
    </div>
  );
}
