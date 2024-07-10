'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
      {showPassword ? <EyeOff color="#A4A1AA" size={24} /> : <Eye color="#A4A1AA" size={24} />}
    </button>
  );
}

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };