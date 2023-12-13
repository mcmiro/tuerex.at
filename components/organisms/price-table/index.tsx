import React from 'react';
import { UI } from 'components';
import { PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { contactData } from 'mocks/contact';
import Link from 'next/link';

export interface PriceTableProps {
  onClick: () => void;
}

const PriceTable = ({ onClick }: PriceTableProps) => {
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          onClick();
        }
      }}
      className="absolute z-30 top-0 left-0 w-full h-full bg-black bg-opacity-40 p-4"
    >
      <div className="bg-white rounded-2xl w-full">
        <div className="flex justify-end w-full px-4 pt-4">
          <XMarkIcon
            onClick={onClick}
            className="h-[36px] text-primary-950 cursor-pointer"
          />
        </div>
        <div className="w-full">
          <div className="px-4">
            <a
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

export default PriceTable;
