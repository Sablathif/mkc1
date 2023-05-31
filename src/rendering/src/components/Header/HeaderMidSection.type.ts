import { ImageField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type HeaderMidSectionProps = ComponentProps & {
  fields: {
    Logo: ImageField;
    CallUsNow: RichTextField;
  };
};
export default HeaderMidSectionProps;
