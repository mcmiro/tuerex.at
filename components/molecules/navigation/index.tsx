import React, { useState } from 'react';
import clsx from 'clsx';
import { UI } from 'components';

const classesSchema = {
  base: 'sticky top-0 left-0 flex justify-between items-center max-h-[72px] py-[26px] px-[16px] md:px-[32px] xl:px-[72px] bg-primary-100 border-b border-black z-30',
};

export interface NavigationProps {
  isActiveHamburger: boolean;
  menuItems: { name: string; url?: string | undefined }[];
  className?: string;
  toggleCart: () => void;
  toggleConsultationPopup: () => void;
  toggleMenu: (e?: any) => void;
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
