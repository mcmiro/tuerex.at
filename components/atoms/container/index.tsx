import React from 'react';
import clsx from 'clsx';

const classesSchema = {
  base: 'container mx-auto px-4',
};

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  const containerClasses = clsx([classesSchema.base, className]);

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
