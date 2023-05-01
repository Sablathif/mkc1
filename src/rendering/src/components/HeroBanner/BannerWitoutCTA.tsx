import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

function BannerWitoutCTA(bannerProps: any) {
  const props = bannerProps.bannerProps.fields;
  return (
    <section
      className="page-header pl-4 pr-4"
      style={{
        backgroundImage: `url(${props.BackgroundImage?.value.src})`,
        backgroundColor: '#3C63A4',
      }}
    >
      <h3 className="page-subtitle font-weight-bold">{props.SubTile.value}</h3>
      <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">
        {props.Title.value}
      </h1>
      <span className="page-desc text-white mb-0">
        <RichText field={props.Description}></RichText>
      </span>
    </section>
  );
}

export default React.memo(BannerWitoutCTA);
