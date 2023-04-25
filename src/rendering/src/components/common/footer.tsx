import { Image, Link, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
export default function Footer(props) {
  const data = props.props;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <ALink href="/" className="logo-footer">
                <Image field={data.fields.FooterLogo} width="154" height="43" />
              </ALink>
            </div>
            <div className="col-lg-9">
              <div className="widget widget-newsletter form-wrapper form-wrapper-inline">
                <div className="newsletter-info mx-auto mr-lg-2 ml-lg-4">
                  <h4 className="widget-title">
                    {' '}
                    <Text field={data.fields.SubscribeHeading} />
                  </h4>
                  <p>
                    <Text field={data.fields.SubscribeTitle} />
                  </p>
                </div>
                <form action="#" className="input-wrapper input-wrapper-inline">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email address here..."
                    required
                  />
                  <button className="btn btn-primary btn-rounded btn-md ml-2" type="submit">
                    <Link field={data.fields.SubscribeCTA} />
                    <i className="d-icon-arrow-right"></i>
                  </button>
                </form>
              </div>
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
                    <label>Phone: </label>
                    <ALink href="tel:#">Toll Free (123) 456-7890</ALink>
                  </li>
                  <li>
                    <label>Email: </label>
                    <ALink href="mailto:mail@riode.com">mail@riode.com</ALink>
                  </li>
                  <li>
                    <label>Address: </label>
                    <ALink href="#">123 Street Name, City, England</ALink>
                  </li>
                  <li>
                    <label>WORKING DAYS / HOURS: </label>
                  </li>
                  <li>
                    <ALink href="#">Mon - Sun / 9:00 AM - 8:00 PM</ALink>
                  </li>
                </ul>
              </div>
            </div>
            {/* {data?.fields?.FooterNavigation?.map((datanav, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="widget ml-lg-4">
                  <h4 className="widget-title">{datanav.fields.NavigationName.value}</h4>
                  <ul className="widget-body">
                    {datanav.fields.FooterNavigationList?.map((datalist, index) => (
                      <li key={index}>
                        <ALink href={datalist.fields.LinkUrl.value.url}>
                          {datalist.fields.LinkUrl.value.text}
                        </ALink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))} */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-instagram">
                <h4 className="widget-title">
                  <Text field={data.fields.Title} />
                </h4>
                <figure className="widget-body row">
                  {data?.fields?.FooterInstagram?.map((datainsta, index) => (
                    <div className="col-3" key={index}>
                      <Image field={datainsta.fields.Image} width="64" height="64" />
                    </div>
                  ))}
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            {data?.fields?.FooterCardIcon?.map((datapay, index) => (
              <figure className="payment" key={index}>
                <Image field={datapay.fields.Icon} />
              </figure>
            ))}
          </div>
          <div className="footer-center">
            {/* <p className="copyright ls-normal"> Commented because of hydration error */}
            <RichText field={data.fields.FooterCopyrightText} />
            {/* </p> Commented because of hydration error */}
          </div>
          <div className="footer-right">
            {data?.fields?.FooterSocialLinks?.map((datasocial, index) => (
              <div className="social-links" key={index}>
                <ALink
                  href={datasocial.fields.Link.value.href}
                  className={datasocial.fields.IconClass.value}
                ></ALink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
