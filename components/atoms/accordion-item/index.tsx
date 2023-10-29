import React from 'react';
import clsx from 'clsx';
import Button from '../button';
import Typography from '../typography';
import Arrow from 'assets/icons/arrow-gallery-right.svg';
import Image from 'next/image';

export type TitleWeight =
  | 'extraThin'
  | 'thin'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold';
export type ContentAlignment = 'aligned' | 'indented';

const classesSchema = {
  base: 'py-[18px] w-full border-t border-black',
  button: '!py-0 !px-0 whitespace-nowrap w-full',
  contentWrapper: {
    base: 'overflow-hidden',
    inactive: 'h-0',
    active: 'h-[full]',
  },
  content: 'py-[32px] px-[16px]',
  contentAlignment: {
    aligned: '!py-[32px] !px-[16px]',
    indented: '!p-0',
  },
  icon: {
    base: 'h-[20px] w-[10px] transition duration-300 ease-in-out',
    active: 'transform rotate-90',
  },
  weight: {
    extraThin: '!font-[200]',
    thin: '!font-light',
    normal: '!font-normal',
    medium: '!font-medium',
    semibold: '!font-semibold',
    bold: '!font-bold',
  },
};

export interface AccordionItemProps {
  name: string;
  content: any;
  weight?: TitleWeight;
  contentAlignment?: ContentAlignment;
  isActive: boolean;
  className?: string;
  tabIsActiveClass?: string;
  onClick?: (_: any) => void;
}

const AccordionItem = ({
  name,
  content,
  isActive,
  weight,
  contentAlignment,
  className,
  onClick,
}: AccordionItemProps) => {
  const accordionItemClasses = clsx([classesSchema.base, className]);

  const contentAlignmentClasses = clsx([
    classesSchema.content,
    contentAlignment && classesSchema.contentAlignment[contentAlignment],
  ]);
  const accordionTitleClasses = clsx([
    classesSchema.button,
    weight ? classesSchema.weight[weight] : '!font-normal',
  ]);

  const accordionIconClasses = clsx([
    classesSchema.icon['base'],
    isActive && classesSchema.icon['active'],
    className,
  ]);

  const accordionContentClasses = clsx([
    classesSchema.contentWrapper['base'],
    isActive
      ? classesSchema.contentWrapper['active']
      : classesSchema.contentWrapper['inactive'],
    className,
  ]);

  return (
    <div className={accordionItemClasses}>
      <Button
        variant="text"
        size="md"
        iconVisible
        iconPosition="right"
        icon={
          <div className={accordionIconClasses}>
            <Image
              src={Arrow}
              sizes="100%"
              className={'relative w-auto h-full'}
              alt=""
            />
          </div>
        }
        className={accordionTitleClasses}
        onClick={onClick}
      >
        {name}
      </Button>
      <div className={accordionContentClasses}>
        <Typography
          variant="xs"
          className={contentAlignmentClasses}
          dangerouslySetInnerHTML={content}
        />
      </div>
    </div>
  );
};

export default AccordionItem;
