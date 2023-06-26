import React from 'react';
import CategoryBannerStyleCard from './CategoryBannerStyleCard';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

interface Fields {
  BannerTitle: Field<string>;
  Banners: Banner[];
}

interface Banner {
  Title: Field<string>;
  SubTitle: Field<string>;
  Description: Field<string>;
  CTAText: Field<string>;
  CTALink: LinkField;
  BannerType: Field<number>;
  BackgroundImage: ImageField;
}

type CategoryBannerStyleProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CategoryBannerStyleProps): JSX.Element => {
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
    // <h1>Category Banner Style</h1>
  );
};
