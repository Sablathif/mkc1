import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../../../../components/feature/custom-link';
import { fadeInLeftShorter } from '../../../../utils/data/keyframes';

function DealSection(props) {
  const banners = props.props.fields.Banners;
  //let bannerType = BannerType;
  //let bannerClass = `banner-${bannerType}`;
  return (
    <section className="banner-group mt-4">
      <div className="container">
        <h2 className="title d-none">Banner Group</h2>

        <div className="row justify-content-center">
          {banners?.map((data, index) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000} triggerOnce>
                <div
                  className={`banner banner-fixed banner-radius content-middle overlay-zoom ${data.fields.BannerType.value}`}
                >
                  <figure>
                    <LazyLoadImage
                      src={data.fields.BackgroundImage.value.src}
                      alt="Banner Image"
                      effect="opacity, transform"
                      width={100}
                      height={220}
                    />
                  </figure>
                  {data.fields.BannerType.value.toLowerCase() == 'banner-4' ? (
                    <>
                      {' '}
                      <div className="banner-content d-flex align-items-center w-100 text-left">
                        <div className="mr-auto mb-4 mb-md-0">
                          <h4 className="banner-subtitle text-white">
                            {data.fields.SubTitle.value}
                            <br />
                            <span className="ls-l">{data.fields.Description.value}</span>
                          </h4>
                          <h3 className="banner-title text-primary font-weight-bold lh-1 mb-0">
                            {data.fields.Title.value}
                          </h3>
                        </div>
                        <ALink
                          href={data.fields.CTALink.value.href}
                          className="btn btn-primary btn-outline btn-rounded font-weight-bold text-white"
                        >
                          {data.fields.CTAText.value}
                          <i className="d-icon-arrow-right"></i>
                        </ALink>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="banner-content">
                        <h3 className="banner-title text-white mb-1">{data.fields.Title.value}</h3>

                        <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">
                          {data.fields.SubTitle.value}
                        </h4>

                        <hr className="banner-divider" />

                        <ALink
                          href={data.fields.CTALink.value.href}
                          className="btn btn-white btn-link btn-underline"
                        >
                          {data.fields.CTAText.value}
                          <i className="d-icon-arrow-right"></i>
                        </ALink>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
          {/* <div className="col-lg-4 col-sm-6 mb-4">
            <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000} triggerOnce>
              <div className="banner banner-3 banner-fixed banner-radius content-middle overlay-zoom">
                <figure>
                  <LazyLoadImage
                    src="./images/banners/banner1.jpg"
                    alt="Banner Image"
                    effect="opacity, transform"
                    width={100}
                    height={220}
                  />
                </figure>

                <div className="banner-content">
                  <h3 className="banner-title text-white mb-1">For Men's</h3>

                  <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">
                    Starting at $29
                  </h4>

                  <hr className="banner-divider" />

                  <ALink href="/shop" className="btn btn-white btn-link btn-underline">
                    Shop Now<i className="d-icon-arrow-right"></i>
                  </ALink>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-4 mb-4 order-lg-auto order-sm-last">
            <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
              <div className="banner banner-4 banner-fixed banner-radius content-middle content-center overlay-effect-two">
                <figure>
                  <LazyLoadImage
                    src="./images/banners/banner2.jpg"
                    alt="Banner Image"
                    effect="opacity"
                    width={100}
                    height={220}
                  />
                </figure>

                <div className="banner-content d-flex align-items-center w-100 text-left">
                  <div className="mr-auto mb-4 mb-md-0">
                    <h4 className="banner-subtitle text-white">
                      Up to 20% Off
                      <br />
                      <span className="ls-l">Black Friday</span>
                    </h4>
                    <h3 className="banner-title text-primary font-weight-bold lh-1 mb-0">Sale</h3>
                  </div>
                  <ALink
                    href="/shop"
                    className="btn btn-primary btn-outline btn-rounded font-weight-bold text-white"
                  >
                    Shop Now<i className="d-icon-arrow-right"></i>
                  </ALink>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-4 col-sm-6 mb-4">
            <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000} triggerOnce>
              <div className="banner banner-5 banner-fixed banner-radius content-middle overlay-zoom">
                <figure>
                  <LazyLoadImage
                    src="./images/banners/banner3.jpg"
                    alt="Banner Image"
                    effect="opacity, transform"
                    width={100}
                    height={220}
                  />
                </figure>

                <div className="banner-content">
                  <h3 className="banner-title text-white mb-1">Fashions</h3>
                  <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">
                    30% Off
                  </h4>
                  <hr className="banner-divider" />
                  <ALink href="/shop" className="btn btn-white btn-link btn-underline">
                    Shop Now<i className="d-icon-arrow-right"></i>
                  </ALink>
                </div>
              </div>
            </Reveal>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default React.memo(DealSection);
