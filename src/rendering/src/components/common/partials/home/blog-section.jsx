import React from 'react';
import Reveal from 'react-awesome-reveal';
import OwlCarousel from 'components/feature/owl-carousel';

import PostEight from 'components/feature/post/post-eight';

import { fadeIn } from '../../../../utils/data/keyframes';
import { mainSlider6 } from '../../../../utils/data/carousel';

function BlogSection(BlogProps) {
  const posts = BlogProps.BlogProps;
  return (
    <section className="blog-post-wrapper mt-6 mt-md-10 pt-7">
      <Reveal keyframes={fadeIn} duration={1000} triggerOnce>
        <div className="container">
          <h2 className="title title-center">{posts.fields.title.value}</h2>

          <OwlCarousel adClass="owl-theme post-slider" options={mainSlider6}>
            {posts.fields.blog && posts.fields.blog.length
              ? posts.fields.blog.slice(0, 4).map((post, index) => (
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
}

export default React.memo(BlogSection);
