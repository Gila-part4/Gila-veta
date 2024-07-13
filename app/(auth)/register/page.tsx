import React from 'react';
import LoginLink from '@/app/(auth)/register/_components/login-link';
import RegisterForm from '@/app/(auth)/register/_components/register-form';

export default function Page() {
  return (
    <>
      <RegisterForm />
      <LoginLink />
    </>
  );
}
