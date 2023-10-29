import React from 'react';
import clsx from 'clsx';

const classesSchema = {
  base: 'flex flex-col',
};

export interface TabPanelProps {
  children: React.ReactNode;
  className?: string;
}

const TabPanel = ({ children, className }: TabPanelProps) => {
  const tabPanelClasses = clsx([classesSchema.base, className]);

  return <div className={tabPanelClasses}>{children}</div>;
};

export default TabPanel;
