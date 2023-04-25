import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider20 } from 'src/utils/data/carousel';
import { videoHandler } from 'src/utils';
import ALink from 'components/feature/custom-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import BlogSidebar from 'components/common/partials/post/blog-sidebar';

function Listing(BlogProps) {
  const blog = BlogProps.BlogProps.fields.blog;
  console.log(blog[0].fields.imageList);
  console.log(blog[0].fields.blogimages);
  return (
    <div className="page-content with-sidebar">
      <div className="container">
        <div className="row gutter-lg">
          <div className="col-lg-12">
            <div className="posts">
              {blog?.map((item, index) => (
                <div
                  key={index}
                  className={
                    item.fields.postType.value.toLowerCase() === 'image'
                      ? 'post post-list mb-4'
                      : 'post post-list post-video mb-4'
                  }
                >
                  {item.fields.postType.value.toLowerCase() === 'video' &&
                  item.fields.video.value.href != '' ? (
                    <>
                      <figure className="post-media">
                      <ALink href="#" className={undefined} content={undefined} style={undefined}>
                          <LazyLoadImage
                            src={item.fields.blogimages.value.src}
                            alt={item.fields.blogimages.value.alt}
                            width={item.fields.blogimages.value.width}
                            height={item.fields.blogimages.value.height}
                          />
                        </ALink>
                        <span className="video-play" onClick={videoHandler}></span>
                        <video width="380">
                          <source src={item.fields.video.value?.href} type="video/mp4" />
                        </video>
                      </figure>
                    </>
                  ) : (
                    <>
                      <figure
                        className={
                          item.fields.imageList.length > 1
                            ? 'post-media '
                            : 'post-media overlay-zoom'
                        }
                      >
                        <ALink href="#" className={undefined} content={undefined} style={undefined}>
                          <LazyLoadImage
                            src={item.fields.blogimages.value.src}
                            alt={item.fields.blogimages.value.alt}
                            width={item.fields.blogimages.value.width}
                            height={item.fields.blogimages.value.height}
                          />
                        </ALink>
                      </figure>
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
// export const Default = Listing;
export default React.memo(Listing);
