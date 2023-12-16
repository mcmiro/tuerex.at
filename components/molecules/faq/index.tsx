import React, { useState } from 'react';
import { UI } from 'components';

interface FaqItemProps {
  title: string;
  content: string;
}

export interface FaqProps {
  items: FaqItemProps[];
}

const Faq = ({ items }: FaqProps) => {
  const [faqIsActive, setFaqIsActive] = useState(-1);

  const toggleFaq = (payload: number) => {
    if (payload === faqIsActive) {
      setFaqIsActive(-1);
    } else {
      setFaqIsActive(payload);
    }
  };

  return (
    <div>
      {items.map((item: FaqItemProps, index: number) => (
        <div key={index}>
          <UI.FaqItem
            index={index}
            title={item.title}
            content={item.content}
            isActive={index === faqIsActive ? true : false}
            onClick={toggleFaq}
          />
        </div>
      ))}
    </div>
  );
};

export default Faq;
