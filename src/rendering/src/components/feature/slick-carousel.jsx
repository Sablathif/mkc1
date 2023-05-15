import React, { useEffect } from 'react';
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  }, [carouselRef]);

  //   events = Object.assign({}, events, props.events);
  //   let settings = Object.assign({}, defaultOptions, options);

  // return (
  //   // <h1>Slick Carousel</h1>
  //   <Slider className = "container mb-8" {...defaultOptions}>
  //     <div>
  //       <h1>Slick Carousel</h1>
  //       <img src="image1.jpg" alt="Image 1" />

  //     </div>
  //     <div>
  //       <img src="image2.jpg" alt="Image 2" />
  //     </div>
  //     <div>
  //       <img src="image3.jpg" alt="Image 3" />
  //     </div>
  //     <div>
  //       <img src="image4.jpg" alt="Image 4" />
  //     </div>
  //     <div>
  //       <img src="image5.jpg" alt="Image 5" />
  //     </div>
  //   </Slider>
  // );

  return props.children ? (
    props.children.length > 0 || (props.children && props.children.length === undefined) ? (
      <Carousel
        {...defaultOptions}
        // ref={carouselRef}
        // className={`slick-carousel ${adClass}`}
        // options={settings}
        // events={events}
      >
        {props.children}
      </Carousel>
    ) : (
      ''
    )
  ) : (
    ''
  );
};

export default React.memo(SlickCarousel);

//   export const Default = HeroCarousel;
