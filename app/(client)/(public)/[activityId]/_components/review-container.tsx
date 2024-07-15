import { reviewsMock } from '@/app/data/mockData';
import ReviewItem from './review-item';
import ReviewModal from './review-modal';

export default async function ReviewContainer({ activityId }: { activityId: string }) {
  const review = reviewsMock;
  return (
    <div className="flex flex-col gap-6 w-fit">
      <div>후기</div>
      <div className="flex gap-4">
        <p className="text-5xl">{review.averageRating}</p>
        <div>
          <p>매우만족</p>
          <div>⭐️ {review.totalCount}개의 후기</div>
        </div>
      </div>
      <div>
        {review.reviews.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <ReviewModal totalCount={5} list={[]} activityId={activityId} />
      </div>
    </div>
  );
}
