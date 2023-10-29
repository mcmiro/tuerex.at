import React from 'react';
import clsx from 'clsx';

const classesSchema = {
  base: 'flex flex-col sm:flex-row',
};

export interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

const TabList = ({ children, className }: TabListProps) => {
  const tabListClasses = clsx([classesSchema.base, className]);

  return <div className={tabListClasses}>{children}</div>;
};

export default TabList;
