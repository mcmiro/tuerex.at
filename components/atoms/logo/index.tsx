import React from 'react';
import Image from 'next/image';
import LogoImage from 'assets/images/logo.svg';

const LOGO_WIDTH = 85;
const LOGO_HEIGHT = 28;

const Logo = () => {
  return (
    <a href="/" className="relative h-[28px] block">
      <Image
        src={LogoImage}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        alt="logo"
      />
    </a>
  );
};

export default Logo;
