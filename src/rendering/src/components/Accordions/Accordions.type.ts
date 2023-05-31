import { ComponentProps } from 'lib/component-props';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
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

export default AccordionCardProps;
