import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeIn } from '../../../../utils/data/keyframes';
import OwlCarousel from '../../../feature/owl-carousel';
import { productSlider } from '../../../../utils/data/carousel';
// import { ProductTwo } from '../../../feature/product/product-two';
function BestCollection(props) {
  const { /*products*/ loading } = props;
  return (
    <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
      <section className="product-wrapper container mt-6 mt-md-10 pt-4 pb-8">
        <h2 className="title title-center mb-5">Best Sellers</h2>

        {loading ? (
          <OwlCarousel adClass="owl-theme owl-nav-full" options={productSlider}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="product-loading-overlay" key={'best-selling-skel-' + item}></div>
            ))}
          </OwlCarousel>
        ) : (
          <></>
        )}
      </section>
    </Reveal>
  );
}

export default React.memo(BestCollection);
