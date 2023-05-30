import ALink from '../../components/feature/custom-link';
import CallToActionType from './CallToAction.type';
const CallToAction = (props: CallToActionType): JSX.Element => (
  <>
    <div className="container">
      <h2 className="title title-center mb-5">{props?.fields?.Title?.value}</h2>
      <div className="banner cta-simple">
        <div className="banner-content bg-white d-lg-flex align-items-center">
          <div className="banner-header pr-lg-7 pb-lg-0 pb-4 mb-lg-0 mb-6">
            <h3 className="banner-title font-weight-bold ls-s text-uppercase">
              {props?.fields?.BannerTitle?.value}
            </h3>
            <h4 className="banner-subtitle font-weight-normal ls-s text-body">
              {props?.fields?.BannerSubTitle?.value}
            </h4>
          </div>
          <div className="banner-text mb-lg-0 mb-4 mr-lg-4 pl-lg-6 pr-lg-0 pl-2 pr-2">
            <h4 className="font-weight-normal ls-normal text-uppercase mb-0">
              {props?.fields?.Text?.value}
            </h4>
            <p className="ls-m mb-0">{props?.fields?.Description?.value}</p>
          </div>
          <ALink
            href={props?.fields?.CTALink?.value}
            className="btn btn-primary btn-ellipse btn-md btn-rounded"
            content={undefined}
            style={undefined}
          >
            {props?.fields?.CTAText?.value}
            <i className="d-icon-arrow-right"></i>
          </ALink>
        </div>
      </div>
    </div>
  </>
);
export default CallToAction;
