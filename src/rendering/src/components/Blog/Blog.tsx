import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Listing from './Listing';
import BlogGridSidebar from './GridSidebar';
import BlogClassic from './Classic';
import BlogSection from '../common/partials/home/blog-section';
type BlogProps = ComponentProps & {
  fields: {
    blogType: Field<string>;
  };
};

const Blog = (Props: BlogProps): JSX.Element => (
  <>
    {/* <h1>
    HI
  </h1> */}
    {Props.fields.blogType.value.toLowerCase() == 'classic' ? (
      <BlogClassic BlogProps={Props} />
    ) : (
      <></>
    )}
    {Props.fields.blogType.value.toLowerCase() == 'listing' ? <Listing BlogProps={Props} /> : <></>}
    {/* {Props.fields.blogType.value.toLowerCase() == 'grid 2 columns' ? (
      <BlogGrid2Column BlogProps={Props} />
    ) : (
      <></>
    )} */}

    {Props.fields.blogType.value.toLowerCase() == 'grid sidebar' ? (
      <BlogGridSidebar BlogProps={Props} />
    ) : (
      <></>
    )}
    {/* {Props.fields.blogType.value.toLowerCase() == 'mask masonry' ? (
      <MaskMasonry BlogProps={Props} />
    ) : (
      <></>
    )} */}
    {/* {Props.fields.blogType.value.toLowerCase() == 'masonry 4 columns' ? (
      <Masonry4Columns BlogProps={Props} />
    ) : (
      <></>
    )} */}
    {Props.fields.blogType.value.toLowerCase() == 'Featured Article'.toLowerCase() ? (
      <BlogSection BlogProps={Props} />
    ) : (
      <></>
    )}
  </>
);
export const Default = Blog;

// export default withDatasourceCheck()<BlogProps>(Blog);
