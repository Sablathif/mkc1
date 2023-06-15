import React from 'react';
import ALink from 'components/feature/custom-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function PostEight(props) {
  const post = props.post;
  return (
    <div className={`post post-frame`}>
      <figure className="post-media">
        <ALink href={post.fields.ctaLink.value.href}>
          <LazyLoadImage
            src={'/-' + post.fields.blogimages.value.src.split('/-').pop()}
            alt={post.fields.blogimages.value.alt}
            width={post.fields.blogimages.value.width}
            height={post.fields.blogimages.value.height}
            effect="opacity; transform"
            style={{ backgroundColor: '#DEE6E8' }}
            loading="lazy"
          />
        </ALink>
        <div className="post-calendar">
          <span className="post-day">{post.fields.day.value}</span>
          <span className="post-month">{post.fields.month.value}</span>
        </div>
      </figure>
      <div className="post-details">
        <h4 className="post-title">{post.fields.heading.value}</h4>
        <p className="post-content">{post.fields.description.value}</p>
        <ALink
          href={post.fields.ctaLink.value.href}
          className={`btn btn-primary btn-link btn-underline`}
        >
          {post.fields.ctaText.value}
          <i className="d-icon-arrow-right"></i>
        </ALink>
      </div>
    </div>
  );
}
export default React.memo(PostEight);
