import ReviewContainer from './_components/review-container';
import ShareModal from './_components/share-modal';

export default function Page() {
  return (
    <div>
      상세페이지
      <ShareModal />
      <ReviewContainer activityId={1659} />
    </div>
  );
}
