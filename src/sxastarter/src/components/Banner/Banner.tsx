import React from 'react';
import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';
import { Field, ImageField, LinkField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: Field<string>;
  Title: Field<string>;
  SubTitle: Field<string>;
  Description: Field<string>;
  CTAText: Field<string>;
  CTALink: LinkField;
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
        backgroundImage: `url(${props?.fields?.BackgroundImage?.value?.src})`,
        backgroundColor: '#313237',
      }}
    >
      {/* <Reveal keyframes={blurIn} delay={200} duration={1000} triggerOnce></Reveal> */}
      <div className="container">
        <div className="banner-content">
          <h4 className="banner-subtitle text-white font-weight-bold ls-l">
            {props?.fields?.Heading?.value}
            <span className="d-inline-block label-star bg-dark text-primary ml-4 mr-2">
              {props?.fields?.Title?.value}
            </span>
            {props?.fields?.SubTitle?.value}
          </h4>

          {/* <h3 className="banner-title font-weight-bold text-white">{props?.fields?.Tag?.value}</h3> */}

          <p className="text-white ls-s">{props?.fields?.Description?.value}</p>

          <Link
            href={props?.fields?.CTALink?.value}
            className="btn btn-link btn-underline btn-primary"
            style={undefined}
          >
            {props?.fields?.CTAText?.value}
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
            backgroundImage: `url(${props?.fields?.BackgroundImage?.value?.src})`,
            backgroundColor: '#f2f2f3',
          }}
        >
          <div className="banner-content">
            <h4 className="banner-subtitle font-weight-bold ls-normal text-uppercase text-white">
              <Text field={props?.fields?.Heading}></Text>
            </h4>
            <h1 className="banner-title font-weight-bold text-white">
              <Text field={props?.fields?.Title}></Text>
            </h1>
            <Link
              href={props?.fields?.CTALink?.value}
              className="btn btn-white btn-outline btn-rounded text-normal"
            >
              <Text field={props?.fields?.CTAText}></Text>
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
        backgroundImage: `url(${props?.fields?.BackgroundImage?.value?.src})`,
        backgroundColor: '#3C63A4',
      }}
    >
      <h3 className="page-subtitle font-weight-bold">
        <Text field={props?.fields?.SubTitle}></Text>
      </h3>
      <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">
        <Text field={props?.fields?.Title}></Text>
      </h1>
      <span className="page-desc text-white mb-0">
        <RichText field={props?.fields?.Description}></RichText>
      </span>
    </section>
  );
};
export const SimpleCTA = (props: BannerProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  return (
    <div className="container">
      <h2 className="title title-center mb-5">{props?.fields?.Title?.value}</h2>
      <div className="banner cta-simple">
        <div className="banner-content bg-white d-lg-flex align-items-center">
          <div className="banner-header pr-lg-7 pb-lg-0 pb-4 mb-lg-0 mb-6">
            <h3 className="banner-title font-weight-bold ls-s text-uppercase">
              {props?.fields?.Heading?.value}
            </h3>
            <h4 className="banner-subtitle font-weight-normal ls-s text-body">
              {props?.fields?.Title?.value}
            </h4>
          </div>
          <div className="banner-text mb-lg-0 mb-4 mr-lg-4 pl-lg-6 pr-lg-0 pl-2 pr-2">
            <h4 className="font-weight-normal ls-normal text-uppercase mb-0">
              {props?.fields?.SubTitle?.value}
            </h4>
            <p className="ls-m mb-0">{props?.fields?.Description?.value}</p>
          </div>
          <Link
            href={props?.fields?.CTALink?.value}
            className="btn btn-primary btn-ellipse btn-md btn-rounded"
            style={undefined}
          >
            {props?.fields?.CTAText?.value}
            <i className="d-icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
