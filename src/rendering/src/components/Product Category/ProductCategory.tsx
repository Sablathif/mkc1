import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import dynamic from 'next/dynamic';
import React from 'react';

const Icon = dynamic(() => import('../../components/common/partials/elements/icon-category'));
const Image = dynamic(() => import('../../components/common/partials/home/category-section'));
const Ellipse = dynamic(() => import('../../components/common/partials/elements/ellipse-category'));

type ProductCategoryProps = ComponentProps & {
  params: { ListingType: Field<string> };
};

const Categories: Record<string, any> = {
  Icon,
  Image,
  Ellipse,
};
const ProductCategory = (props: ProductCategoryProps): JSX.Element => {
  const listingType = props?.params.ListingType.toString();

  const Component = listingType ? Categories[listingType] : Image;
  return <Component props={props} />;
};

export const Default = ProductCategory;
