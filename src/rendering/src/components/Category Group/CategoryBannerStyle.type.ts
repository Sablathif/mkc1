import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type CategoryBannerStyleProps = ComponentProps & {
  fields: {
    BannerTitle: Field<string>;
    Banners: [
      fields: {
        fields: {
          Title: Field<string>;
          SubTitle: Field<string>;
          Description: Field<string>;
          CTAText: Field<string>;
          CTALink: LinkField;
          CTAType: Field<string>;
          BannerType: Field<number>;
          Divider: Field<any>;
          BackgroundImage: ImageField;
        };
      }
    ];
    id: Field<any>;
    name: Field<any>;
  };
};
export default CategoryBannerStyleProps;
