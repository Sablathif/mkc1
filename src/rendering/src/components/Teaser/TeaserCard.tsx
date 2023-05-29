import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInRightShorter } from '../../utils/data/keyframes';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TeaserCard(props: any, index: any) {
  const data = props?.props;
  return (
    <div key={index}>
      <Reveal
        keyframes={fadeInRightShorter}
        delay={data?.fields?.Delay?.value}
        duration={1200}
        triggerOnce
      >
        <div className="icon-box icon-box-side icon-box1">
          <figure className="category-media">
            <LazyLoadImage
              src={'/-' + data?.fields?.Image?.value?.src.split('/-').pop()}
              effect="opacity"
            />
          </figure>
          <div className="icon-box-content">
            <h4 className="icon-box-title text-capitalize ls-normal lh-1">
              {data.fields.Heading.value}
            </h4>
            <p className="ls-s lh-1"> {data?.fields?.Description?.value}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
export default TeaserCard;
