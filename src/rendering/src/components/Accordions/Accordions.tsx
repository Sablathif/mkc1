import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import AccordionsIcon from '../Accordions/AccordionIcon';
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
  return (
    <section className="accordion-wrapper section grey-section">
      <div className="container">
        <h2 className="title title-center">
          <Text field={props.fields.Title} />
        </h2>
        <div className="accordion accordion-background">
          {props.fields.AccordionCard.map((item, index) => (
            <AccordionsIcon props={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordions;
