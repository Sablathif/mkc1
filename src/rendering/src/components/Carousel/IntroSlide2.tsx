import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import Sliders from './Sliders';

function IntroSlide2(props: any) {
  const data = props?.props?.props;
  return (
    <div
      className="banner banner-fixed"
      style={{ backgroundColor: `${data?.fields?.BackgroundColor?.value}` }}
    >
      <Sliders props={data} />
      <div className="container">
        <div className="banner-content y-50 ml-auto text-right">
          {/* <Reveal keyframes={fadeInUp} delay={200} duration={700}></Reveal> */}
          <h4 className="banner-subtitle ls-s mb-1">
            <span className="d-block text-uppercase mb-2">{data?.fields?.Tag1?.value}</span>
            <strong className="font-weight-semi-bold ls-m">{data?.fields?.Tag2?.value}</strong>
          </h4>
          {/* <Reveal keyframes={fadeInRight} delay={500} duration={1200}></Reveal> */}
          <h2 className="banner-title mb-2 d-inline-block font-weight-bold text-primary">
            {data?.fields?.Title?.value}
          </h2>
          {/* <Reveal keyframes={fadeInUp} delay={1200} duration={1000}></Reveal> */}
          <RichText
            className="font-primary ls-s text-dark mb-4"
            field={data?.fields?.Description}
          />
          {/* <Reveal keyframes={fadeInUp} delay={1400} duration={1000}></Reveal> */}
          <ALink
            href={data?.fields?.CTA?.value?.href}
            className="btn btn-dark btn-rounded"
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

export default IntroSlide2;
