import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
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
        <Link href="#" className={undefined} style={undefined}>
          <LazyLoadImage
            src={data?.fields?.BackgroundImage?.value?.src}
            alt={`${data?.fields?.BackgroundImage?.value?.alt}`}
            width="585"
            height={data?.fields?.BannerType?.value.toString() === 'height-x2' ? '397' : '205'}
            loading="lazy"
          />
        </Link>
        <div className="category-content">
          <h4 className="category-name">{data?.fields?.Title?.value}</h4>
          <span className="category-count">
            <span>{data?.fields?.SubTitle?.value}</span> {data?.fields?.Description?.value}
          </span>
          <Link href="#" className={undefined} style={undefined}>
            {data?.fields?.CTAText?.value}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CategoryBannerStyleCard;
