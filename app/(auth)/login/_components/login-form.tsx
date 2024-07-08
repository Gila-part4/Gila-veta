'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { login } from '@/app/action/login';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const formFields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    description: "We'll never share your email with anyone else.",
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    description: 'Choose a strong password.',
    type: 'password',
  },
];

const formSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;
    const action = await login(email, password);
    if (!action.success) {
      toast.error(action.message);
      return;
    }
    toast.success(action.message);
    router.replace('/');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as 'password' | 'email'}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input type={field.type} placeholder={field.placeholder} {...formField} />
                </FormControl>
                <FormDescription>{field.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
