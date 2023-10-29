import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import ModalOverlay from '../modal-overlay';

const classesSchema = {
  base: 'fixed block top-0 right-0 bottom-0 left-0 outline-0 overflow-x-hidden overflow-y-auto z-50',
};

export interface ModalProps {
  isActive?: boolean;
  children?: React.ReactNode;
  className?: string;
  toggleModal?: () => void;
}

const ESC_KEY_NAME = 'Escape';

const Modal = ({
  isActive,
  children,
  className,
  toggleModal = () => {},
}: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<Element>();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalRootEl = document.querySelector('#modal-root');
    const modalRoot = modalRootEl || document.createElement('div');

    if (!modalRootEl) {
      modalRoot.setAttribute('id', 'modal-root');
      document.body.append(modalRoot);
    }

    setModalRoot(modalRoot);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;
      key === ESC_KEY_NAME && toggleModal;
    };

    if (isActive) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);

  useEffect(() => {
    const modalRootEl = document.querySelector('#modal-root');

    if (isActive) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-active');
    } else if (modalRootEl?.children.length === 0) {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-active');
    }
  }, [isActive]);

  const handleModalClose = (e: React.MouseEvent) => {
    const { target } = e;
    target && (target as Element).classList.contains('modal') && toggleModal;
  };

  const modalClasses = clsx([classesSchema.base, className]);

  return modalRoot
    ? createPortal(
        isActive ? (
          <>
            <div
              className={modalClasses}
              ref={modalRef}
              onClick={(e) => handleModalClose(e)}
            >
              {children}
            </div>
            <ModalOverlay toggleModal={toggleModal} />
          </>
        ) : null,
        modalRoot
      )
    : null;
};

export default Modal;
