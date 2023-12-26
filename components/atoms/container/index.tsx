import React from 'react';
import clsx from 'clsx';

type WidthMode = 'full' | 'contained';

const classesSchema = {
  base: 'mx-auto px-4',
  full: 'w-full',
  contained: 'container',
};

export interface ContainerProps {
  widthMode?: WidthMode;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ widthMode, children, className, id }: ContainerProps) => {
  const widthProp = widthMode ? classesSchema[widthMode] : 'container';
  const containerClasses = clsx([classesSchema.base, widthProp, className]);

  return (
    <div className={containerClasses} id={id}>
      {children}
    </div>
  );
};

export default Container;
