import React from 'react';
import clsx from 'clsx';
import Button from '../button';

const classesSchema = {
  base: 'text-gray-500 !font-normal pb-[16px] !px-0 whitespace-nowrap',
  active: '!text-black border-b-4 border-black !pb-[12px]',
};

export interface TabItemProps {
  name: string;
  isActive?: boolean;
  className?: string;
  tabIsActiveClass?: string;
  onSelect?: (name: string) => void;
}

const TabItem = ({
  name,
  isActive,
  className,
  tabIsActiveClass,
  onSelect = () => {},
}: TabItemProps) => {
  const tabItemClasses = clsx([
    classesSchema.base,
    isActive && classesSchema.active,
    tabIsActiveClass && isActive && tabIsActiveClass,
    className,
  ]);

  return (
    <Button
      variant="text"
      size="md"
      color="inherit"
      className={tabItemClasses}
      onClick={onSelect}
    >
      {name}
    </Button>
  );
};

export default TabItem;
