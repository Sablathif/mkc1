import React, { useEffect } from 'react';
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import dynamic from 'next/dynamic';
const Carousel = dynamic(() => import('react-slick'), {
  ssr: false,
});

const SlickCarousel = (props) => {
  const defaultOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    if (props.onChangeRef) {
      props.onChangeRef(carouselRef);
    }
  });
  return props.children ? (
    props.children.length > 0 || (props.children && props.children.length === undefined) ? (
      <Carousel {...defaultOptions}>{props.children}</Carousel>
    ) : (
      ''
    )
  ) : (
    ''
  );
};

export default React.memo(SlickCarousel);
