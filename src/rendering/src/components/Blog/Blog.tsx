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

const Blog = (Props: BlogProps): JSX.Element => {
  const blogType = Props?.fields?.blogType?.value;
  const BLOGS = {
    FeaturedArticle: <BlogSection BlogProps={Props} />,
    Listing: <Listing BlogProps={Props} />,
    BlogGridSidebar: <BlogGridSidebar BlogProps={Props} />,  
    BlogClassic: <BlogClassic BlogProps={Props} />,
  };
  return BLOGS[blogType as keyof typeof BLOGS] || <></>;
};
export const Default = Blog;
//export default Blog;
