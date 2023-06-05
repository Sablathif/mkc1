import React from 'react';
import BlogType from './Blog.type';
import dynamic from 'next/dynamic';
const FeaturedArticle = dynamic(() => import('../common/partials/home/blog-section'));
const Listing = dynamic(() => import('./Listing'));

const BLOGS: Record<string, any> = {
  FeaturedArticle,
  Listing,
};

export const Default = (Props: BlogType): JSX.Element => {
  const blogType = Props?.fields?.blogType?.value;
  const Component = blogType ? BLOGS[blogType] : FeaturedArticle;
  return <Component BlogProps={Props} />;
};
