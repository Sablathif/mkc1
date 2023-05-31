import { ImageField, Image, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ALink from 'components/feature/custom-link';
import HeaderSearch from 'components/Header/HeaderSearch';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type HeaderMidSectionProps = ComponentProps & {
  fields: {
    Logo: ImageField;
    CallUsNow: RichTextField;
  };
};

const HeaderMidSection = (props: HeaderMidSectionProps): JSX.Element => (
  <header className="header header-border">
    <div className="header-middle sticky-header fix-top sticky-content">
      <div className="container">
        <div className="header-left">
          <ALink href="/" className="logo" content={undefined} style={undefined}>
            <LazyLoadImage
              src={'/-' + props.fields.Logo.value.src.split('/-').pop()}
              alt={`${props?.fields?.Logo?.value?.alt}`}
              width={`${props?.fields?.Logo?.value?.width}`}
              height={`${props?.fields?.Logo?.value?.height}`}
              loading="lazy"
            />
          </ALink>
          <HeaderSearch />
        </div>

        <div className="header-right">
          <ALink
            href="tel:#"
            className="icon-box icon-box-side"
            content={undefined}
            style={undefined}
          >
            <div className="icon-box-icon mr-0 mr-lg-2">
              <i className="d-icon-phone"></i>
            </div>
            {/* <div className="icon-box-content d-lg-show">
              <h4 className="icon-box-title">
                <RichText field={props.fields.CallUsNow} />
              </h4>
            </div> */}
          </ALink>
          {/* <span className="divider"></span>
          <ALink href="#" className="wishlist" content={undefined} style={undefined}>
            <i className="d-icon-heart"></i>
          </ALink>
          <span className="divider"></span> */}

          {/* <CartMenu /> */}
        </div>
      </div>
    </div>
  </header>
);
export const Default = HeaderMidSection;

// export default withDatasourceCheck()<HeaderMidSectionProps>(HeaderMidSection);
