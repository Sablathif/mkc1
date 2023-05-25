import { Field, ImageField, RichText, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import SlickCarousel from 'components/feature/slick-carousel';
import ALink from 'components/feature/custom-link';
import {
  fadeInUpShorter,
  fadeInRightShorter,
  fadeInUp,
  fadeInRight,
  fadeIn,
} from '../../utils/data/keyframes';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { introSlider } from '../../utils/data/carousel';

type HeroCarouselProps = ComponentProps & {
  fields: {
    Slides: [
      fields: {
        fields: {
          Tag1: Field<string>;
          Tag2: Field<string>;
          Title: Field<string>;
          SubTitle: Field<string>;
          Description: RichTextField;
          BackgroundImage: ImageField;
          BackgroundVideo: any;
          BackgroundType: Field<string>;
          CTA: Field<any>;
          BackgroundColor: Field<string>;
          SlideVariant: Field<string>;
        };
      }
    ];
  };
};

const HeroCarousel = (props: HeroCarouselProps): JSX.Element => (
  <SlickCarousel adClass="intro-slider animation-slider" options={introSlider}>
    {props?.fields?.Slides?.map((data) => (
      <>
        {data.fields.SlideVariant.value === 'intro-slide1' ? (
          <div
            className="banner banner-fixed intro-slide1"
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
                  // src={data?.fields?.BackgroundVideo?.value?.href?.replace('http://cm', '')}
                  width="1903"
                  height="630"
                  autoPlay={true}
                  muted
                  loop
                ></video>
              )}
            </figure>

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
        ) : (
          <></>
        )}
        {data.fields.SlideVariant.value === 'intro-slide2' ? (
          <div
            className="banner banner-fixed intro-slide2"
            style={{ backgroundColor: `${data.fields.BackgroundColor.value}` }}
          >
            <figure>
              {data.fields.BackgroundType.value === 'Image' ? (
                <LazyLoadImage
                  // src={data?.fields?.BackgroundImage?.value?.src}
                  src={'/-' + data?.fields?.BackgroundImage?.value?.src.split('/-').pop()}
                  alt="Intro Slider"
                  effect="opacity"
                  width="auto"
                  height={630}
                />
              ) : (
                <video
                  // src={data?.fields?.BackgroundVideo?.value?.href?.replace('http://cm', '')}
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
              <div className="banner-content y-50 ml-auto text-right">
                <Reveal keyframes={fadeInUp} delay={200} duration={700}>
                  <h4 className="banner-subtitle ls-s mb-1">
                    <span className="d-block text-uppercase mb-2">{data.fields.Tag1.value}</span>
                    <strong className="font-weight-semi-bold ls-m">{data.fields.Tag2.value}</strong>
                  </h4>
                </Reveal>
                <Reveal keyframes={fadeInRight} delay={500} duration={1200}>
                  <h2 className="banner-title mb-2 d-inline-block font-weight-bold text-primary">
                    {data.fields.Title.value}
                  </h2>
                </Reveal>
                <Reveal keyframes={fadeInUp} delay={1200} duration={1000}>
                  <RichText
                    className="font-primary ls-s text-dark mb-4"
                    field={data.fields.Description}
                  />
                </Reveal>
                <Reveal keyframes={fadeInUp} delay={1400} duration={1000}>
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
        ) : (
          <></>
        )}
        {data.fields.SlideVariant.value === 'intro-slide3' ? (
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
                  // src={data?.fields?.BackgroundVideo?.value?.href?.replace('http://cm', '')}
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
        ) : (
          <></>
        )}
      </>
    ))}
  </SlickCarousel>
);

export const Default = HeroCarousel;
// export default withDatasourceCheck()<HeroCarouselProps>(HeroCarousel);
