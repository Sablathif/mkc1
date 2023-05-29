import { Field, ImageField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type BlogDetailProps = ComponentProps & {
  fields: {
    Image: ImageField;
    Author: Field<string>;
    Date: Field<string>;
    Title: Field<string>;
    Description: RichTextField;
  };
};
export default BlogDetailProps;
