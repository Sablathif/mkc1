import React, { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // const handleClick = (index: number) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };

  const accordionItems: AccordionItem[] = [
    {
      title: 'Item 1',
      content: 'Content for item 1',
    },
    {
      title: 'Item 2',
      content: 'Content for item 2',
    },
    // Add more items as needed
  ];

  return (
    <div>
      {/* {items?.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleClick(index)}
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
          >
            {item.title}
          </button>
          {activeIndex === index && <div className="accordion-content">{item.content}</div>}
        </div>
      ))} */}

      <div>
      <h1>Accordion Example</h1>
      <Accordion items={accordionItems} />
    </div>
    </div>
  );
};

export default Accordion;