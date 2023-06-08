import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import EllipseCategoryCard from './EllipseCategoryCard';

function ellipsecategory(props) {
  const categories = props?.props?.fields?.Categories;
  const data = props?.props;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
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
  return (
    <section className="ellipse-section ellipse-carousel section">
      <div className="container">
        <h2 className="title title-center">{data?.fields?.Title?.value}</h2>
        <Slider {...settings}>
          {categories?.map((data, index) => (
            <EllipseCategoryCard props={data} index={index} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default React.memo(ellipsecategory);
