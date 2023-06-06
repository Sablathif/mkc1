import React from 'react';
import { videoHandler } from 'src/utils';
import ALink from 'components/feature/custom-link';
import Image from 'next/image';

function VideoListingCard(props: any) {
  const item = props?.props?.props?.props;
  return (
    <figure className="post-media">
      <ALink href="#" className={undefined} content={undefined} style={undefined}>
        <Image
          src={'/-' + item?.fields?.blogimages?.value?.src.split('/-').pop()}
          alt={item?.fields?.blogimages?.value?.alt}
          width={item?.fields?.blogimages?.value?.width}
          height={item?.fields?.blogimages?.value?.height}
          loading="lazy"
        />
      </ALink>
      <span className="video-play" onClick={videoHandler}></span>
      <video width="380">
        <source src={'/-' + item?.fields?.video?.value?.href?.split('/-').pop()} type="video/mp4" />
      </video>
    </figure>
  );
}
export default VideoListingCard;
