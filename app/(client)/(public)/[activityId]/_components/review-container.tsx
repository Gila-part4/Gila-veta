import { reviewsMock } from '@/app/data/mockData';
import { getReviews } from '@/app/data/reviews';
import ReviewItem from './review-item';

export default async function ReviewContainer({ activityId }: { activityId: string }) {
  const review = reviewsMock;
  return (
    <div className="flex flex-col gap-6">
      <div>후기</div>
      <div className="flex gap-4">
        <p className="text-5xl">{review.averageRating}</p>
        <div>
          <p>매우만족</p>
          <div>⭐️ {review.totalCount}의 후기</div>
        </div>
      </div>
      {review.reviews.map((item) => (
        <ReviewItem key={item.id} item={item} />
      ))}
      <button type="button" className="border w-40 py-5">
        모든 리뷰 보러가기
      </button>
    </div>
  );
}
