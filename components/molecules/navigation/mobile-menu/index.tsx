import React from 'react';
import Link from 'next/link';
import { UI } from 'components';
import NavigationItem from 'models/navigation';
import { navigationData } from 'constants/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { contactData } from 'constants/contact';
import useSlack from 'hooks/use-slack';

export interface MobileMenuProps {
  onClick: () => void;
}

const MobileMenu = ({ onClick }: MobileMenuProps) => {
  const { getTimeStampNow, sendMessageToSlack } = useSlack();
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          onClick();
        }
      }}
      className="fixed z-30 top-0 left-0 w-full h-full bg-black bg-opacity-40 p-4"
    >
      <div className="bg-white rounded-2xl w-full">
        <div className="flex justify-end w-full px-4 pt-4">
          <XMarkIcon
            onClick={onClick}
            className="h-[36px] text-primary-950 cursor-pointer"
          />
        </div>
        <div className="w-full">
          <ul className="w-full pb-16 px-8">
            {navigationData.map((item: NavigationItem, index: number) => (
              <li key={index} className="text-primary-950">
                <Link href={item.url}>
                  <UI.Typography
                    variant="md"
                    className="!text-h4 pt-6 inline-block font-bold"
                  >
                    {item.title}
                  </UI.Typography>
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4">
            <a
              onClick={() =>
                sendMessageToSlack(
                  `New call was initiated. ${getTimeStampNow()}`
                )
              }
              href={`tel:${contactData.phone}`}
              className="w-full flex gap-4 items-center justify-center font-bold bg-primary-500 py-3 px-6 text-base rounded-lg text-white"
            >
              Jetzt anrufen
              <PhoneIcon className="w-6 h-6 text-white" />
            </a>
            <UI.Typography variant="sm" className="text-center pt-2 pb-8">
              00-24h erreichbar
            </UI.Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
