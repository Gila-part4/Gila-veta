import { Logo } from './logo';
import { UserButton } from './user-button';
import { LoginOptions } from './login-options';
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/api/auth/[...nextauth]/route';

export async function Navbar() {
  const session = await getServerSession(authOption);
  const isLoggedIn = !!session?.accessToken;

  return (
    <nav className="fixed h-16 w-full bg-white z-10 shadow-md">
      <div className="max-w-7xl xl:mx-auto mx-4 flex items-center h-full justify-between">
        <Logo />
        {isLoggedIn ? <UserButton /> : <LoginOptions />}
      </div>
    </nav>
  );
}
