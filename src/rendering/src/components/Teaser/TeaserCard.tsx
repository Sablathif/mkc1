import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInRightShorter } from '../../utils/data/keyframes';

import Image from 'next/image';

function TeaserCard(props: any, index: any) {
  const data = props?.props;
  return (
    <div key={index}>
      <Reveal
        keyframes={fadeInRightShorter}
        delay={data?.fields?.Delay?.value}
        duration={1200}
        triggerOnce
      ></Reveal>
      <div className="icon-box icon-box-side icon-box1">
        <figure className="category-media">
          <Image
            src={'/-' + data?.fields?.Image?.value?.src.split('/-').pop()}
            alt={data?.fields?.Image?.value?.alt}
            width={data?.fields?.Image?.value?.width}
            height={data?.fields?.Image?.value?.height}
            loading="lazy"
          />
        </figure>
        <div className="icon-box-content">
          <h4 className="icon-box-title text-capitalize ls-normal lh-1">
            {data.fields.Heading.value}
          </h4>
          <p className="ls-s lh-1"> {data?.fields?.Description?.value}</p>
        </div>
      </div>
    </div>
  );
}
export default TeaserCard;
