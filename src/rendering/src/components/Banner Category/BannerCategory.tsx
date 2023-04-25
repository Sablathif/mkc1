import {
  Field,
  withDatasourceCheck,
  ImageField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';
import DealSection from '../common/partials/home/deal-section';

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
    id: Field<any>;
    name: Field<any>;
  };
};

const BannerCategory = (props: BannerCategoryProps): JSX.Element => (
  <>
    <DealSection props={props} />
  </>
);
export const Default = BannerCategory;
// export default withDatasourceCheck()<BannerCategoryProps>(BannerCategory);
