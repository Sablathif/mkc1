import { Field, withDatasourceCheck, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';
import Reveal from 'react-awesome-reveal';
import OwlCarousel from '../feature/owl-carousel';
import { serviceSlider } from '../../utils/data/carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fadeInRightShorter } from '../../utils/data/keyframes';

type TeaserPromoProps = ComponentProps & {
  fields: {
    TeaserSections: [
      fields: {
        fields: {
          Heading: Field<string>;
          Description: Field<string>;
          IconClass: Field<string>;
          Delay: Field<number>;
          Image: ImageField;
        };
      }
    ];
  };
};

const TeaserPromo = (props: TeaserPromoProps): JSX.Element => (
  <div className="mt-6">
    <div className="service-list">
      <OwlCarousel adClass="owl-theme" options={serviceSlider}>
        {props.fields.TeaserSections.map((data, index) => (
          <div key={index}>
            <Reveal
              keyframes={fadeInRightShorter}
              delay={data.fields.Delay.value}
              duration={1200}
              triggerOnce
            >
              <div className="icon-box icon-box-side icon-box1">
                {/* <i className={data.fields.IconClass.value}></i> */}
                <figure className="category-media">
                  <LazyLoadImage
                    src={'/-' + data.fields?.Image?.value?.src.split('/-').pop()}
                    //alt={data.fields?.Image?.value?.alt}
                    width="190"
                    height="169"
                    effect="opacity"
                  />
                </figure>
                <div className="icon-box-content">
                  <h4 className="icon-box-title text-capitalize ls-normal lh-1">
                    {data.fields.Heading.value}
                  </h4>
                  <p className="ls-s lh-1"> {data.fields.Description.value}</p>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </OwlCarousel>
    </div>
  </div>
);

export default withDatasourceCheck()<TeaserPromoProps>(TeaserPromo);
