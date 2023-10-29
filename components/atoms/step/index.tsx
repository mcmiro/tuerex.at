import React from 'react';
import clsx from 'clsx';

const classesSchema = {
  base: 'flex justify-center items-center border border-white rounded-full !w-[24px] h-6',
  active: 'border-2 bg-gray-800',
  checked: 'w-3 h-3 bg-white rounded-full',
};

export interface StepProps {
  active?: boolean;
  checked?: boolean;
  className?: string;
}

const Step = ({ active, checked, className }: StepProps) => {
  const stepClasses = clsx([
    classesSchema.base,
    active && classesSchema.active,
    className,
  ]);

  const activeClasses = clsx([checked && classesSchema.checked]);

  return (
    <div className={stepClasses}>
      <div className={activeClasses}></div>
    </div>
  );
};

export default Step;
