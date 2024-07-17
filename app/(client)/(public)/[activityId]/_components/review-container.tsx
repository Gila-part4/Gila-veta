import { reviewsMock } from '@/app/data/mockData';
import { RATING } from '@/constants';
import YellowStart from '@/components/ui/yellow-star';
import ReviewModal from './review-modal';
import ReviewList from './review-List';

export default async function ReviewContainer({ activityId }: { activityId: number }) {
  const reviewData = reviewsMock;
  const averageMessage = RATING.find(
    (item) => item.rating === Math.floor(reviewData.averageRating),
  );
  return (
    <div className="flex flex-col gap-6 w-fit">
      <div>후기</div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <YellowStart size={50} />
          <p className="text-5xl">{reviewData.averageRating}</p>
        </div>
        <div className="flex flex-col justify-center">
          <p>{averageMessage?.message}</p>
          <div>이용자 {reviewData.totalCount}명의 후기</div>
        </div>
      </div>
      <ReviewList reviewList={reviewData.reviews} />
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
