import { ComponentProps } from 'lib/component-props';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
type BlogProps = ComponentProps & {
    fields: {
      blogType: Field<string>;
    };
  };

  export default BlogProps;