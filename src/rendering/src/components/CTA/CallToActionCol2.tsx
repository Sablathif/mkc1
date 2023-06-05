import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '../../lib/component-props';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../../components/feature/custom-link';

type CallToActionCol2Props = ComponentProps & {
  fields: {
    Title: Field<string>;
    CallToActionItem: [
      fields: {
        fields: {
          Title: Field<string>;
          BannerTitle: Field<string>;
          BannerSubTitle: Field<string>;
          Description: Field<string>;
          CTAText: Field<string>;
          CTALink: Field<LinkField>;
          BackgroundImage: ImageField;
        };
      }
    ];
  };
};

export const Default = (props: CallToActionCol2Props): JSX.Element => (
  <>
    <section className="mt-10 pt-4">
      <div className="container">
        <h2 className="title title-center mb-5">{props.fields.Title.value}</h2>
        <div className="row">
          {props?.fields?.CallToActionItem?.map((data, index) => (
            <>
              {index == 0 ? (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="banner banner-1 banner-fixed content-center content-middle">
                    <figure>
                      <LazyLoadImage
                        src={'/-' + data?.fields?.BackgroundImage?.value?.src.split('/-').pop()}
                        alt="banner"
                        width="580"
                        height="330"
                        effect="opacity"
                      />
                    </figure>
                    <div className="banner-content">
                      <h3 className="banner-title text-uppercase font-weight-bold ls-m text-primary">
                        {data.fields.BannerTitle.value}
                      </h3>
                      <h4 className="banner-subtitle font-weight-bold ls-m text-white">
                        {data.fields.BannerSubTitle.value}
                      </h4>
                      <p className="ls-s text-light">{data.fields.Description.value}</p>
                      <ALink
                        href={data.fields.CTALink.value}
                        className="btn btn-outline btn-white btn-md btn-rounded"
                        content={undefined}
                        style={undefined}
                      >
                        {data.fields.CTAText.value}
                      </ALink>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {index == 1 ? (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="banner banner-2 banner-fixed content-center content-middle">
                    <figure>
                      <LazyLoadImage
                        src={'/-' + data?.fields?.BackgroundImage?.value?.src.split('/-').pop()}
                        alt="banner"
                        width="580"
                        height="330"
                        effect="opacity"
                      />
                    </figure>
                    <div className="banner-content">
                      <h3 className="banner-title text-uppercase font-weight-normal ls-m text-white mb-3">
                        {data.fields.BannerTitle.value}
                      </h3>
                      <p className="ls-normal text-white">{data.fields.Description.value}</p>
                      <form action="#" method="get" className="input-wrapper">
                        <input
                          type="email"
                          className="form-control w100 text-white text-center mb-4"
                          name="email"
                          id="email"
                          placeholder="Enter Your E-mail Address..."
                          required
                        />
                        <button
                          className="btn btn-white btn-md btn-ellipse btn-rounded"
                          type="submit"
                        >
                          {data.fields.CTAText.value}
                          <i className="d-icon-arrow-right"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  </>
);

// export const Default = CallToActionCol2;
