import {
  withDatasourceCheck,
  ImageField,
  Image,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ALink from 'components/feature/custom-link';
import SearchBox from 'components/common/partials/search-box';

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
          {/* <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                    <i className="d-icon-bars2"></i>
                </ALink> */}

          <ALink href="/" className="logo" content={undefined} style={undefined}>
            <Image field={props.fields.Logo} />
          </ALink>

          {<SearchBox />}
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
            <div className="icon-box-content d-lg-show">
              <h4 className="icon-box-title">
                <RichText field={props.fields.CallUsNow} />
              </h4>
            </div>
          </ALink>
          <span className="divider"></span>
          <ALink href="#" className="wishlist" content={undefined} style={undefined}>
            <i className="d-icon-heart"></i>
          </ALink>
          <span className="divider"></span>

          {/* <CartMenu /> */}
        </div>
      </div>
    </div>
  </header>
);

export default withDatasourceCheck()<HeaderMidSectionProps>(HeaderMidSection);
