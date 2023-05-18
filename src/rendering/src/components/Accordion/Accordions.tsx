import React, { useState } from 'react';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faPlus,
  faMinus,
  faCircle,
  faStar,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

type AccordionCardItem = {
  title: string;
  content: string;
  icon: IconDefinition;
};

type AccordionCardProps = {
  items: AccordionCardItem[];
};

const items = [
  {
    title: 'First Header',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: faHeart,
  },
  {
    title: 'Second Header',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: faStar,
  },
  {
    title: 'Third Header',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: faCircle,
  },
  // Add more items as needed
];

const AccordionCard: NextPage<AccordionCardProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="accordion-wrapper section grey-section">
      <div className="container">
        <h2 className="title title-center">Accordion</h2>
        <div className="accordion accordion-background">
          {items.map((item, index) => (
            <div
              className={`accordion-item ${activeIndex === index ? 'expanded' : ''}`}
              key={index}
            >
              <div className="card-header">
                <FontAwesomeIcon icon={item.icon} />
                <button onClick={() => handleClick(index)}>
                  {item.title}
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faMinus : faPlus}
                    className="accordion-icon"
                  />
                </button>
              </div>
              {activeIndex === index && (
                <div className="card-body">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Accordions: NextPage = () => {
  return <AccordionCard items={items} />;
};

export const Default = Accordions;
