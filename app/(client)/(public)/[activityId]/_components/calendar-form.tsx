'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  date: z.date(),
});

export default function CalendarForm() {
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  useEffect(() => {
    const year = params.get('year');
    const month = params.get('month');
    const day = params.get('day');

    if (year && month && day) {
      const date = dayjs(`${year}-${month}-${day}`).toDate();
      form.setValue('date', date);
    }
  }, [params, form]);

  const onSubmit = ({ date }: z.infer<typeof FormSchema>) => {
    const year = dayjs(date).format('YYYY');
    const month = dayjs(date).format('MM');
    const day = dayjs(date).format('DD');

    params.set('year', String(year));
    params.set('month', String(month));
    params.set('day', String(day));

    router.push(`?${params.toString()}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>날짜</FormLabel>
              <FormControl>
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">submit</Button>
      </form>
    </Form>
  );
}
