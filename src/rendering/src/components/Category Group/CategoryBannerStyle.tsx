import React from 'react';
import CategoryBannerStyleType from './CategoryBannerStyle.type';
import CategoryBannerStyleCard from './CategoryBannerStyleCard';
const CategoryBannerStyleListing = (props: CategoryBannerStyleType): JSX.Element => {
  return (
    <>
      <div className="page-content">
        <div className="container">
          <section className="category-section masonry-section mt-10 pt-4">
            <h2 className="title title-center">{props?.fields?.BannerTitle?.value}</h2>
            <div className="row grid gutter-sm">
              {props?.fields?.Banners?.map((data, index) => (
                <CategoryBannerStyleCard props={data} index={index} key={index} />
              ))}
              <div className="col-1 grid-space"></div>
            </div>
          </section>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default CategoryBannerStyleListing;
