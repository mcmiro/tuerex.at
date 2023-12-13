import React, { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'text' | 'outline' | 'contained';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonIconPosition = 'left' | 'right';

export const classesSchema = {
  base: 'relative z-0 overflow-hidden focus:outline-none transition ease-in-out duration-300 tracking-wide block',
  size: {
    xs: 'py-1 px-2 text-xs',
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
    xl: 'py-5 px-10 text-xl',
  },
  variant: {
    text: 'border-0 !px-0',
    outline: 'border border-solid rounded-lg',
    contained: 'rounded-lg',
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
  default: {
    text: '',
    outline: 'border-primary-700 text-primary-700 md:hover:bg-primary-50',
    contained:
      'bg-primary-500 md:hover:bg-primary-600 active:bg-primary-700 text-white',
  },
  light: {
    text: 'text-primary-500',
    outline:
      'text-gray-500 border-gray-500 md:hover:bg-inherit md:hover:text-gray-700',
    contained: 'bg-primary-50 text-primary-500 md:hover:bg-gray-100',
  },
  disabled: {
    text: 'text-gray-500 md:hover:bg-inherit cursor-not-allowed',
    outline:
      'text-gray-500 border-gray-500 md:hover:bg-inherit md:hover:text-gray-700 cursor-not-allowed',
    contained: 'bg-gray-300 text-white cursor-not-allowed',
  },
  error: {
    text: 'text-error-900 md:hover:bg-inherit',
    outline:
      'text-error-500 border-error-900 md:hover:bg-primary-50 md:hover:text-error-900',
    contained:
      'bg-error-500 text-white md:hover:bg-error-900 md:hover:text-white',
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
  light?: boolean;
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
  light,
  className,
  style,
  onClick,
  onMouseOver,
  onMouseLeave,
}: ButtonProps) => {
  const defaultClass = !disabled && !error && !light ? true : false;
  const buttonClasses = clsx([
    classesSchema.base,
    variant && classesSchema.variant[variant],
    size && !iconVisible && classesSchema.size[size],
    iconPosition && classesSchema.buttonPaddingIconPosition[iconPosition][size],
    defaultClass && variant && classesSchema.default[variant],
    disabled && variant && classesSchema.disabled[variant],
    error && variant && classesSchema.error[variant],
    light && variant && classesSchema.light[variant],
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
