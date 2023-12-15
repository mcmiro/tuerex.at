import React from 'react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/solid';

const classesSchema = {
  base: 'fixed z-30 top-0 left-0 w-full h-full bg-[#f5f5f5]',
};

export interface ModalDialogProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  onClick?: (e?: any) => void;
}

const ModalDialog = ({ children, className, onClick }: ModalDialogProps) => {
  const modalDialogClasses = clsx([classesSchema.base, className]);

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          onClick;
        }
      }}
      className={modalDialogClasses}
    >
      <div className=" rounded-2xl w-full h-full overflow-auto">
        <div className="flex justify-end w-full px-4 pt-4">
          <XMarkIcon
            onClick={onClick}
            className="h-[36px] text-primary-950 cursor-pointer"
          />
        </div>
        <div className="w-full px-4">{children}</div>
      </div>
    </div>
  );
};

export default ModalDialog;
