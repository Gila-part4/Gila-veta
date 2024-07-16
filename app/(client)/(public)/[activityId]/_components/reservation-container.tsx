import { Suspense } from 'react';
import { ActivityDetailResponse } from '@/types/activities';
import ReservationForm from '@/app/(client)/(public)/[activityId]/_components/reservation-form';
import CalendarForm from '@/app/(client)/(public)/[activityId]/_components/calendar-form';

interface Props {
  data: ActivityDetailResponse;
  activityId: number;
}

export default function ReservationContainer({ data, activityId }: Props) {
  const { price, schedules } = data;

  return (
    <div>
      <div className="border-b">
        <h1>
          <b>₩ {price}</b> / 인
        </h1>
      </div>
      <Suspense>
        <CalendarForm />
      </Suspense>
      <Suspense>
        <ReservationForm totalSchedule={schedules} activityId={activityId} />
      </Suspense>
    </div>
  );
}
