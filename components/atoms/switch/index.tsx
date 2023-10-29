import React from 'react';
import clsx from 'clsx';

const classesSchema = {
  base: 'relative inline-block w-[44px] h-[24px]',
  input: 'opacity-0 w-0 h-0',
  slider:
    'absolute pointer top-0 right-0 bottom-0 left-0 bg-gray-100 border border-black rounded-3xl before:absolute before:w-[16px] before:h-[16px] before:rounded-full before:bg-black before:left-[4px] before:top-[3px] before:transition-all cursor-pointer',
  active: 'before:translate-x-[18px] !bg-black before:!bg-white',
};

export interface SwitchProps {
  name?: string;
  isToggle: boolean;
  className?: string;
  onToggle: (e?: any) => void;
}

const Switch = ({ name, isToggle, onToggle, className }: SwitchProps) => {
  const switchClasses = clsx([classesSchema.base, className]);

  const swiperClasses = clsx([
    classesSchema.slider,
    isToggle && classesSchema.active,
  ]);

  return (
    <label className={switchClasses}>
      <input
        name={name}
        type="checkbox"
        checked={isToggle}
        onChange={onToggle}
        className={classesSchema.input}
      />
      <span className={swiperClasses} />
    </label>
  );
};

export default Switch;
