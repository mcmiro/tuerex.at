import React from 'react';
import { UI } from 'components';
import { priceData } from 'constants/price';
import PriceItem from 'models/prices';

export interface TableNavigationProps {
  filter: string;
  onClick: (filter: string) => void;
}

const TableNavigation = ({ filter, onClick }: TableNavigationProps) => {
  return (
    <div>
      {/* Nav Desktop */}
      <div className="hidden md:flex mt-8 w-full rounded-lg overflow-hidden border border-primary-500">
        {priceData.map((button: PriceItem, index: number) => {
          return (
            <UI.Button
              key={index}
              variant={button.title === filter ? 'contained' : 'outline'}
              size="sm"
              className={`font-bold py-4 w-1/3 !rounded-none border-0 text-primary-950 ${
                index + 1 < priceData.length && 'border-r'
              }`}
              onClick={() => onClick(button.title)}
            >
              {button.title}
              <span
                className={`block mt-1 font-normal text-[12px] ${
                  button.title === filter ? 'text-white' : 'text-primary-500'
                }`}
              >
                {button.workingHours}
              </span>
            </UI.Button>
          );
        })}
      </div>
      {/* Nav Mobile */}
      <div className="grid grid-cols-2 md:hidden mt-8 w-full rounded-lg overflow-hidden border border-primary-500 bg-transparent">
        {priceData.map((button: PriceItem, index: number) => {
          return (
            <button
              key={index}
              className={`font-bold p-2 text-[14px] rounded-none text-primary-950 w-full ${
                index % 2 !== 1 ? 'border-r border-primary-500' : ''
              }
							${button.title === filter ? 'bg-primary-500 text-white' : 'bg-white'}
							${index < priceData.length / 2 ? 'border-b border-primary-500' : ''}
							`}
              onClick={() => onClick(button.title)}
            >
              {button.title}
              <span
                className={`block font-normal text-[12px] ${
                  button.title === filter ? 'text-white' : 'text-primary-500'
                }`}
              >
                {button.workingHours}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TableNavigation;
