import React from 'react';
import clsx from 'clsx';
import MenuItem from '../menu-item';

const classesSchema = {
  base: 'flex items-center',
  item: 'hidden md:flex mr-6 last:mr-0',
};

export interface MenuProps {
  selectedName?: string;
  items: { name: string; url?: string | undefined }[];
  onHover: (e?: any) => void;
}

const Menu = ({ items, onHover }: MenuProps) => {
  const menuItems = items.map((menuItem, index) => (
    <MenuItem
      key={index}
      item={menuItem}
      className={classesSchema.item}
      onHover={onHover}
    />
  ));

  const menuClasses = clsx([classesSchema.base]);
  return <ul className={menuClasses}>{menuItems}</ul>;
};

export default Menu;
