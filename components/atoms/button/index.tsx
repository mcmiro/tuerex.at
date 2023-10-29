import React, { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'text' | 'outline' | 'contained';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonIconPosition = 'left' | 'right';

export const classesSchema = {
  base: 'relative z-0 overflow-hidden font-bold focus:outline-none transition ease-in-out duration-300 inline-flex items-center',
  size: {
    xs: 'py-1 px-2',
    sm: 'py-2 px-4',
    md: 'py-3 px-6',
    lg: 'py-4 px-8',
    xl: 'py-5 px-8',
  },
  variant: {
    text: 'border-0',
    outline:
      'border border-solid border-black bg-white rounded-sm hover:bg-black hover:text-white',
    contained: 'bg-black hover:bg-ash',
  },
  buttonPaddingIconPosition: {
    left: {
      xs: 'py-1 pr-2 pl-8',
      sm: 'py-2 pr-4 pl-10',
      md: 'py-3 pr-6 pl-12',
      lg: 'py-4 pr-8 pl-14',
      xl: 'py-5 pr-8 pl-16',
    },
    right: {
      xs: 'py-1 pl-2 pr-8',
      sm: 'py-2 pl-4 pr-10',
      md: 'py-3 pl-6 pr-12',
      lg: 'py-4 pl-8 pr-14',
      xl: 'py-5 pl-8 pr-16',
    },
  },
  iconPosition: {
    left: {
      xs: 'left-1',
      sm: 'left-2',
      md: 'left-4',
      lg: 'left-4',
      xl: 'left-6',
    },
    right: {
      xs: 'right-1',
      sm: 'right-2',
      md: 'right-4',
      lg: 'right-4',
      xl: 'right-6',
    },
  },
  disabled: {
    text: 'text-gray-500 hover:bg-inherit',
    outline:
      'text-gray-500 border-gray-500 hover:bg-inherit hover:text-gray-500',
    contained: 'bg-gray-500 text-white hover:bg-gray-500 hover:text-white',
  },
  error: {
    text: 'text-error-900 hover:bg-inherit',
    outline:
      'text-error-900 border-gray-500 hover:bg-inherit hover:text-error-900',
    contained: 'bg-error-900 text-white hover:bg-error-900 hover:text-white',
  },
};

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconVisible?: boolean;
  iconPosition?: ButtonIconPosition;
  icon?: any;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  style?: any;
  onClick?: (e?: any) => void;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

const Button = ({
  children,
  variant,
  size = 'md',
  iconVisible,
  iconPosition,
  icon,
  error,
  disabled,
  className,
  style,
  onClick,
  onMouseOver,
  onMouseLeave,
}: ButtonProps) => {
  const buttonClasses = clsx([
    classesSchema.base,
    variant && classesSchema.variant[variant],
    size && !iconVisible && classesSchema.size[size],
    iconPosition && classesSchema.buttonPaddingIconPosition[iconPosition][size],
    disabled && variant && classesSchema.disabled[variant],
    error && variant && classesSchema.error[variant],
    className,
  ]);

  const buttonIconClasses = clsx([
    'absolute',
    iconPosition && classesSchema.iconPosition[iconPosition][size],
  ]);

  const iconLeft = iconVisible && iconPosition === 'left' && (
    <span className={buttonIconClasses}>{icon}</span>
  );
  const iconRight = iconVisible && iconPosition === 'right' && (
    <span className={buttonIconClasses}>{icon}</span>
  );

  return (
    <button
      role="button"
      className={buttonClasses}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      style={style}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;
