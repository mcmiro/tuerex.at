import React from 'react';
import { UI } from 'components';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { contactData } from 'mocks/contact';
import clsx from 'clsx';

type CallMode = 'dark' | 'light';

const classesSchema = {
  dark: 'text-white',
  light: 'text-black',
};

export interface CallProps {
  mode?: CallMode;
}

export const Call = ({ mode }: CallProps) => {
  const callClasses = clsx([classesSchema[mode ? mode : 'light']]);

  return (
    <div className="w-full pt-12">
      <a
        href={`tel:${contactData.phone}`}
        className="w-full flex gap-4 items-center justify-center font-bold bg-primary-500 py-3 px-6 text-base rounded-lg text-white"
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
