import React from 'react';
import clsx from 'clsx';

const classesSchema = {
  base: 'flex items-center justify-center w-[36px] h-[36px] bg-primary-500 text-white rounded-lg',
};

export interface IconProps {
  icon: React.ElementType;
  className?: string;
}

const Icon = ({ icon: Icon, className }: IconProps) => {
  const iconClasses = clsx([classesSchema.base, className]);

  return (
    <div className={iconClasses}>
      <Icon className="w-5" />
    </div>
  );
};

export default Icon;
