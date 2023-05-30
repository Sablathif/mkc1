import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import ListingPostType from './ListingPostType';

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
      <ListingPostType props={props} />
      <div key={index} className="post-details">
        <div className="post-meta">
          on{' '}
          <ALink href="#" className="post-date" content={undefined} style={undefined}>
            {new Date(item?.fields?.date?.value).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              timeZone: 'GMT',
            })}
          </ALink>{' '}
          |{' '}
          <ALink href="#" className="post-comment" content={undefined} style={undefined}>
            <span>{item?.fields?.comment?.value}</span> Comments
          </ALink>
        </div>
        <h4 className="post-title">
          <ALink href="#" className={undefined} content={undefined} style={undefined}>
            <Text field={item?.fields?.heading} />
          </ALink>
        </h4>
        <p className="post-content">
          <Text field={item?.fields?.description} />
        </p>
        <ALink
          href={item?.fields?.ctaLink?.value?.href}
          className="btn btn-link btn-underline btn-primary"
          content={undefined}
          style={undefined}
        >
          <Text field={item?.fields?.ctaText} />
          <i className="d-icon-arrow-right"></i>
        </ALink>
      </div>
    </div>
  );
}
export default ListingCard;
