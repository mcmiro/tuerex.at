import React from 'react';
import Image from 'next/image';

const LOGO_WIDTH = 85;
const LOGO_HEIGHT = 28;

const Logo = () => {
  return (
    <a href="/" className="relative h-[28px] block">
      <Image
        src="/logo.svg"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        alt="türex logo"
      />
    </a>
  );
};

export default Logo;
