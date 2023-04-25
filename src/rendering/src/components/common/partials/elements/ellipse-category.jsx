import React from 'react';
import OwlCarousel from '../../../../components/feature/owl-carousel';
import ALink from '../../../../components/feature/custom-link';
import { mainSlider9 } from '../../../../utils/data/carousel';

function ellipsecategory(data) {
  const categories = data.data.fields.Categories;
  return (
    <>
      <section className="ellipse-section mt-10">
        <h2 className="title title-center">{data.data.fields.Title.value}</h2>

        <OwlCarousel adClass="owl-theme" options={mainSlider9}>
          {categories?.map((data, index) => (
            <div className="category category-ellipse" key={index}>
              <ALink href={data.fields.CTA.value.href}>
                <figure className="category-media">
                  <img src={data.fields.Image.value.src} alt="Cateogry" width="196" height="196" />
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
        </OwlCarousel>
      </section>
    </>
  );
}
export default React.memo(ellipsecategory);
