import React from 'react';
import RegisterLink from '@/app/(auth)/login/_components/register-link';
import LoginForm from '@/app/(auth)/login/_components/login-form';

export default function Page() {
  return (
    <>
      <LoginForm />
      <RegisterLink />
    </>
  );
}
