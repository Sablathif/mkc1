import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import ALink from '../../../feature/custom-link';

function EllipseCategoryCard(props, index) {
  const data = props?.props;
  return (
    <div className="category category-ellipse" key={index}>
      <ALink href={data?.fields?.CTA?.value?.href}>
        <figure className="category-media">
          <img
            src={'/-' + data?.fields?.Image?.value?.src.split('/-').pop()}
            alt="Cateogry"
            width="196"
            height="196"
          />
        </figure>
      </ALink>

      <div className="category-content">
        <h4 className="category-name">
          <ALink href={data?.fields?.CTA?.value?.href}>{data?.fields?.Title?.value}</ALink>
        </h4>
        <span className="category-count">{data?.fields?.SubTitle?.value}</span>
      </div>
    </div>
  );
}

export default EllipseCategoryCard;
