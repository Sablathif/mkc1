import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import SlickCarousel from 'components/feature/slick-carousel';
import { ComponentProps } from 'lib/component-props';
import React from 'react';
import { introSlider } from 'src/utils/data/carousel';
import SliderCard from './SliderCard';
import BannerCard from 'components/Banner/BannerCard';

interface Fields {
  Banners: Banner[];
  BannerTitle: Field<string>;
}
interface Banner {
  fields: {
    Heading: Field<string>;
    Title: Field<string>;
    SubTitle: Field<string>;
    Description: Field<string>;
    CTAText: Field<string>;
    CTALink: LinkField;
    BackgroundImage: ImageField;
    Style: Field<string>;
    BackgroundColor: string;
    MediaType: Field<string>;
  };
}
// interface BackgroundColor {
//   Color: Field<string>;
// }

type CarouselProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CarouselProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  console.log('props', props?.fields?.Banners);
  return (
    <SlickCarousel adClass="intro-slider animation-slider" options={introSlider}>
      {props?.fields?.Banners?.map((data, index) => (
        <SliderCard props={data} index={index} key={index} />
      ))}
    </SlickCarousel>
  );
};
export const CTA3Column = (props: CarouselProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  console.log('props', props);
  return (
    <section className="banner-group mt-4">
      <div className="container">
        <div className="row justify-content-center">
          {props?.fields?.Banners?.map((data, index) => (
            <BannerCard props={data} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
