import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const classesSchema = {
  base: 'text-h6 font-bold list-none hover:underline hover:decoration-3 hover:underline-offset-8',
};

export interface MenuItemProps {
  item: { title: string; url: string };
  className?: string;
}

const MenuItem = ({ item, className }: MenuItemProps) => {
  const menuItemClasses = clsx([classesSchema.base, className]);
  return (
    <li className={menuItemClasses}>
      <Link href={item.url}>{item.title}</Link>
    </li>
  );
};

export default MenuItem;
