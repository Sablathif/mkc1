import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import { fadeInRightShorter, fadeInUp, fadeIn } from '../../utils/data/keyframes';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function IntroSlide3(props: any) {
  const data = props.props.props;
  return (
    <div
      className="banner banner-fixed video-banner intro-slide3"
      style={{ backgroundColor: `${data.fields.BackgroundColor.value}` }}
    >
      <figure>
        {data.fields.BackgroundType.value === 'Image' ? (
          <LazyLoadImage
            src={'/-' + data?.fields?.BackgroundImage?.value?.src.split('/-').pop()}
            alt="Intro Slider"
            effect="opacity"
            width="auto"
            height={630}
          />
        ) : (
          <video
            src={'/-' + data?.fields?.BackgroundVideo?.value?.href.split('/-').pop()}
            width="1903"
            height="630"
            autoPlay={true}
            muted
            loop
          ></video>
        )}
      </figure>
      <div className="container">
        <div className="banner-content x-50 y-50 text-center">
          <Reveal keyframes={fadeIn} delay={200} duration={700}>
            <h4 className="banner-subtitle text-white text-uppercase mb-3 ls-normal">
              {data.fields.Title.value}
            </h4>
          </Reveal>

          <Reveal keyframes={fadeInUp} delay={500} duration={700}>
            <h2 className="banner-title mb-3 text-white font-weight-bold text-uppercase ls-m">
              {data.fields.SubTitle.value}
            </h2>
          </Reveal>

          <Reveal keyframes={fadeInUp} delay={800} duration={1000}>
            <RichText
              className="mb-7 text-white ls-s font-primary"
              field={data.fields.Description}
            />
          </Reveal>

          <Reveal keyframes={fadeInRightShorter} delay={1500} duration={1000}>
            <ALink
              href={data.fields.CTA.value.href}
              className="btn btn-dark btn-rounded mb-1"
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

export default IntroSlide3;
