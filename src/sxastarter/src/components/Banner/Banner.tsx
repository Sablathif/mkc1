import React from 'react';
import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';
import { Field, ImageField, LinkField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import CategoryBannerStyleCard from './CategoryBannerStyleCard';

interface Fields {
  BannerTitle: Field<string>;
  Banners: Banner[];
}

interface Banner {
  Heading: Field<string>;
  Title: Field<string>;
  SubTitle: Field<string>;
  Description: Field<string>;
  CTAText: Field<string>;
  CTALink: LinkField;
  BannerType: Field<number>;
  BackgroundImage: ImageField;
}

type BannerProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: BannerProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  return (
    <section
      className="banner banner-background parallax text-center"
      // data-option="{'speed': 4}"
      style={{
        backgroundImage: `url(${props?.fields?.Banners[0]?.BackgroundImage?.value?.src})`,
        backgroundColor: '#313237',
      }}
    >
      {/* <Reveal keyframes={blurIn} delay={200} duration={1000} triggerOnce></Reveal> */}
      <div className="container">
        <div className="banner-content">
          <h4 className="banner-subtitle text-white font-weight-bold ls-l">
            {props?.fields?.Banners[0].Heading?.value}
            <span className="d-inline-block label-star bg-dark text-primary ml-4 mr-2">
              {props?.fields?.Banners[0].Title?.value}
            </span>
            {props?.fields?.Banners[0].SubTitle?.value}
          </h4>

          {/* <h3 className="banner-title font-weight-bold text-white">{props?.fields?.Tag?.value}</h3> */}

          <p className="text-white ls-s">{props?.fields?.Banners[0].Description?.value}</p>

          <Link
            href={props?.fields?.Banners[0].CTALink?.value}
            className="btn btn-link btn-underline btn-primary"
            style={undefined}
          >
            {props?.fields?.Banners[0].CTAText?.value}
            <i className="d-icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};
export const BoxedBanner = (props: BannerProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  return (
    <div className="page-content mb-10 pb-3">
      <div className="container">
        <div
          className="shop-boxed-banner banner mb-lg-6"
          style={{
            backgroundImage: `url(${props?.fields?.Banners[0].BackgroundImage?.value?.src})`,
            backgroundColor: '#f2f2f3',
          }}
        >
          <div className="banner-content">
            <h4 className="banner-subtitle font-weight-bold ls-normal text-uppercase text-white">
              <Text field={props?.fields?.Banners[0].Heading}></Text>
            </h4>
            <h1 className="banner-title font-weight-bold text-white">
              <Text field={props?.fields?.Banners[0].Title}></Text>
            </h1>
            <Link
              href={props?.fields?.Banners[0].CTALink?.value}
              className="btn btn-white btn-outline btn-rounded text-normal"
            >
              <Text field={props?.fields?.Banners[0].CTAText}></Text>
              <i className="d-icon-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export const BannerWithoutCTA = (props: BannerProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  return (
    <section
      className="page-header pl-4 pr-4"
      style={{
        backgroundImage: `url(${props?.fields?.Banners[0].BackgroundImage?.value?.src})`,
        backgroundColor: '#3C63A4',
      }}
    >
      <h3 className="page-subtitle font-weight-bold">
        <Text field={props?.fields?.Banners[0].SubTitle}></Text>
      </h3>
      <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">
        <Text field={props?.fields?.Banners[0].Title}></Text>
      </h1>
      <span className="page-desc text-white mb-0">
        <RichText field={props?.fields?.Banners[0].Description}></RichText>
      </span>
    </section>
  );
};

export const CategoryBannerStyle = (props: BannerProps): JSX.Element => {
  return (
    <div className="page-content">
      <div className="container">
        <section className="category-section masonry-section mt-10 pt-4">
          <h2 className="title title-center">{props?.fields?.BannerTitle?.value}</h2>
          <div className="row grid gutter-sm">
            {props?.fields?.Banners?.map((data, index) => (
              <CategoryBannerStyleCard props={data} index={index} key={index} />
            ))}
            <div className="col-1 grid-space"></div>
          </div>
        </section>
      </div>
    </div>
  );
};
