import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../../../../components/feature/custom-link';
import { fadeIn } from '../../../../utils/data/keyframes';

function CategorySection(props) {
  const categories = props.props.fields.Categories;
  const data = props.props;
  return (
    <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
      <section className="pt-10 mt-7">
        <div className="container">
          <h2 className="title title-center mb-5">{data.fields.Title.value}</h2>

          <div className="row">
            {categories?.map((data, index) => (
              <div className="col-xs-6 col-lg-3 mb-4" key={index}>
                <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                  <ALink href={data.fields.CTA.value.href}>
                    <figure className="category-media">
                      <LazyLoadImage
                        src={'/-' + data.fields.Image.value.src.split('/-').pop()}
                        alt="Intro Slider"
                        effect="opacity; transform"
                        width={280}
                        height={280}
                        loading="lazy"
                      />
                    </figure>

                    <div className="category-content">
                      <h4 className="category-name font-weight-bold ls-l">
                        {data.fields.Title.value}
                      </h4>
                    </div>
                  </ALink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default React.memo(CategorySection);
