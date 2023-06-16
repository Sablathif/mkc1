import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type StatsCardProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    SubTitle: Field<string>;
    Description: RichTextField;
    StatsItems: [
      fields: {
        fields: {
          Number: Field<number>;
          Title: Field<string>;
          Description: Field<string>;
        };
      }
    ];
  };
};
export default StatsCardProps;
