import React from 'react';
import { UI } from 'components';

export type ShiftProps = {
  service: string;
  description: string;
  price: number | string;
};

export type TableContentSingleServiceProps = {
  service: {
    headline: string;
    subline: string;
    description: string;
    shifts: ShiftProps[];
  };
};

const TableContentSingleService = ({
  service,
}: TableContentSingleServiceProps) => {
  return (
    <div>
      <div className="p-4 bg-white rounded-lg mt-8 shadow-lg">
        <div className="flex gap-2 pt-2 pb-8">
          <div>
            <UI.Typography variant="h3" className="!text-h5 font-bold">
              {service.headline}
            </UI.Typography>
            <span className="text-[14px] mb-4 text-gray-700 leading-5">
              {service.subline}
            </span>
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
              {service.shifts.map((el, index: number) => (
                <tr
                  key={index}
                  className="border-b border-[#E2E8F0] h-[56px] text-lg"
                >
                  <td className="flex flex-col gap-2">
                    <span className="font-semibold pt-4 leading-6">
                      {el.service}
                    </span>
                    <span className="text-[14px] mb-4 text-gray-700 leading-5">
                      {el.description}
                    </span>
                  </td>
                  <td className="align-top pt-3 font-semibold w-16 text-right">
                    <var className="not-italic">{el.price}€</var>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <UI.Typography variant="xs" className="text-primary-500 mt-6 mb-4">
          {service.description}
        </UI.Typography>
      </div>
    </div>
  );
};

export default TableContentSingleService;
