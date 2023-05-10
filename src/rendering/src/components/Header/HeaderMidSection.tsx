import { ImageField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ALink from 'components/feature/custom-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import SearchBox from 'components/common/partials/search-box';

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
        </div>

        <div className="header-right">
          <ALink
            href="tel:#"
            className="icon-box icon-box-side"
            content={undefined}
            style={undefined}
          >
            <span></span>
          </ALink>
        </div>
      </div>
    </div>
  </header>
);
export const Default = HeaderMidSection;

// export default withDatasourceCheck()<HeaderMidSectionProps>(HeaderMidSection);
