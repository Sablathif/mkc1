import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ALink from '../../../../components/feature/custom-link';

function ellipsecategory(data) {
  const categories = data.data.fields.Categories;
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
    <>
      <section className="ellipse-section ellipse-carousel section">
        <div className="container">
          <h2 className="title title-center">{data.data.fields.Title.value}</h2>
          <Slider {...settings}>
            {categories?.map((data, index) => (
              <div className="category category-ellipse" key={index}>
                <ALink href={data.fields.CTA.value.href}>
                  <figure className="category-media">
                    <img
                      src={'/-' + data.fields?.Image?.value?.src.split('/-').pop()}
                      alt="Cateogry"
                      width="196"
                      height="196"
                    />
                  </figure>
                </ALink>

                <div className="category-content">
                  <h4 className="category-name">
                    <ALink href={data.fields.CTA.value.href}>{data.fields.Title.value}</ALink>
                  </h4>
                  <span className="category-count">{data.fields.SubTitle.value}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default React.memo(ellipsecategory);
