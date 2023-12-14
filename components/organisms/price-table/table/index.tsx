import React from 'react';
import PriceItem from 'models/prices';
import { UI } from 'components';
import { priceData } from 'mocks/price';

export interface TableContentProps {
  query: string;
}

const TableContent = ({ query }: TableContentProps) => {
  const filteredTableData = priceData.filter(
    (table: any) => table.title.toLowerCase() === query.toLowerCase()
  );

  return (
    <div>
      {filteredTableData.map((table: PriceItem, index: number) => {
        return (
          <div key={index} className="p-4 bg-white rounded-lg mt-8">
            <div className="flex gap-2">
              <div className="flex items-start mt-.5">
                <table.icon className="w-6 text-primary-500" />
              </div>
              <div>
                <UI.Typography variant="h5" className="font-bold">
                  {table.title}
                </UI.Typography>
                <UI.Typography variant="xs" className="leading-6">
                  {table.workingHours}
                </UI.Typography>
              </div>
            </div>
            <div className="mt-8">
              <UI.Typography variant="h5" className="font-bold">
                Preise
              </UI.Typography>
              <table className="w-full">
                <tbody>
                  {table.services.map((el: any, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-[#E2E8F0] h-[56px] text-lg"
                    >
                      <td>{el.service}</td>
                      <td>{el.price}€</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <UI.Typography variant="xs" className="text-primary-500 mt-12 mb-4">
              *Alle Preise verstehen Normalsituation
            </UI.Typography>
          </div>
        );
      })}
    </div>
  );
};

export default TableContent;
