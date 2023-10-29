import React, { useId } from 'react';
import clsx from 'clsx';

type CheckboxSize = 'sm' | 'md' | 'lg' | 'xl';

const classesSchema = {
  base: 'flex items-start',
  checkbox: {
    base: 'form-checkbox',
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
  },
  variant: {
    base: 'ring-1 ring-black text-black bg-primary-100 disabled:ring-gray-500 disabled:text-gray-500',
    error: 'ring-1 ring-error-500 text-error-500 bg-primary-100',
  },
};

export interface CheckboxProps {
  name: string;
  checked?: boolean;
  label?: any;
  size?: CheckboxSize;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  onCheck?: () => void;
}

const Checkbox = ({
  name,
  checked,
  label,
  size = 'md',
  error,
  disabled,
  className,
  onCheck,
}: CheckboxProps) => {
  const ID = useId();

  const checkboxClasses = clsx([classesSchema.base]);

  const checkboxElement = clsx([
    classesSchema.checkbox.base,
    classesSchema.checkbox.size[size],
    classesSchema.variant.base,
    error && classesSchema.variant.error,
    label && 'mt-1 rounded',
    className,
  ]);

  return (
    <label className={checkboxClasses}>
      <input
        id={ID}
        name={name}
        type="checkbox"
        className={checkboxElement}
        disabled={disabled}
        checked={checked}
        onChange={onCheck}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default Checkbox;
