import React from 'react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import dynamic from 'next/dynamic';
const LazyLoadImage = dynamic(() => import('react-lazy-load-image-component'));
const Image = dynamic(() => import('next/image'));

function LazyImage(props) {
  const { sitecoreContext } = useSitecoreContext();
  console.log('sitecoreContext', sitecoreContext);
  return (
    <>
      {sitecoreContext & sitecoreContext.pageState & (sitecoreContext?.pageState === 'normal') ? (
        <Image
          src={props.value?.src}
          alt={`${props.value?.alt}`}
          width={`${props.value.width}`}
          height={`${props.value?.height}`}
          loading="lazy"
        />
      ) : (
        <LazyLoadImage
          src={props.value?.src}
          alt={`${props.value?.alt}`}
          width={`${props.value.width}`}
          height={`${props.value?.height}`}
          loading="lazy"
        />
      )}
    </>
  );
}
export default LazyImage;
