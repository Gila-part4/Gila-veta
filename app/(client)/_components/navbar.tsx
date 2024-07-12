import { Logo } from './logo';
import { RegisterButton } from './register-button';
import { LoginButton } from './login-button';
export function Navbar() {
  return (
    <nav className="fixed h-16 w-full">
      <div className="max-w-7xl xl:mx-auto mx-4 flex items-center h-full justify-between">
        <Logo />
        <div>
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
    </nav>
  );
}
