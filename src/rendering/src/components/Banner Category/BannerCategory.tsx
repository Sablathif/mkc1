import React from 'react';
import DealSection from '../common/partials/home/deal-section';
import BannerCategoryType from './BannerCategory.type';
const BannerCategory = (props: BannerCategoryType): JSX.Element => {
  return <DealSection props={props} />;
};
export default BannerCategory;