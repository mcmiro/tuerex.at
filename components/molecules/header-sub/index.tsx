import React from 'react';
import { UI } from 'components';

export interface HeaderSubProps {
  title: string;
}

const HeaderSub = ({ title }: HeaderSubProps) => {
  return (
    <div className="bg-primary-500">
      <UI.Container className="py-20">
        <UI.Typography variant="h1" weight="bold" className="text-white">
          {title}
        </UI.Typography>
      </UI.Container>
    </div>
  );
};

export default HeaderSub;
