import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import ALink from '../../../../components/feature/custom-link';

import { parallaxHandler } from '../../../../utils';
import { blurIn } from '../../../../utils/data/keyframes';

function CtaSection(props) {
  useEffect(() => {
    window.addEventListener('scroll', parallaxHandler, true);

    return () => {
      window.removeEventListener('scroll', parallaxHandler, true);
    };
  }, []);
  const data = props.props?.fields;
  console.log(data);
  return (
    <section
      className="banner banner-background parallax text-center"
      data-option="{'speed': 4}"
      style={{
        backgroundImage: `url(${'/-' + data.BackgroundImage?.value.src.split('/-').pop()})`,
        backgroundColor: '#313237',
      }}
    >
      <Reveal keyframes={blurIn} delay={200} duration={1000} triggerOnce>
        <div className="container">
          <div className="banner-content">
            <h4 className="banner-subtitle text-white font-weight-bold ls-l">
              {data.Heading?.value}
              <span className="d-inline-block label-star bg-dark text-primary ml-4 mr-2">
                {data.Title?.value}
              </span>
              {data.SubTile?.value}
            </h4>

            <h3 className="banner-title font-weight-bold text-white">{data.Tag?.value}</h3>

            <p className="text-white ls-s">{data.Description?.value}</p>

            <ALink href="/shop" className="btn btn-primary btn-rounded btn-icon-right">
              {data.CTA?.value.text}
              <i className="d-icon-arrow-right"></i>
            </ALink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default React.memo(CtaSection);
