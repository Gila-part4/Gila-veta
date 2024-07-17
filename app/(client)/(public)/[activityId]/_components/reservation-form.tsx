'use client';

import { getAvailableSchedule } from '@/app/data/activities';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { AvailableTime } from '@/types/activities';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface Props {
  activityId: number;
  price: number;
}

const FormSchema = z.object({
  availableTimeId: z.number(),
  headCount: z.number(),
});

export default function ReservationForm({ activityId, price }: Props) {
  const searchParams = useSearchParams();
  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const [schedules, setSchedules] = useState<AvailableTime[]>([]);
  const [currentHeadCount, setCurrentHeadCount] = useState<number>(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      availableTimeId: 0,
      headCount: 1,
    },
  });

  const onSubmit = (data: { availableTimeId: number; headCount: number }) => {
    return data;
  };

  const fetchSchedule = useCallback(async () => {
    if (year && month) {
      const result = await getAvailableSchedule({ activityId, year, month });
      const { times } = result;
      setSchedules(times);
    }
  }, [activityId, year, month]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="availableTimeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>예약 가능한 시간</FormLabel>
              <FormControl>
                <ul className="flex flex-col gap-1">
                  {schedules.map(({ id, startTime, endTime }) => (
                    <li key={id}>
                      <Button
                        type="button"
                        id={`${id}`}
                        value={`${startTime} ~ ${endTime}`}
                        onClick={() => {
                          setSelectedId(id);
                          field.onChange(id);
                        }}
                        className={selectedId === id ? 'bg-slate-600' : ''}
                      >
                        {startTime} ~ {endTime}
                      </Button>
                    </li>
                  ))}
                </ul>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="headCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="headCount">예약 인원 수</FormLabel>
              <FormControl>
                <Input
                  id="headCount"
                  type="number"
                  placeholder="how peaple"
                  value={field.value}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    field.onChange(e);
                    setCurrentHeadCount(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">예약하기</Button>
      </form>
      <div>
        <h2>총 합계</h2>
        <p>₩ {price * currentHeadCount}</p>
      </div>
    </Form>
  );
}
