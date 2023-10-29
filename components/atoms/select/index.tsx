import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Label from '../label';

type selectSize = 'sm' | 'md' | 'lg';

const classesSchema = {
  base: 'w-full border rounded-sm',
  size: {
    sm: 'py-[9px] px-[16px]',
    md: 'py-[13px] px-[20px]',
    lg: 'py-[18px] px-[20px]',
  },
};

type Option = string | number;

export interface SelectProps {
  name?: string;
  defaultValue?: string;
  size: selectSize;
  options: Option[];
  label?: string;
  className?: string;
  labelClasses?: string;
  onSelect: (e?: any) => void;
  onSetSelect?: (e: any) => void;
}

const Select = ({
  name,
  defaultValue,
  size = 'md',
  options = [],
  label,
  className,
  labelClasses,
  onSelect = () => {},
  onSetSelect = () => {},
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    undefined
  );
  const selectOptions = options?.map((option, index) => {
    return (
      <option key={index} value={option}>
        {option}
      </option>
    );
  });

  const handleSelectOption = (e: any) => {
    const value = e.target.value;
    onSetSelect(options.indexOf(value));
    onSelect(value);
    setSelectedOption(value);
  };

  useEffect(() => {
    const option = options.find((option) => option === defaultValue);
    setSelectedOption(option);
  }, []);

  useEffect(() => {
    const option = options.find((option) => option === defaultValue);
    setSelectedOption(defaultValue ? defaultValue : option);
  }, [defaultValue]);

  const selectClasses = clsx([
    classesSchema.base,
    classesSchema.size[size],
    className,
  ]);

  return (
    <div className="flex flex-col w-full">
      {label && <Label content={label} className={labelClasses} />}
      <select
        onChange={handleSelectOption}
        className={selectClasses}
        name={name}
        value={selectedOption}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default Select;
