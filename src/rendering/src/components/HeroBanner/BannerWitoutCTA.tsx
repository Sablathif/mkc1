import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

function BannerWitoutCTA(props: any) {
  const data = props?.props?.fields;
  return (
    <section
      className="page-header pl-4 pr-4"
      style={{
        backgroundImage: `url(${'/-' + data?.BackgroundImage?.value?.src.split('/-').pop()})`,
        backgroundColor: '#3C63A4',
      }}
    >
      <h3 className="page-subtitle font-weight-bold">{data?.SubTile?.value}</h3>
      <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">
        {data?.Title?.value}
      </h1>
      <span className="page-desc text-white mb-0">
        <RichText field={data?.Description}></RichText>
      </span>
    </section>
  );
}

export default React.memo(BannerWitoutCTA);
