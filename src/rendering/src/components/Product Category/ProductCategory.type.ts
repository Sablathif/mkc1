import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type ProductCategoryProps = ComponentProps & {
  params: { ListingType: Field<string> };
};

export default ProductCategoryProps;
