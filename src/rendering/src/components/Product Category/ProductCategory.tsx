import dynamic from 'next/dynamic';
import React from 'react';
import ProductCategoryType from './ProductCategory.type';

const Icon = dynamic(() => import('../../components/common/partials/elements/icon-category'));
const Image = dynamic(() => import('../../components/common/partials/home/category-section'));
const Ellipse = dynamic(() => import('../../components/common/partials/elements/ellipse-category'));

const Categories: Record<string, any> = {
  Icon,
  Image,
  Ellipse,
};
export const Default = (props: ProductCategoryType): JSX.Element => {
  const listingType = props?.params.ListingType.toString();
  const Component = listingType ? Categories[listingType] : Image;
  return <Component props={props} />;
};

// export const Default = ProductCategory;
