import React from 'react';
import clsx from 'clsx';

const classesSchema = {
  base: 'relative flex flex-col w-full cursor-pointer',
  center: 'justify-center items-center mx-auto',
};

export interface ModalDialogProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  onClick?: (e?: any) => void;
}

const ModalDialog = ({
  children,
  className,
  center,
  onClick,
}: ModalDialogProps) => {
  const modalDialogClasses = clsx([
    classesSchema.base,
    center && classesSchema.center,
    className,
  ]);

  return (
    <div onClick={onClick} className={modalDialogClasses}>
      {children}
    </div>
  );
};

export default ModalDialog;
