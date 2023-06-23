import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import Sliders from './Sliders';

function IntroSlide3(props: any) {
  const data = props?.props?.props;
  return (
    <div
      className="banner banner-fixed video-banner intro-slide3"
      style={{ backgroundColor: `${data?.fields?.BackgroundColor?.value}` }}
    >
      <Sliders props={data} />
      <div className="container">
        <div className="banner-content x-50 y-50 text-center">
          {/* <Reveal keyframes={fadeIn} delay={200} duration={700}></Reveal> */}
          <h4 className="banner-subtitle text-white text-uppercase mb-3 ls-normal">
            {data?.fields?.Title?.value}
          </h4>
          {/* <Reveal keyframes={fadeInUp} delay={500} duration={700}></Reveal> */}
          <h2 className="banner-title mb-3 text-white font-weight-bold text-uppercase ls-m">
            {data?.fields?.SubTitle?.value}
          </h2>
          {/* <Reveal keyframes={fadeInUp} delay={800} duration={1000}></Reveal> */}
          <RichText
            className="mb-7 text-white ls-s font-primary"
            field={data?.fields?.Description}
          />
          {/* <Reveal keyframes={fadeInRightShorter} delay={1500} duration={1000}></Reveal> */}
          <ALink
            href={data?.fields?.CTA?.value?.href}
            className="btn btn-dark btn-rounded mb-1"
            content={undefined}
            style={undefined}
          >
            {data?.fields?.CTA?.value?.text}
            <i className="d-icon-arrow-right"></i>
          </ALink>
        </div>
      </div>
    </div>
  );
}

export default IntroSlide3;
