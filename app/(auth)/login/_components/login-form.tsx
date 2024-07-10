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
import PasswordInput from '@/components/ui/password-input';
import { useState } from 'react';

const LoginFields = [
  {
    name: 'email',
    label: '이메일',
    placeholder: '이메일을 입력해 주세요',
    type: 'text',
  },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요',
    type: 'password',
  },
];

const LoginSchema = z.object({
  email: z.string().email({ message: '유효한 이메일이 아닙니다' }),
  password: z.string().regex(PASSWORD_REGEX, {
    message: '비밀번호는 최소 8자 이상이며 소문자, 숫자, 특수문자를 포함해야 합니다',
  }),
});

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    return values;
  }; // 팀 컨벤션은 handle이지만 라이브러리 코드와 구분을 위해 on으로 만들었습니다.

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {LoginFields.map(({ name, label, placeholder, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as 'email' | 'password'}
            render={({ field: loginField }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  {type === 'password' ? (
                    <PasswordInput
                      type={isVisible ? 'text' : 'password'}
                      handleToggle={handleVisibility}
                      placeholder={placeholder}
                      {...loginField}
                    />
                  ) : (
                    <Input type={type} placeholder={placeholder} {...loginField} />
                  )}
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
