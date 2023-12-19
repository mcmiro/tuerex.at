import React, { useEffect, useState } from 'react';
import AvailabilityItem from 'models/availability';
import { availabilityData } from 'content/availability';
import clsx from 'clsx';
import useSlackStore from 'store/slack-store';

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
  const { slackValue, updateSlackValue } = useSlackStore();

  const sendMessageToSlack = async () => {
    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: 'Your message goes here',
        }),
      });
      const result = await response.json();
      if (result.success) {
        updateSlackValue(true);
      }
    } catch (error) {
      console.error('Error sending message to Slack:', error);
    }
  };

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

  useEffect(() => {
    if (!slackValue) {
      sendMessageToSlack();
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
