import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type CallToActionProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    BannerTitle: Field<string>;
    BannerSubTitle: Field<string>;
    Text: Field<string>;
    Description: Field<string>;
    CTAText: Field<string>;
    CTALink: Field<LinkField>;
  };
};
export default CallToActionProps;
