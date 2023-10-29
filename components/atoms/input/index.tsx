import React, { useState } from 'react';
import clsx from 'clsx';
import Label from '../label';

type InputVariable = 'outline' | 'underline';
type InputSize = 'sm' | 'md' | 'lg';
type InputActionPosition = 'left' | 'right';

const classesSchema = {
  base: 'relative rounded-sm hover:border-gray-500 focus:border-black',
  inputBase: {
    base: 'w-full outline-none text-md font-normal bg-transparent',
    actionPosition: {
      left: {
        sm: 'pl-[48px]',
        md: 'pl-[60px]',
        lg: 'pl-[68px]',
      },
      right: {
        sm: 'pr-[48px]',
        md: 'pr-[60px]',
        lg: 'pr-[68px]',
      },
    },
  },
  variant: {
    outline: 'border hover:border-2 focus:border-2 disabled:border',
    underline: 'border-b hover:border-b-2  focus:border-b-2 disabled:border',
  },
  size: {
    sm: 'py-[9px] px-[16px]',
    md: 'py-[13px] px-[20px]',
    lg: 'py-[17px] px-[20px]',
  },
  color: {
    white: 'border-white',
    gray: 'border-gray-600',
  },
  icon: {
    base: 'absolute',
    position: {
      left: {
        sm: 'left-[16px]',
        md: 'left-[16px]',
        lg: 'left-[16px]',
      },
      right: {
        sm: 'right-[16px]',
        md: 'right-[16px]',
        lg: 'right-[16px]',
      },
    },
  },
  addon: {
    base: 'absolute top-0',
    variant: {
      default: 'bg-black text-white',
      error: 'bg-error-500 text-black',
      disabled: 'bg-gray-300 text-gray-500',
    },
    size: {
      sm: 'py-[9px] px-[12px]',
      md: 'py-[13px] px-[16px]',
      lg: 'py-[17px] px-[16px]',
    },
    position: {
      left: {
        sm: 'left-0',
        md: 'left-0',
        lg: 'left-0',
      },
      right: {
        sm: 'right-0',
        md: 'right-0',
        lg: 'right-0',
      },
    },
    disabled: 'cursor-not-allowed',
  },
  error: 'border-[3px] border-error-500 hover:border-error-500',
  disabled: 'border-gray-300 text-gray-300 pointer-events-none bg-white',
};

type InputColor = 'white' | 'gray';

export interface InputProps {
  id?: string;
  name: string;
  value?: string;
  type?: string;
  variant: InputVariable;
  size: InputSize;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  color?: InputColor;
  iconVisible?: boolean;
  addonVisible?: boolean;
  iconPosition?: InputActionPosition;
  addonPosition?: InputActionPosition;
  icon?: string;
  addon?: string;
  both?: boolean;
  label?: string;
  full?: boolean;
  className?: string;
  classNameWrapper?: string;
  classNameLabel?: string;
  classNameAddon?: string;
  addonDisabled?: boolean;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onInputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e?: any) => void;
  fieldRef?: any;
  control?: any;
}

const Input = ({
  id,
  name,
  value,
  variant = 'outline',
  size = 'md',
  placeholder,
  error,
  disabled,
  color,
  iconVisible,
  addonVisible,
  iconPosition,
  addonPosition,
  icon,
  addon,
  label,
  full,
  className,
  classNameWrapper,
  classNameLabel,
  classNameAddon,
  addonDisabled,
  onInputChange,
  onInputFocus,
  onInputBlur,
  onClick,
  fieldRef,
}: InputProps) => {
  const [content, setContent] = useState(value ?? '');

  React.useEffect(() => {
    value && setContent(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setContent(e.target.value);
    onInputChange && onInputChange(e);
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.persist();
    onInputFocus && onInputFocus(e);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.persist();
    onInputBlur && onInputBlur(e);
  };

  const inputBaseClasses = clsx([
    classesSchema.inputBase.base,
    iconPosition && classesSchema.inputBase.actionPosition[iconPosition][size],
    addonPosition &&
      classesSchema.inputBase.actionPosition[addonPosition][size],
    color && classesSchema.color[color],
    color && `text-${color}`,
  ]);

  const inputClasses = clsx([
    classesSchema.base,
    classesSchema.variant[variant],
    classesSchema.size[size],
    error && classesSchema.error,
    className,
  ]);

  const inputIconClasses = clsx([
    classesSchema.icon.base,
    iconPosition && classesSchema.icon.position[iconPosition][size],
  ]);

  const inputAddonClasses = clsx([
    classesSchema.addon.base,
    classesSchema.addon.size[size],
    !error && classesSchema.addon.variant.default,
    error && classesSchema.addon.variant.error,
    disabled && classesSchema.addon.variant.disabled,
    addonPosition && classesSchema.addon.position[addonPosition][size],
    classNameAddon && classNameAddon,
    addonDisabled && classesSchema.addon.disabled,
  ]);

  const iconLeft = iconVisible && iconPosition === 'left' && (
    <span className={inputIconClasses}>{icon}</span>
  );
  const iconRight = iconVisible && iconPosition === 'right' && (
    <span className={inputIconClasses}>{icon}</span>
  );
  const addonLeft = addonVisible && addonPosition === 'left' && (
    <span onClick={onClick} className={inputAddonClasses}>
      {addon}
    </span>
  );
  const addonRight = addonVisible && addonPosition === 'right' && (
    <span onClick={onClick} className={inputAddonClasses}>
      {addon}
    </span>
  );

  const inputWrapperClasses = clsx([
    'flex-col',
    full && 'w-full',
    classNameWrapper,
  ]);

  return (
    <div className={inputWrapperClasses}>
      {label && <Label content={label} className={classNameLabel} />}
      <div className={inputClasses}>
        {iconLeft}
        {addonLeft}
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          value={content}
          disabled={disabled}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className={inputBaseClasses}
          ref={fieldRef}
          autoComplete="off"
        />
        {iconRight}
        {addonRight}
      </div>
    </div>
  );
};

export default Input;
