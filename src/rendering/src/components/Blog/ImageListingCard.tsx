import React from 'react';
import ALink from 'components/feature/custom-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function ImageListingCard(props: any) {
  const item = props?.props?.props?.props;
  return (
    <figure
      className={item?.fields?.imageList?.length > 1 ? 'post-media ' : 'post-media overlay-zoom'}
    >
      <ALink href="#" className={undefined} content={undefined} style={undefined}>
        <LazyLoadImage
          src={'/-' + item?.fields?.blogimages?.value?.src?.split('/-').pop()}
          alt={item?.fields?.blogimages?.value?.alt}
          width={item?.fields?.blogimages?.value?.width}
          height={item?.fields?.blogimages?.value?.height}
          loading="lazy"
        />
      </ALink>
    </figure>
  );
}
export default ImageListingCard;
