import React, { useEffect, useState } from 'react';
import { UI } from 'components';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { priceData } from 'mocks/price';

export interface PriceTableProps {
  onClick: () => void;
}

const PriceTable = ({ onClick }: PriceTableProps) => {
  const [tableFilter, setTableFilter] = useState<string>('');

  useEffect(() => {
    setTableFilter(priceData[0].title);
  }, [priceData]);

  const handleFilter = (payload: string) => {
    setTableFilter(payload);
  };
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          onClick();
        }
      }}
      className="fixed z-30 top-0 left-0 w-full h-full bg-[#f5f5f5]"
    >
      <div className=" rounded-2xl w-full h-full overflow-auto">
        <div className="flex justify-end w-full px-4 pt-4">
          <XMarkIcon
            onClick={onClick}
            className="h-[36px] text-primary-950 cursor-pointer"
          />
        </div>
        <div className="w-full px-4">
          <UI.Typography variant="h5" align="center" className="font-bold mt-4">
            Schlüsseldienst Preise
          </UI.Typography>
          <UI.TableNavigation filter={tableFilter} onClick={handleFilter} />
          <UI.TableContent query={tableFilter} />
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
