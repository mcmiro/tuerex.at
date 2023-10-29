import React from 'react';
import clsx from 'clsx';
import { Down, Up } from '@icon-park/react';
import Typography from '../typography';

const classesSchema = {
  main: 'border border-black rounded-[2px] hover:border-[3px] hover:border-gray-500',
  base: 'relative flex flex-col py-[16px] px-[16px] border-black',
  variants: {
    outline: 'bg-black text-white',
    contained: 'bg-primary-100 text-black',
  },
  hide: 'hidden',
  opened: 'flex flex-col',
  option: 'w-full py-[16px] px-[16px] border-b border-black last:border-0',
  icon: 'absolute top-1/2 transform -translate-y-1/2 right-[8px]',
};

type DropdownVariant = keyof typeof classesSchema.variants;

export interface DropdownProps {
  role?: string;
  isActive: boolean;
  selected: string;
  options: string[];
  variant: DropdownVariant;
  className?: string;
  wrapperClassName?: string;
  toggleOpen?: (e?: any) => void;
  onSelectOption?: (e?: any) => void;
}

const Dropdown = ({
  role,
  isActive,
  selected,
  options,
  variant,
  className,
  wrapperClassName,
  toggleOpen = () => {},
  onSelectOption = () => {},
}: DropdownProps) => {
  const dropdownOptionsClasses = clsx([
    classesSchema.option,
    isActive ? classesSchema.opened : classesSchema.hide,
  ]);

  const handleSetOption = (option: string) => {
    onSelectOption(option);
    toggleOpen();
  };

  const dropdownOptions = options.map((option, index) => {
    return (
      <div
        key={index}
        className={dropdownOptionsClasses}
        onClick={() => handleSetOption(option)}
      >
        <Typography variant="md">{option}</Typography>
      </div>
    );
  });

  const dropdownClasses = clsx([
    classesSchema.base,
    isActive && '!bg-black !text-white',
    isActive && 'border-b',
    isActive && 'border-[3px]',
    variant && classesSchema.variants[variant],
    className,
  ]);

  return (
    <div
      role={role}
      className={`${classesSchema.main} ${wrapperClassName} ${
        isActive && '!border-black'
      }`}
    >
      <div className={dropdownClasses} onClick={toggleOpen}>
        <Typography variant="md">{selected}</Typography>
        {isActive ? (
          <Up theme="outline" size="24" className={classesSchema.icon} />
        ) : (
          <Down theme="outline" size="24" className={classesSchema.icon} />
        )}
      </div>
      {dropdownOptions}
    </div>
  );
};

export default Dropdown;
