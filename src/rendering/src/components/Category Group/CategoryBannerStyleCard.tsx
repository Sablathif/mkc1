import React from 'react';
import ALink from 'components/feature/custom-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CategoryBannerStyleCard(props: any, index: any) {
  const data = props?.props;
  return (
    <div
      key={index}
      className={
        data?.fields?.BannerType?.value.toString() === 'height-x2'
          ? 'grid-item height-x2'
          : 'grid-item height-x1'
      }
    >
      <div
        className={
          data?.fields?.BannerType?.value.toString() === 'height-x2'
            ? 'category category-banner category-absolute overlay-light'
            : 'category category-banner category-absolute text-white overlay-dark'
        }
      >
        <ALink href="#" className={undefined} content={undefined} style={undefined}>
          <figure className="category-media">
            <LazyLoadImage
              src={'/-' + data?.fields?.BackgroundImage?.value?.src.split('/-').pop()}
              alt={`${data?.fields?.BackgroundImage?.value?.alt}`}
              width="585"
              height={data?.fields?.BannerType?.value.toString() === 'height-x2' ? '397' : '205'}
              effect="opacity"
            />
          </figure>
        </ALink>

        <div className="category-content">
          <h4 className="category-name">{data?.fields?.Title?.value}</h4>
          <span className="category-count">
            <span>{data?.fields?.SubTitle?.value}</span> {data?.fields?.Description?.value}
          </span>
          <ALink
            href={data?.fields?.CTALink?.value?.href}
            className="btn btn-underline btn-link"
            content={undefined}
            style={undefined}
          >
            {data?.fields?.CTAText?.value}
          </ALink>
        </div>
      </div>
    </div>
  );
}
export default CategoryBannerStyleCard;
