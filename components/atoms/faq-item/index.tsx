import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { UI } from 'components';

export interface FaqItemProps {
  index: number;
  title: string;
  content: string;
  isActive: boolean;
  onClick: (e: any) => void;
}

const FaqItem = ({
  index,
  title,
  content,
  isActive,
  onClick,
}: FaqItemProps) => {
  const [height, setHeight] = useState(0);

  const handleElementHeight = (e: any) => {
    const element = e.currentTarget.querySelector('.faq-item');
    if (element) {
      const newHeight = element.offsetHeight;
      setHeight(newHeight);
    }
    onClick(index);
  };

  return (
    <div
      onClick={(e) => handleElementHeight(e)}
      className={`cursor-pointer tracking-wider relative transition-all ease-in-out duration-300 px-4 border-t border-[#E2E8F0]`}
    >
      <div
        className={`flex flex-col justify-between items-center text-[24px] transition-top-right relative py-2`}
      >
        <div className="flex justify-between w-full text-[18px] font-bold py-4">
          {title}
          <PlusIcon
            className={`w-6 h-6 shrink-0 transition-all ease-in-out duration-300 ${
              isActive ? 'rotate-45' : 'rotate-0'
            }`}
          />
        </div>
        <div
          className="overflow-hidden transition-all ease-in-out duration-300"
          style={{ height: isActive ? height + 'px' : 0 }}
        >
          <div className={`faq-item py-8`}>
            <UI.Typography variant="lg">{content}</UI.Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
