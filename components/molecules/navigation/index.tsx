import React, { useState } from 'react';
import clsx from 'clsx';
import { UI } from 'components';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { contactData } from 'constants/contact';
import { navigationData } from 'constants/navigation';
import useSlack from 'hooks/use-slack';

const classesSchema = {
  base: 'border-b border-[#E2E8F0]',
  container: 'flex justify-between items-center h-[72px] px-4 bg-white',
};

export interface NavigationProps {
  isActiveHamburger: boolean;
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const { getTimeStampNow, sendMessageToSlack } = useSlack();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navigationClasses = clsx([classesSchema.base, className]);
  const containerClasses = clsx([classesSchema.container]);

  return (
    <nav className={navigationClasses}>
      <UI.Container className={containerClasses}>
        <UI.Logo />
        {/* Desktop Menu START */}
        <div className="hidden md:flex items-center justify-end w-full gap-10">
          <UI.Menu items={navigationData} />
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-primary-500 cursor-pointer">
            <a
              onClick={() =>
                sendMessageToSlack(
                  `New call was initiated. ${getTimeStampNow()}`
                )
              }
              href={`tel:${contactData.phone}`}
            >
              <PhoneIcon className="h-[24px] text-white" />
            </a>
          </div>
        </div>
        {/* Desktop Menu END */}
        {/* Mobile Menu START */}
        <div className="flex md:hidden items-center gap-4">
          <div
            onClick={() =>
              sendMessageToSlack(`New call was initiated. ${getTimeStampNow()}`)
            }
            className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-primary-500 cursor-pointer"
          >
            <a href={`tel:${contactData.phone}`}>
              <PhoneIcon className="h-[24px] text-white" />
            </a>
          </div>
          <UI.Button size="xs" onClick={() => setMobileMenuOpen(true)}>
            <Bars2Icon className="w-[48px] text-primary-900" />
          </UI.Button>
        </div>
        {/* Mobile Menu END */}
        {mobileMenuOpen && (
          <UI.MobileMenu onClick={() => setMobileMenuOpen(false)} />
        )}
      </UI.Container>
    </nav>
  );
};

export default Navigation;
