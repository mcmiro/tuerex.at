import React, { useEffect, useState } from 'react';
import AvailabilityItem from 'models/availability';
import { availabilityData } from 'content/availability';
import clsx from 'clsx';
import useSlackStore from 'store/slack-store';
import useVisitor from 'hooks/use-visitor';
import useSlack from 'hooks/use-slack';

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
  const { sendMessageToSlack } = useSlack();
  const { slackValue } = useSlackStore();
  const { visitorInformation } = useVisitor();

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
      }, 1000);
    };
    if (!slackValue) {
      handleStatus();
    } else {
      setStatus(availabilityData[2]);
    }
  }, []);

  useEffect(() => {
    if (!slackValue) {
      visitorInformation &&
        status &&
        sendMessageToSlack(JSON.stringify(visitorInformation));
    }
  }, [status]);

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
