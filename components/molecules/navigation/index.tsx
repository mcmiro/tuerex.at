import React, { useState } from 'react';
import clsx from 'clsx';
import { UI } from 'components';

const classesSchema = {
  base: 'flex justify-between items-center h-[72px] px-4 bg-primary-100 border-b border-black',
};

export interface NavigationProps {
  isActiveHamburger: boolean;
  menuItems: { name: string; url?: string | undefined }[];
  className?: string;
}

const Navigation = ({ menuItems, className }: NavigationProps) => {
  const [selectedMenuName, setSelectedMenuName] = useState<string>('');
  const navigationClasses = clsx([classesSchema.base, className]);

  return (
    <nav
      className={navigationClasses}
      onMouseLeave={() => setSelectedMenuName('')}
    >
      <UI.Logo />
      <UI.Menu items={menuItems} onHover={setSelectedMenuName} />
      <UI.MegaMenu selectedName={selectedMenuName} />
    </nav>
  );
};

export default Navigation;
