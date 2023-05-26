import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import { fadeInUpShorter, fadeInRightShorter } from '../../utils/data/keyframes';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import dynamic from 'next/dynamic';

// const IVSliderCard = (props: any): JSX.Element => {
// const backgroundType = props.props.props?.fields.BackgroundType.value;
// const Component = backgroundType ? IVSLIDERS[backgroundType] : ImageSlide;
// return <Component props={props.props.props} />;
// }

function IntroSlide1(props: any) {
  const data = props.props.props;

  const ImageSlide = dynamic(() => import('./ImageSlide'));
  const VideoSlide = dynamic(() => import('./VideoSlide'));

  const IVSLIDERS: Record<string, any> = {
    ImageSlide,
    VideoSlide,
  };

  const backgroundType = props.props.props?.fields.BackgroundType.value;
  const Component = backgroundType ? IVSLIDERS[backgroundType] : ImageSlide;
return <Component props={props} />;
  return (
    <div
      className="banner banner-fixed intro-slide1"
      style={{ backgroundColor: `${data.fields.BackgroundColor.value}` }}
    >
      

      <div className="container">
        <div className="banner-content y-50">
          <h4 className="banner-subtitle font-weight-bold ls-l d-flex align-items-center">
            <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000}>
              <span className="d-inline-block">{data.fields.Tag1.value}</span>
            </Reveal>

            <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000}>
              <span className="d-inline-block label-star bg-white text-primary">
                {data.fields.Tag2.value}
              </span>
            </Reveal>
          </h4>

          <Reveal keyframes={fadeInUpShorter} delay={1000} duration={1200}>
            <h2 className="banner-title font-weight-bold text-white lh-1 ls-md">
              {data.fields.Title.value}
            </h2>

            <h3 className="font-weight-normal lh-1 ls-l text-white">
              {data.fields.SubTitle.value}
            </h3>

            <RichText className="text-white ls-s mb-7" field={data.fields.Description} />
          </Reveal>

          <Reveal keyframes={fadeInUpShorter} delay={1800} duration={1000}>
            <ALink
              href={data.fields.CTA.value.href}
              className="btn btn-dark btn-rounded"
              content={undefined}
              style={undefined}
            >
              {data.fields.CTA.value.text}
              <i className="d-icon-arrow-right"></i>
            </ALink>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default IntroSlide1;
