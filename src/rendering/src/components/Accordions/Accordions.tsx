import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'lib/component-props';
import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { faHeart, faPlus, faMinus, faCircle, faStar } from '@fortawesome/free-solid-svg-icons';

type AccordionCardProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    AccordionCard: [
      fields: {
        fields: {
          Heading: Field<string>;
          Description: Field<string>;
          IconClass: Field<string>;
        };
      }
    ];
  };
};

const Accordions = (props: AccordionCardProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="accordion-wrapper section grey-section">
      <div className="container">
        <h2 className="title title-center">
          <Text field={props.fields.Title} />
        </h2>
        <div className="accordion accordion-background">
          {props.fields.AccordionCard.map((item, index) => (
            <div
              className={`accordion-item ${activeIndex === index ? 'expanded' : ''}`}
              key={index}
            >
              <div className="card-header">
                {item.fields.IconClass.value == 'faHeart' ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <></>
                )}
                {item.fields.IconClass.value == 'faStar' ? (
                  <FontAwesomeIcon icon={faStar} />
                ) : (
                  <></>
                )}
                {item.fields.IconClass.value == 'faCircle' ? (
                  <FontAwesomeIcon icon={faCircle} />
                ) : (
                  <></>
                )}
                <button onClick={() => handleClick(index)}>
                  <Text field={item.fields.Heading} />
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faMinus : faPlus}
                    className="accordion-icon"
                  />
                </button>
              </div>
              {activeIndex === index && (
                <div className="card-body">
                  <p>
                    <Text field={item.fields.Description} />
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Default = Accordions;
