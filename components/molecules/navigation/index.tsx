import React, { useState } from 'react';
import clsx from 'clsx';
import { UI } from 'components';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/outline';

const classesSchema = {
  base: 'flex justify-between items-center h-[72px] px-4 bg-white border-b border-[#E2E8F0]',
};

export interface NavigationProps {
  isActiveHamburger: boolean;
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navigationClasses = clsx([classesSchema.base, className]);

  return (
    <nav className={navigationClasses}>
      <UI.Logo />
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-primary-500">
          <PhoneIcon className="h-[24px] text-white" />
        </div>
        <UI.Button size="xs" onClick={() => setMobileMenuOpen(true)}>
          <Bars2Icon className="w-[48px] text-primary-900" />
        </UI.Button>
      </div>
      {mobileMenuOpen && (
        <UI.MobileMenu onClick={() => setMobileMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navigation;
