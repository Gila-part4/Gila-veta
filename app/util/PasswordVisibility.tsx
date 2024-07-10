'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

function PasswordVisibility({ inputRef }: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowPassword((prev) => !prev);
    if (inputRef.current) {
      inputRef.current.type = showPassword ? 'text' : 'password';
    }
  };

  return (
    <button type="button" onClick={handleButtonClick}>
      {showPassword ? <EyeOff color="#A4A1AA" size={24} /> : <Eye color="#A4A1AA" size={24} />}
    </button>
  );

}

export default PasswordVisibility;
