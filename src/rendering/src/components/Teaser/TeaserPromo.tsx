import React from 'react';
import TeaserPromoType from './TeaserPromo.type';
import TeaserCard from './TeaserCard';

import Slider from 'react-slick';
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 800,
  cssEase: 'ease',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TeaserPromo = (props: TeaserPromoType): JSX.Element => (
  <div className="section">
    <div className="container">
      <div className="intro-section">
        <div className="service-list">
          <Slider {...settings}>
            {props.fields.TeaserSections.map((data, index) => (
              <TeaserCard props={data} index={index} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </div>
);
export default TeaserPromo;
