import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import CategorySection from '../../components/common/partials/home/category-section';
import IconCategory from '../../components/common/partials/elements/icon-category';
import EllipseCategory from '../../components/common/partials/elements/ellipse-category';

type ProductCategoryProps = ComponentProps & {
  params: { ListingType: Field<string> };
  fields: {
    ListingType: Field<string>;
  };
};

const ProductCategory = (props: ProductCategoryProps): JSX.Element => (
  <>
    {props.params.ListingType.toString() == 'Icon' ? <IconCategory data={props} /> : <></>}
    {props.params.ListingType.toString() == 'Image' ? <CategorySection data={props} /> : <></>}
    {props.params.ListingType.toString() == 'Ellipse' ? <EllipseCategory data={props} /> : <></>}
  </>
);

//export default withDatasourceCheck()<ProductCategoryProps>(ProductCategory);
export const Default = ProductCategory;
