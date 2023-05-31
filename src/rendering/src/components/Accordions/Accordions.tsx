import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import AccordionsIcon from '../Accordions/AccordionIcon';
import AccordionsType from './Accordions.type';

const Accordions = (props: AccordionsType): JSX.Element => {
  return (
    <section className="accordion-wrapper section grey-section">
      <div className="container">
        <h2 className="title title-center">
          <Text field={props?.fields?.Title} />
        </h2>
        <div className="accordion accordion-background">
          {props?.fields?.AccordionCard.map((item, index) => (
            <AccordionsIcon props={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordions;
