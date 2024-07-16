import { reviewsMock } from '@/app/data/mockData';
import { RATING } from '@/constants';
import { Star } from 'lucide-react';
import ReviewItem from './review-item';
import ReviewModal from './review-modal';

export default async function ReviewContainer({ activityId }: { activityId: string }) {
  const review = reviewsMock;
  const averageMessage = RATING.find((item) => item.rating === Math.floor(review.averageRating));
  return (
    <div className="flex flex-col gap-6 w-fit">
      <div>후기</div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <Star color="#FFC23D" size={50} fill="#FFC23D" />
          <p className="text-5xl">{review.averageRating}</p>
        </div>
        <div className="flex flex-col justify-center">
          <p>{averageMessage?.message}</p>
          <div>이용자 {review.totalCount}명의 후기</div>
        </div>
      </div>
      <div>
        {review.reviews.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <ReviewModal
          totalCount={5}
          list={[]}
          activityId={activityId}
          averageMessage={averageMessage?.message}
        />
      </div>
    </div>
  );
}
