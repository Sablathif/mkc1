import React from 'react';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ALink from 'components/feature/custom-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type CategoryBannerStyleProps = ComponentProps & {
  fields: {
    BannerTitle: Field<string>;
    Banners: [
      fields: {
        fields: {
          Title: Field<string>;
          SubTitle: Field<string>;
          Description: Field<string>;
          CTAText: Field<string>;
          CTALink: LinkField;
          CTAType: Field<string>;
          BannerType: Field<number>;
          Divider: Field<any>;
          BackgroundImage: ImageField;
        };
      }
    ];
    id: Field<any>;
    name: Field<any>;
  };
};

const CategoryBannerStyleListing = (props: CategoryBannerStyleProps): JSX.Element => {
  return (
    <>
      <div className="page-content">
        <div className="container">
          <section className="category-section masonry-section mt-10 pt-4">
            <h2 className="title title-center">{props.fields.BannerTitle.value}</h2>
            <div className="row grid gutter-sm">
              {props.fields?.Banners?.map((data, index) => (
                <div
                  key={index}
                  className={
                    data.fields.BannerType.value.toString() === 'height-x2'
                      ? 'grid-item height-x2'
                      : 'grid-item height-x1'
                  }
                >
                  <div
                    className={
                      data.fields.BannerType.value.toString() === 'height-x2'
                        ? 'category category-banner category-absolute overlay-light'
                        : 'category category-banner category-absolute text-white overlay-dark'
                    }
                  >
                    <ALink href="#" className={undefined} content={undefined} style={undefined}>
                      <figure className="category-media">
                        <LazyLoadImage
                        src={'/-' + data.fields.BackgroundImage.value?.src.split('/-').pop()}
                          alt={data.fields.BackgroundImage.value?.alt}
                          width="585"
                          height={
                            data.fields.BannerType.value.toString() === 'height-x2' ? '397' : '205'
                          }
                          effect="opacity"
                        />
                      </figure>
                    </ALink>

                    <div className="category-content">
                      <h4 className="category-name">{data.fields.Title.value}</h4>
                      <span className="category-count">
                        <span>{data.fields.SubTitle.value}</span> {data.fields.Description.value}
                      </span>
                      <ALink
                        href={data.fields.CTALink.value.href}
                        className="btn btn-underline btn-link"
                        content={undefined}
                        style={undefined}
                      >
                        {data.fields.CTAText.value}
                      </ALink>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-1 grid-space"></div>
            </div>
          </section>
        </div>
      </div>
      <br></br>
    </>
  );
};

export const Default = CategoryBannerStyleListing;
