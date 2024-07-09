'use client';

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
import { PASSWORD_REGEX } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const RegisterFields = [
  {
    name: 'email',
    label: '이메일',
    placeholder: '이메일을 입력해 주세요',
    type: 'text',
  },
  {
    name: 'nickname',
    label: '닉네임',
    placeholder: '닉네임을 입력해 주세요',
    type: 'text',
  },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요',
    type: 'password',
  },
  {
    name: 'confirm',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 한 번 더 입력해 주세요',
    type: 'password',
  },
];

const Password = z
  .object({
    password: z.string().regex(PASSWORD_REGEX, {
      message: '비밀번호는 최소 8자 이상이며 소문자, 숫자, 특수문자를 포함해야 합니다',
    }),
    confirm: z
      .string()
      .min(1, { message: '비밀번호는 최소 8자 이상이며 소문자, 숫자, 특수문자를 포함해야 합니다' }),
  })
  .required()
  .refine((data) => data.password === data.confirm, {
    message: '동일한 비밀번호를 입력해 주세요',
    path: ['confirm'],
  });

const UserEmailAndName = z.object({
  email: z.string().email({ message: '유효한 이메일이 아닙니다' }),
  nickname: z
    .string()
    .min(2, { message: '닉네임은 2글자 이상 입력해 주세요' })
    .max(10, { message: '닉네임은 10글자 이하 입력해 주세요' }),
});

const RegisterSchema = z.intersection(UserEmailAndName, Password);

export default function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirm: '',
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
  }; // 팀 컨벤션은 handle이지만 라이브러리 코드와 구분을 위해 on으로 만들었습니다.

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {RegisterFields.map(({ name, label, placeholder, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as 'email' | 'nickname' | 'password' | 'confirm'}
            render={({ field: loginField }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input type={type} placeholder={placeholder} {...loginField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">로그인</Button>
      </form>
    </Form>
  );
}
