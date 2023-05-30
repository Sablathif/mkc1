import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type TeaserPromoProps = ComponentProps & {
  fields: {
    TeaserSections: [
      fields: {
        fields: {
          Heading: Field<string>;
          Description: Field<string>;
          IconClass: Field<string>;
          Delay: Field<number>;
          Image: ImageField;
        };
      }
    ];
  };
};
export default TeaserPromoProps;
