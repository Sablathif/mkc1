import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import { videoHandler } from 'src/utils';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider20 } from 'src/utils/data/carousel';
import Image from 'next/image';
function GridSidebar(BlogProps: any) {
  const blog = BlogProps.BlogProps.fields.blog;
  return (
    <div className="page-content with-sidebar">
      <div className="container">
        <div className="row gutter-lg">
          <div className="col-lg-12">
            <div className="posts grid row grid grid-2cols">
              {blog?.map((item: any, index: any) => (
                <div className="grid-item" key={index}>
                  {item.fields.postType.value.toLowerCase() === 'video' &&
                  item.fields.video.value.href != '' ? (
                    <>
                      <div className="post post-grid post-video ">
                        <figure className="post-media">
                          <ALink
                            href="#"
                            className={undefined}
                            content={undefined}
                            style={undefined}
                          >
                            <Image
                              src={item.fields.blogimages.value.src}
                              alt={item.fields.blogimages.value.alt}
                              width={item.fields.blogimages.value.width}
                              height={item.fields.blogimages.value.height}
                              loading="lazy"
                            />
                          </ALink>
                          <span className="video-play" onClick={videoHandler}></span>
                          <video width="380">
                            <source
                              src={'/-' + item.fields.video.value?.href.split('/-').pop()}
                              type="video/mp4"
                            />
                          </video>
                        </figure>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="post post-grid">
                        <figure className="post-media">
                          {item.fields.imageList.length > 1 ? (
                            <>
                              <OwlCarousel
                                adclassName="owl-theme owl-dot-inner owl-dot-white gutter-no"
                                options={mainSlider20}
                              >
                                <ALink
                                  href="#"
                                  className={undefined}
                                  content={undefined}
                                  style={undefined}
                                >
                                  <Image
                                    src={'/-' + item.fields.blogimages.value.src.split('/-').pop()}
                                    alt={item.fields.blogimages.value.alt}
                                    width={item.fields.blogimages.value.width}
                                    height={item.fields.blogimages.value.height}
                                    loading="lazy"
                                  />
                                </ALink>
                              </OwlCarousel>
                            </>
                          ) : (
                            <>
                              <ALink
                                href="#"
                                className={undefined}
                                content={undefined}
                                style={undefined}
                              >
                                <Image
                                  src={'/-' + item.fields.blogimages.value.src.split('/-').pop()}
                                  alt={item.fields.blogimages.value.alt}
                                  width={item.fields.blogimages.value.width}
                                  height={item.fields.blogimages.value.height}
                                  loading="lazy"
                                />
                              </ALink>
                            </>
                          )}
                        </figure>
                      </div>
                    </>
                  )}
                  <div key={index} className="post-details">
                    <div className="post-meta">
                      on{' '}
                      <ALink href="#" className="post-date" content={undefined} style={undefined}>
                        {new Date(item.fields.date.value).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                          timeZone: 'GMT',
                        })}
                      </ALink>{' '}
                      |{' '}
                      <ALink
                        href="#"
                        className="post-comment"
                        content={undefined}
                        style={undefined}
                      >
                        <span>{item.fields.comment.value}</span> Comments
                      </ALink>
                    </div>
                    <h4 className="post-title">
                      <ALink href="#" className={undefined} content={undefined} style={undefined}>
                        <Text field={item.fields.heading} />
                      </ALink>
                    </h4>
                    <p className="post-content">
                      <Text field={item.fields.description} />
                    </p>

                    <ALink
                      href={item.fields.ctaLink.value.href}
                      className="btn btn-link btn-underline btn-primary"
                      content={undefined}
                      style={undefined}
                    >
                      <Text field={item.fields.ctaText} />
                      <i className="d-icon-arrow-right"></i>
                    </ALink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(GridSidebar);
