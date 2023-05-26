import React from 'react';
import BannerCard from './banner-card';
function DealSection(props) {
  const banners = props.props.fields.Banners;
  return (
    <section className="banner-group mt-4">
      <div className="container">
        <div className="row justify-content-center">
          {banners?.map((data, index) => (
            <BannerCard props={data} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default DealSection;
