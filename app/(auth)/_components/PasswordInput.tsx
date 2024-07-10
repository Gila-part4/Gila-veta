'use client';

import { forwardRef, useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input, InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const disabled = props.value === '' || props.value === undefined || props.disabled;

  return (
    <div className="relative">
      <Input type={showPassword ? 'text' : 'password'} ref={ref} {...props} />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={disabled}
      >
        {showPassword && !disabled ? (
          <EyeIcon aria-hidden="true" color="#A4A1AA" size={24} />
        ) : (
          <EyeOffIcon aria-hidden="true" color="#A4A1AA" size={24} />
        )}
      </Button>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
