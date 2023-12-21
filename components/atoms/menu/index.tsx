import React from 'react';
import clsx from 'clsx';
import MenuItem from '../menu-item';

const classesSchema = {
  base: 'flex items-center',
  item: 'hidden md:flex mr-10 last:mr-0',
};

export interface MenuProps {
  selectedName?: string;
  items: { title: string; url: string }[];
}

const Menu = ({ items }: MenuProps) => {
  const menuItems = items.map((menuItem, index) => (
    <MenuItem key={index} item={menuItem} className={classesSchema.item} />
  ));

  const menuClasses = clsx([classesSchema.base]);
  return <ul className={menuClasses}>{menuItems}</ul>;
};

export default Menu;
