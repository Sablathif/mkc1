import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type HeroBannerProps = ComponentProps & {
  params: { BannerType: Field<string> };
};
export default HeroBannerProps;
