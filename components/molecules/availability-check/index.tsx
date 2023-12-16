import React, { useEffect, useState } from 'react';
import AvailabilityItem from 'models/availability';
import { availabilityData } from 'mocks/availability';
import clsx from 'clsx';

type StatusVariant = 'error' | 'pending' | 'success';

const classesSchema = {
  base: 'flex gap-2 items-center',
  badge: {
    error: 'bg-red-400',
    pending: 'bg-orange-400',
    success: 'bg-green-400',
  },
  text: {
    error: 'text-red-400',
    pending: 'text-orange-400',
    success: 'text-green-400',
  },
};

const AvailabilityCheck = () => {
  const [status, setStatus] = useState<AvailabilityItem>(availabilityData[1]);

  const badgeClasses = clsx([
    classesSchema.badge[status.status as StatusVariant],
  ]);

  const textClasses = clsx([
    classesSchema.text[status.status as StatusVariant],
  ]);

  useEffect(() => {
    const handleStatus = async (): Promise<void> => {
      setTimeout(() => {
        setStatus(availabilityData[2]);
      }, 2000);
    };

    handleStatus();
  }, []);

  return (
    <div>
      {status && (
        <div className={classesSchema.base}>
          <span className="relative flex h-3 w-3">
            <span
              className={`${badgeClasses} animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
            ></span>
            <span
              className={`${badgeClasses} relative inline-flex rounded-full h-3 w-3`}
            ></span>
          </span>
          <p className={`${textClasses} text-sm`}>{status.title}</p>
        </div>
      )}
    </div>
  );
};

export default AvailabilityCheck;
