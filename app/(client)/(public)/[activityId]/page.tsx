import { getActivityDetail } from '@/app/data/activities';
import DetailContent from '@/app/(client)/(public)/[activityId]/_components/detail-content';

interface Props {
  params: { activityId: number };
}

export default async function Page({ params }: Props) {
  const id = Number(params.activityId);

  const data = await getActivityDetail({
    activityId: id,
  });

  return (
    <div>
      <DetailContent data={data} />
    </div>
  );
}
