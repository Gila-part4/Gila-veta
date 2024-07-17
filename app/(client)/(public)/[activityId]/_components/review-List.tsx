import { Review } from '@/type/reviews';
import ReviewItem from './review-item';

export default function ReviewList({ reviewList }: { reviewList: Review[] }) {
  return (
    <ul>
      {reviewList.map((review) => (
        <ReviewItem key={review.id} item={review} />
      ))}
    </ul>
  );
}
