import React from 'react';
import Listing from './Listing';
import BlogGridSidebar from './GridSidebar';
import BlogClassic from './Classic';
import BlogSection from '../common/partials/home/blog-section';
import BlogType from './Blog.type';
const Blog = (Props: BlogType): JSX.Element => {
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
