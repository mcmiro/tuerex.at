import React, { useEffect, useState } from 'react';
import { UI } from 'components';
import { priceData } from 'content/price';

const PriceTable = () => {
  const [tableFilter, setTableFilter] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    if (day === 6 || day === 7) {
      setTableFilter(priceData[3].title);
    } else if (hour >= 5 && hour < 17) {
      setTableFilter(priceData[0].title);
    } else if (hour >= 17 && hour < 21) {
      setTableFilter(priceData[1].title);
    } else if ((hour >= 0 && hour < 5) || hour >= 21) {
      setTableFilter(priceData[2].title);
    } else {
      setTableFilter(priceData[0].title);
    }
  }, [priceData]);

  const handleFilter = (payload: string) => {
    setTableFilter(payload);
  };

  return (
    <div>
      <UI.TableNavigation filter={tableFilter} onClick={handleFilter} />
      <UI.TableContent query={tableFilter} />
      <UI.Call />
    </div>
  );
};

export default PriceTable;
