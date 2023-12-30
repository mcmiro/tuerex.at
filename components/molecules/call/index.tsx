import React from 'react';
import { UI } from 'components';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { contactData } from 'content/contact';
import clsx from 'clsx';
import useSlack from 'hooks/use-slack';

type CallMode = 'dark' | 'light';

const classesSchema = {
  dark: 'text-white',
  light: 'text-black',
};

export interface CallProps {
  mode?: CallMode;
}

export const Call = ({ mode }: CallProps) => {
  const { getTimeStampNow, sendMessageToSlack } = useSlack();
  const callClasses = clsx([classesSchema[mode ? mode : 'light']]);

  return (
    <div className="w-full pt-12">
      <a
        onClick={() =>
          sendMessageToSlack(`New call was initiated. ${getTimeStampNow()}`)
        }
        href={`tel:${contactData.phone}`}
        className="w-full max-w-[300px] mx-auto flex gap-4 items-center justify-center font-bold bg-primary-500 py-3 px-6 text-base rounded-lg text-white"
      >
        Jetzt anrufen
        <PhoneIcon className="w-6 h-6 text-white" />
      </a>
      <UI.Typography variant="sm" className={`${callClasses} text-center pt-2`}>
        00-24h erreichbar
      </UI.Typography>
    </div>
  );
};

export default Call;
