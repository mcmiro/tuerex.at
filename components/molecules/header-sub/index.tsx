import React, { ReactNode } from 'react';
import { UI } from 'components';

export interface HeaderSubProps {
  title: string;
  children?: ReactNode;
}

const HeaderSub = ({ title, children }: HeaderSubProps) => {
  return (
    <div className="bg-primary-500">
      <UI.Container className="py-20">
        <UI.Typography variant="h1" weight="bold" className="text-white">
          {title}
        </UI.Typography>
        {children && children}
      </UI.Container>
    </div>
  );
};

export default HeaderSub;
