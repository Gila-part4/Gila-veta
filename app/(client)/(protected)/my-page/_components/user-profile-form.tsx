'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { useRef, useState, useTransition } from 'react';

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
import { UserRound } from 'lucide-react';
import { editProfile } from '@/app/action/user';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const formSchema = z
  .object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    profileImage: z.any().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

type Props = {
  email: string;
  username: string;
  imgUrl: string | null;
};

export function UserProfileForm({ email, username, imgUrl }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [imagePreview, setImagePreview] = useState<string | null>(imgUrl);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: username,
      email: email,
      password: '',
      confirmPassword: '',
      profileImage: null,
    },
  });

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, password } = values;
    const formData = new FormData();
    const imageInput = inputRef.current?.files?.[0];

    if (imageInput) {
      formData.append('image', imageInput);
    }
    startTransition(async () => {
      const action = await editProfile({ formData, newPassword: password, nickname: username });
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  }

  const fields: Array<{
    name: keyof z.infer<typeof formSchema>;
    label: string;
    type: string;
    placeholder: string;
    disabled: boolean;
  }> = [
    {
      name: 'username',
      label: '닉네임',
      type: 'text',
      placeholder: '닉네임을 입력하세요',
      disabled: false,
    },
    {
      name: 'email',
      label: '이메일',
      type: 'text',
      placeholder: '이메일을 입력하세요',
      disabled: true,
    },
    {
      name: 'password',
      label: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력하세요',
      disabled: false,
    },
    {
      name: 'confirmPassword',
      label: '비밀번호 재입력',
      type: 'password',
      placeholder: '비밀번호를 다시 입력하세요',
      disabled: false,
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: fieldProps }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...fieldProps}
                    disabled={field.disabled}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Controller
          control={form.control}
          name="profileImage"
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel>프로필 이미지</FormLabel>
              <FormControl>
                <>
                  <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={(e) => {
                      onChange(e.target.files);
                      onImageChange(e);
                    }}
                    style={{ display: 'none' }}
                  />
                  <div
                    onClick={handleImageClick}
                    className="cursor-pointer bg-slate-300 h-40 w-40 flex items-center justify-center rounded-full border border-black"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Image Preview"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="h-12 w-12 text-gray-500 flex items-center justify-center">
                        <UserRound />
                      </div>
                    )}
                  </div>
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid || isPending}>
          {isPending ? '수정중...' : '수정하기'}
        </Button>
      </form>
    </Form>
  );
}
