import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider10 } from 'src/utils/data/carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { videoHandler } from 'src/utils';
import Link from 'next/link';

function ClassicCard(props: any, index: any) {
  const item = props?.props;
  return (
    <div
      key={index}
      className={
        item.fields.postType.value.toLowerCase() === 'image'
          ? 'post post-classic  mb-7'
          : 'post post-classic post-video mb-7'
      }
    >
      {item.fields.postType.value.toLowerCase() === 'video' &&
      item.fields.video.value.href != '' ? (
        <>
          <figure className="post-media">
            <Link href="#" className={undefined} style={undefined}>
              <LazyLoadImage
                src={'/-' + item.fields.blogimages.value.src.split('/-').pop()}
                alt={item.fields.blogimages.value.alt}
                width={item.fields.blogimages.value.width}
                height={item.fields.blogimages.value.height}
                loading="lazy"
              />
            </Link>
            <span className="video-play" onClick={videoHandler}></span>
            <video width="380">
              <source
                src={'/-' + item.fields.video.value?.href.split('/-').pop()}
                type="video/mp4"
              />
            </video>
          </figure>
        </>
      ) : (
        <>
          <figure
            className={item.fields.imageList.length > 1 ? 'post-media ' : 'post-media overlay-zoom'}
          >
            {item.fields.imageList.length > 1 ? (
              <>
                <OwlCarousel
                  adClass="owl-theme owl-dot-inner owl-dot-white gutter-no"
                  options={mainSlider10}
                >
                  <Link href="#" className={undefined} content={undefined} style={undefined}>
                    <LazyLoadImage
                      src={'/-' + item.fields.blogimages.value.src.split('/-').pop()}
                      alt={item.fields.blogimages.value.alt}
                      width={item.fields.blogimages.value.width}
                      height={item.fields.blogimages.value.height}
                      loading="lazy"
                    />
                  </Link>
                </OwlCarousel>
              </>
            ) : (
              <>
                <Link href="#" className={undefined} content={undefined} style={undefined}>
                  <LazyLoadImage
                    src={'/-' + item.fields.blogimages.value.src.split('/-').pop()}
                    alt={item.fields.blogimages.value.alt}
                    width={item.fields.blogimages.value.width}
                    height={item.fields.blogimages.value.height}
                    loading="lazy"
                  />
                </Link>
              </>
            )}
          </figure>
        </>
      )}
      <div key={index} className="post-details">
        <div className="post-meta">
          by{' '}
          <Link href="#" className="post-author" content={undefined} style={undefined}>
            <Text field={item.fields.author} />
          </Link>{' '}
          on{' '}
          <Link href="#" className="post-date" content={undefined} style={undefined}>
            {new Date(item.fields.date.value).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              timeZone: 'GMT',
            })}
          </Link>{' '}
          |{' '}
          <Link href="#" className="post-comment" content={undefined} style={undefined}>
            <span>{item.fields.comment.value}</span> Comments
          </Link>
        </div>
        <h4 className="post-title">
          <Link href="#" className="" content={undefined} style={undefined}>
            <Text field={item.fields.heading} />
          </Link>
        </h4>
        <p className="post-content">
          <Text field={item.fields.description} />
        </p>
        <Link
          href={item.fields.ctaLink.value.href}
          className="btn btn-link btn-underline btn-primary"
          content={undefined}
          style={undefined}
        >
          <Text field={item.fields.ctaText} />
          <i className="d-icon-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
export default ClassicCard;
