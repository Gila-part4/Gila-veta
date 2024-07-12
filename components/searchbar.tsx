'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { BedDouble } from 'lucide-react';

const formSchema = z.object({
  keyword: z.string().min(1).max(50),
});

export function SearchBar() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { keyword } = values;
    router.push(`/search?keyword=${keyword}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-x-2 items-center space-y-0">
        <FormField
          control={form.control}
          name="keyword"
          render={({ field }) => (
            <FormItem className="flex-1">
              <div className="relative">
                <BedDouble className="absolute top-1/2 transform -translate-y-1/2 left-2" />
                <FormControl>
                  <Input className="pl-10" placeholder="내가 원하는 체험은" {...field} />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">검색하기</Button>
      </form>
    </Form>
  );
}
