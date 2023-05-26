import { ComponentProps } from 'lib/component-props';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
type BannerCategoryProps = ComponentProps & {
  fields: {
    Banners: [
      fields: {
        fields: {
          Title: Field<string>;
          SubTitle: Field<string>;
          Description: Field<string>;
          CTAText: Field<string>;
          CTALink: Field<LinkField>;
          CTAType: Field<string>;
          BannerType: Field<number>;
          Divider: Field<any>;
          BackgroundImage: ImageField;
        };
      }
    ];
  };
};
export default BannerCategoryProps;
