import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const classesSchema = {
  base: 'pt-4',
  item: 'pb-2 list-none text-gray-700',
};

export interface ItemProps {
  title: string;
  url: string;
}

export interface FooterColumnProps {
  items: ItemProps[];
  className?: string;
}

const FooterColumn = ({ items, className }: FooterColumnProps) => {
  const columnClasses = clsx([classesSchema.base, className]);
  const itemClasses = clsx([classesSchema.item]);
  return (
    <ul className={columnClasses}>
      {items.map((el: ItemProps, index: number) => {
        return (
          <li key={index} className={itemClasses}>
            <Link href={el.url}>{el.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterColumn;
