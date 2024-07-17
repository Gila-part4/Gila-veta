import { ActivityDetailResponse } from '@/types/activities';
import ReservationForm from '@/app/(client)/(public)/[activityId]/_components/reservation-form';
import CalendarForm from '@/app/(client)/(public)/[activityId]/_components/calendar-form';

interface Props {
  data: ActivityDetailResponse;
  activityId: number;
}

export default async function ReservationContainer({ data, activityId }: Props) {
  const { price } = data;

  return (
    <div>
      <div className="border-b">
        <h1>
          <b>₩ {price}</b> / 인
        </h1>
      </div>
      <CalendarForm />
      <ReservationForm activityId={activityId} price={price} />
    </div>
  );
}
