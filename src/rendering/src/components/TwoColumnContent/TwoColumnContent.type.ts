import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type TwoColumnContentProps = ComponentProps & {
  fields: {
    contentList: [
      children: {
        fields: {
          description: Field<string>;
        };
      }
    ];
  };
};
export default TwoColumnContentProps;
