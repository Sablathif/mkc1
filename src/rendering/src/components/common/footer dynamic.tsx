import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import FooterInstagram from 'components/Footer/FooterInstagram';
import FooterLeftIcons from 'components/Footer/FooterLeftIcons';
import FooterSocialLinks from 'components/Footer/FooterSocialLinks';
export default function FooterDynamic(props: any) {
  const data = props?.props;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <ALink href="/" className="logo-footer" content={undefined} style={undefined}>
                <img
                  src={'/-' + data?.fields?.FooterLogo?.value?.src?.split('/-').pop()}
                  alt="logo-footer"
                  width="154"
                  height="43"
                />
              </ALink>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-info">
                <h4 className="widget-title">Contact Info</h4>
                <ul className="widget-body">
                  <li>
                    <RichText field={data?.fields?.FooterDescription} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget ml-lg-4">
                <h4 className="widget-title">
                  {data?.fields?.FooterNavigation[1]?.fields?.NavigationName?.value}
                </h4>
                <ul className="widget-body">
                  <li>
                    <RichText
                      field={data?.fields?.FooterNavigation[1]?.fields?.FooterNavigations}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget ml-lg-4">
                <h4 className="widget-title">
                  {data?.fields?.FooterNavigation[0]?.fields?.NavigationName?.value}
                </h4>
                <ul className="widget-body">
                  <li>
                    <RichText
                      field={data?.fields?.FooterNavigation[0]?.fields?.FooterNavigations}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-instagram">
                <h4 className="widget-title">
                  <Text field={data?.fields?.Title} />
                </h4>
                <figure className="widget-body row">
                  {data?.fields?.FooterInstagram?.map((datainsta: any, index: any) => (
                    <FooterInstagram props={datainsta} index={index} key={index} />
                  ))}
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            {data?.fields?.FooterCardIcon?.map((datapay: any, index: any) => (
              <FooterLeftIcons props={datapay} index={index} key={index} />
            ))}
          </div>
          <div className="footer-center">
            <RichText field={data?.fields?.FooterCopyrightText} />
          </div>
          <div className="footer-right">
            <div className="social-links">
              {data?.fields?.FooterSocialLinks?.map((datasocial: any, index: any) => (
                <FooterSocialLinks props={datasocial} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}