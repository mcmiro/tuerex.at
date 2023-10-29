import React, { useId } from 'react';
import clsx from 'clsx';

type RadioSize = 'sm' | 'md' | 'lg' | 'xl';

const classesSchema = {
  base: 'flex items-center',
  radio: {
    base: 'form-radio',
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
  },
  variant: {
    base: 'ring-1 ring-black text-black bg-white disabled:ring-gray-500 disabled:text-gray-500 disabled:event-pointer-none',
    white: 'ring-1 ring-white bg-black text-white',
    error: 'ring-1 ring-error-500 text-error-500 bg-white',
  },
  label: {
    base: 'ml-6 text-md text-black',
    disabled: 'ml-6 text-gray-500',
  },
};

export interface RadioProps {
  name: string;
  checked?: boolean;
  label?: string;
  size?: RadioSize;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: any) => void;
}

const Radio = ({
  name,
  checked,
  label,
  size = 'md',
  error,
  disabled,
  onChange,
  className,
}: RadioProps) => {
  const ID = useId();

  const radioClasses = clsx([classesSchema.base]);

  const radioElement = clsx([
    classesSchema.radio.base,
    classesSchema.radio.size[size!],
    classesSchema.variant.base,
    error && classesSchema.variant.error,
    className,
  ]);

  const radioLabel = clsx([
    !disabled && classesSchema.label.base,
    disabled && classesSchema.label.disabled,
  ]);

  return (
    <div className={radioClasses}>
      <input
        id={ID}
        type="radio"
        value=""
        name={name}
        className={radioElement}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={ID} className={radioLabel}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
