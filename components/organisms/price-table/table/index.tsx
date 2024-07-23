import React from 'react';
import PriceItem from 'models/prices';
import { UI } from 'components';
import { priceData } from 'constants/price';
import Link from 'next/link';

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
          <div key={index} className="p-4 bg-white rounded-lg mt-8 shadow-lg">
            <div className="flex gap-2 pt-2 pb-8">
              <div className="flex items-start mt-.5">
                <table.icon className="w-6 text-primary-500" />
              </div>
              <div>
                <UI.Typography variant="h3" className="!text-h5 font-bold">
                  {table.title}
                </UI.Typography>
              </div>
            </div>
            <div className="mt-4">
              <table className="w-full">
                <thead>
                  <tr className="text-xl border-b border-[#E2E8F0]">
                    <th className="text-left pb-4">Leistung</th>
                    <th>Preis</th>
                  </tr>
                </thead>
                <tbody>
                  {table.services.map((el: any, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-[#E2E8F0] h-[56px] text-lg"
                    >
                      <td className="flex flex-col gap-2">
                        <span className="font-semibold pt-4 leading-6">
                          {el.link ? (
                            <Link href={el.link} className="underline">
                              {el.service}
                            </Link>
                          ) : (
                            el.service
                          )}
                        </span>
                        <span
                          className="text-[14px] mb-4 text-gray-700 leading-5"
                          dangerouslySetInnerHTML={{ __html: el.description }}
                        ></span>
                      </td>
                      <td className="align-top pt-3 font-semibold w-16 text-right">
                        {typeof el.price === 'number'
                          ? el.price + table.addonPrice
                          : el.price}
                        €
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <UI.Typography variant="xs" className="text-primary-500 mt-6 mb-4">
              *Fixpreise gelten nur sofern die Angaben des Kunden beim Antreffen
              stimmen und die übliche Arbeitszeit für die jeweilige Leistung
              nicht überschritten wird. Bei Mehraufwand informieren wir vorab
              über mögliche Preisänderungen.
            </UI.Typography>
          </div>
        );
      })}
    </div>
  );
};

export default TableContent;
