import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import TwoColumnContentPropsType from './TwoColumnContent.type';

const TwoColumnContentListing = (props: TwoColumnContentPropsType): JSX.Element => {
  return (
    <>
      {props?.fields?.contentList?.map((item, index) => (
        <div className="container" key={index}>
          <RichText field={item?.fields?.description} />
        </div>
      ))}
    </>
  );
};

export default TwoColumnContentListing;
