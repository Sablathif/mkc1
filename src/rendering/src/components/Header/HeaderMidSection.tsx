import ALink from 'components/feature/custom-link';
import HeaderSearch from 'components/Header/HeaderSearch';
import HeaderMidSectionType from './HeaderMidSection.type';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Default = (props: HeaderMidSectionType): JSX.Element => (
  <header className="header header-border">
    <div className="header-middle sticky-header fix-top sticky-content">
      <div className="container">
        <div className="header-left">
          <ALink href="/" className="logo" content={undefined} style={undefined}>
            <LazyLoadImage
              src={'/-' + props?.fields?.Logo?.value?.src?.split('/-').pop()}
              alt={`${props?.fields?.Logo?.value?.alt}`}
              width={`${props?.fields?.Logo?.value?.width}`}
              height={`${props?.fields?.Logo?.value?.height}`}
              loading="lazy"
            />
          </ALink>
          <HeaderSearch />
        </div>
        <div className="header-right">
          <ALink href="#" className="icon-box icon-box-side" content={undefined} style={undefined}>
            <div className="icon-box-icon mr-0 mr-lg-2">
              <i className="d-icon-phone"></i>
            </div>
          </ALink>
        </div>
      </div>
    </div>
  </header>
);
