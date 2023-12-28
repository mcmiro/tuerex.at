import React from 'react';

const LOGO_WIDTH = 85;
const LOGO_HEIGHT = 28;

const Logo = () => {
  return (
    <a href="/" className={`relative h-[28px] w-[85px] block`}>
      <img
        src="/logo.svg"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        alt="türex logo"
      />
    </a>
  );
};

export default Logo;
