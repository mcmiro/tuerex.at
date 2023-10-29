import React from 'react';
import clsx from 'clsx';

type LabelPosition = 'left' | 'right';
type LabelWeight = 'normal' | 'semibold';

const classesSchema = {
  base: 'block text-md text-lg mb-1',
  position: {
    left: 'text-left',
    right: 'text-right',
  },
  weight: {
    normal: 'font-normal',
    semibold: 'font-semibold',
  },
};

export interface LabelProps {
  content: string;
  position?: LabelPosition;
  weight?: LabelWeight;
  className?: string;
}

const Label = ({ content, position, weight, className }: LabelProps) => {
  const labelClasses = clsx([
    classesSchema.base,
    position && classesSchema.position[position],
    weight && classesSchema.weight[weight],
    className,
  ]);

  return <label className={labelClasses}>{content}</label>;
};

export default Label;
