import Link from 'next/link';
import React from 'react';
// import ALink from 'components/feature/custom-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Text, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';
function PostEight(props) {
  const post = props.post.fields;
  return (
    <div className={`post post-frame`}>
      <figure className="post-media">
        <Link href={post.ctaLink.value.href}>
          <LazyLoadImage
            src={'/-' + post?.blogimages?.value?.src.split('/-').pop()}
            alt={post?.blogimages?.value?.alt}
            width={post?.blogimages?.value?.width}
            height={post?.blogimages?.value?.height}
            effect="opacity; transform"
            style={{ backgroundColor: '#DEE6E8' }}
            loading="lazy"
          />
        </Link>
        <div className="post-calendar">
          <span className="post-day">
            <Text field={post?.day}></Text>
          </span>
          <span className="post-month">
            <Text field={post?.month}></Text>
          </span>
        </div>
      </figure>
      <div className="post-details">
        <h4 className="post-title">
          <Text field={post?.heading}></Text>
        </h4>
        <p className="post-content">
          <JssRichText field={post?.description} />
        </p>
        <Link
          href={post?.ctaLink?.value?.href}
          className={`btn btn-primary btn-link btn-underline`}
        >
          <Text field={post?.ctaText}></Text>
          <i className="d-icon-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
export default React.memo(PostEight);
