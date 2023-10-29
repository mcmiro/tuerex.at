import React from 'react';
import clsx from 'clsx';

const classesSchema = {
  base: 'fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-30',
};

export interface ModalOverlayProps<Type> {
  className?: string;
  toggleModal?: (e: Type) => void;
}

const ModalOverlay = ({ className }: ModalOverlayProps<unknown>) => {
  const modalOverflowClasses = clsx([classesSchema.base, className]);

  return <div className={modalOverflowClasses}></div>;
};

export default ModalOverlay;
