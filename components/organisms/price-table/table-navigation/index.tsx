import React from 'react';
import { UI } from 'components';
import { priceData } from 'mocks/price';
import PriceItem from 'models/prices';

export interface TableNavigationProps {
  filter: string;
  onClick: (filter: string) => void;
}

const TableNavigation = ({ filter, onClick }: TableNavigationProps) => {
  return (
    <div className="flex mt-8 w-full rounded-lg overflow-hidden border border-primary-500">
      {priceData.map((button: PriceItem, index: number) => {
        return (
          <UI.Button
            key={index}
            variant={button.title === filter ? 'contained' : 'outline'}
            size="sm"
            className={`font-bold py-4 w-1/3 !rounded-none border-0 text-primary-950 ${
              index === 1 && 'border-x'
            }`}
            onClick={() => onClick(button.title)}
          >
            {button.title}
          </UI.Button>
        );
      })}
    </div>
  );
};

export default TableNavigation;
