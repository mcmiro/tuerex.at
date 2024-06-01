import React from 'react';
import clsx from 'clsx';

type WidthMode = 'full' | 'contained';

const classesSchema = {
  base: 'mx-auto px-4',
  full: 'w-full !px-0',
  contained: 'container px-4',
};

export interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  widthMode?: WidthMode;
  className?: string;
  element?: 'main' | 'section' | 'div';
}

const Container = ({
  widthMode,
  children,
  className,
  id,
  element,
}: ContainerProps) => {
  const widthProp = widthMode ? classesSchema[widthMode] : 'container';
  const containerClasses = clsx([classesSchema.base, widthProp, className]);

  const Element = element ? element : 'div';

  return (
    <Element className={containerClasses} id={id}>
      {children}
    </Element>
  );
};

export default Container;
