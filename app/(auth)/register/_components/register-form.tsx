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
import register from '@/app/action/register';
import { toast } from 'sonner';

const formFields = [
  {
    name: 'nickname',
    label: 'nickname',
    placeholder: 'Enter your username',
    description: 'This is your public display name.',
    type: 'text',
  },
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
  {
    name: 'passwordConfirm',
    label: 'PasswordConfirm',
    placeholder: 'Enter your passwordConfirm',
    description: 'Check password.',
    type: 'password',
  },
];

const formSchema = z.object({
  nickname: z
    .string()
    .min(2, {
      message: '2자 이상으로!',
    })
    .max(10, {
      message: '10자 이내로!',
    }),
  email: z.string().email({
    message: '이메일 형식 아님!',
  }),
  password: z.string().min(8, {
    message: '최소 8자!',
  }),
  passwordConfirm: z.string().min(8, {
    message: '최소 8자!',
  }),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { nickname, email, password } = values;
    const action = await register({ email, nickname, password });
    if (!action.success) {
      toast.error(action.message);
      return;
    }
    toast.success(action.message);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as 'password' | 'nickname' | 'email' | 'passwordConfirm'}
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
