import React, { useId, useState } from 'react';
import clsx from 'clsx';
import Label from '../label';

type TextareaVariant = 'outline' | 'underline';

const classesSchema = {
  base: 'w-full py-[10px] px-[16px] text-md outline-none',
  variant: {
    outline: 'border hover:border-2 focus:border-2 disabled:border',
    underline: 'border-b hover:border-b-2  focus:border-b-2 disabled:border',
  },
};

export interface TextareaProps {
  variant: TextareaVariant;
  value?: string;
  row?: number;
  placeholder: string;
  error?: string;
  name?: string;
  label?: string;
  className?: string;
  classNameLabel?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  fieldRef?: any;
}

const Textarea = ({
  variant = 'outline',
  value,
  row = 4,
  placeholder,
  name,
  label,
  className,
  classNameLabel,
  onInputChange,
  fieldRef,
}: TextareaProps) => {
  const ID = useId();
  const [content, setContent] = useState(value ?? '');

  React.useEffect(() => {
    value && setContent(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.persist();
    setContent(e.target.value);
    onInputChange && onInputChange(e);
  };

  const textareaClasses = clsx([
    classesSchema.base,
    classesSchema.variant[variant],
    className,
  ]);

  return (
    <>
      {label && <Label content={label} className={classNameLabel} />}
      <textarea
        id={ID}
        name={name}
        rows={row}
        cols={20}
        placeholder={placeholder}
        value={content}
        onChange={(e) => handleInputChange(e)}
        className={textareaClasses}
        ref={fieldRef}
      />
    </>
  );
};

export default Textarea;
