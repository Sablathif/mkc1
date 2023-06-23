import { Link, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import Sliders from './Sliders';

function IntroSlide1(props: any) {
  const data = props?.props?.props;

  return (
    <div
      className="banner banner-fixed intro-slide1"
      style={{ backgroundColor: `${data?.fields?.BackgroundColor?.value}` }}
    >
      <Sliders props={data} />
      <div className="container">
        <div className="banner-content y-50">
          <h4 className="banner-subtitle font-weight-bold ls-l d-flex align-items-center">
            {/* <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000}></Reveal> */}
            <span className="d-inline-block">{data?.fields?.Tag1?.value}</span>

            {/* <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000}></Reveal> */}
            <span className="d-inline-block label-star bg-white text-primary">
              {data?.fields?.Tag2?.value}
            </span>
          </h4>

          {/* <Reveal keyframes={fadeInUpShorter} delay={1000} duration={1200}></Reveal> */}
          <h2 className="banner-title font-weight-bold text-white lh-1 ls-md">
            {data?.fields?.Title?.value}
          </h2>

          <h3 className="font-weight-normal lh-1 ls-l text-white">
            {data?.fields?.SubTitle?.value}
          </h3>

          <RichText className="text-white ls-s mb-7" field={data?.fields?.Description} />
          {/* <Reveal keyframes={fadeInUpShorter} delay={1800} duration={1000}></Reveal> */}
          <Link
            field={data?.fields?.CTALink?.value}
            className="btn btn-dark btn-rounded"
            style={undefined}
          >
            {data?.fields?.CTAText?.value}
            <i className="d-icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroSlide1;
