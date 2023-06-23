import React from 'react';
import {
  // ComponentParams,
  // ComponentRendering,
  Text,
  Field,
  LinkField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Reveal from 'react-awesome-reveal';
import { fadeIn } from '../../utils/data/keyframes';
import { mainSlider6 } from '../../utils/data/carousel';
import OwlCarousel from 'components/feature/owl-carousel';
import PostEight from 'components/feature/post/post-eight';
import { ComponentProps } from 'lib/component-props';
import ListingCard from './ListingCard';
import ClassicCard from './ClassicCard';

interface Fields {
  Blogs: Blog[];
  Title: Field<string>;
  // rendering: ComponentRendering & { params: ComponentParams };
  // params: ComponentParams;
}
interface Blog {
  author: Field<string>;
  date: Field<string>;
  comment: Field<string>;
  heading: Field<string>;
  description: Field<string>;
  ctaText: Field<string>;
  ctaLink: LinkField;
  blogimages: ImageField;
  month: Field<string>;
  day: Field<string>;
}
type BlogListingProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: BlogListingProps): JSX.Element => {
  return (
    <div className="page-content with-sidebar">
      <div className="container">
        <div className="row gutter-lg">
          <div className="col-lg-12">
            <div className="posts">
              {props?.fields?.Blogs && props?.fields?.Blogs?.length
                ? props?.fields?.Blogs?.slice(0, 4).map((post, index) => (
                    <ListingCard props={post} index={index} key={index} />
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Classic = (props: BlogListingProps): JSX.Element => {
  return (
    <div className="page-content with-sidebar">
      <div className="container">
        <div className="row gutter-lg">
          <div className="col-lg-12">
            <div className="posts">
              {props?.fields?.Blogs && props?.fields?.Blogs?.length
                ? props?.fields?.Blogs?.slice(0, 4).map((post, index) => (
                    <ClassicCard props={post} index={index} key={index} />
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const FeaturedArticle = (props: BlogListingProps): JSX.Element => {
  return (
    <section className="blog-post-wrapper mt-6 mt-md-10 pt-7">
      <Reveal keyframes={fadeIn} duration={1000} triggerOnce>
        <div className="container">
          <h2 className="title title-center">
            <Text field={props?.fields?.Title}></Text>
          </h2>
          <OwlCarousel adClass="owl-theme post-slider" options={mainSlider6}>
            {props?.fields?.Blogs && props?.fields?.Blogs?.length
              ? props?.fields?.Blogs?.slice(0, 4).map((post, index) => (
                  <React.Fragment key={'post-eight' + index}>
                    <div className="blog-post mb-4">
                      <PostEight post={post} adClass="overlay-zoom" />
                    </div>
                  </React.Fragment>
                ))
              : ''}
          </OwlCarousel>
        </div>
      </Reveal>
    </section>
  );
};
