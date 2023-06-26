import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
// import ALink from 'components/feature/custom-link';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import ListingPostType from './ListingPostType';

function ListingCard(props: any, index: any) {
  const item = props?.props;
  return (
    <div
      key={index}
      className={
        item?.fields?.postType?.value.toLowerCase() === 'image'
          ? 'post post-list mb-4'
          : 'post post-list post-video mb-4'
      }
    >
      <figure
        className={item?.fields?.imageList?.length > 1 ? 'post-media ' : 'post-media overlay-zoom'}
      >
        <Link href="#" className={undefined} style={undefined}>
          <LazyLoadImage
            src={item?.fields?.blogimages?.value?.src}
            alt={item?.fields?.blogimages?.value?.alt}
            width={item?.fields?.blogimages?.value?.width}
            height={item?.fields?.blogimages?.value?.height}
            loading="lazy"
          />
        </Link>
      </figure>
      <div key={index} className="post-details">
        <div className="post-meta">
          on{' '}
          <Link href="#" className="post-date" style={undefined}>
            {new Date(item?.fields?.date?.value).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              timeZone: 'GMT',
            })}
          </Link>{' '}
          |{' '}
          <Link href="#" className="post-comment" style={undefined}>
            <span>{item?.fields?.comment?.value}</span> Comments
          </Link>
        </div>
        <h4 className="post-title">
          <Link href="#" className={undefined} style={undefined}>
            <Text field={item?.fields?.heading} />
          </Link>
        </h4>
        <p className="post-content">
          <Text field={item?.fields?.description} />
        </p>
        <Link
          href={item?.fields?.ctaLink?.value?.href}
          className="btn btn-link btn-underline btn-primary"
          style={undefined}
        >
          <Text field={item?.fields?.ctaText} />
          <i className="d-icon-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
export default ListingCard;
