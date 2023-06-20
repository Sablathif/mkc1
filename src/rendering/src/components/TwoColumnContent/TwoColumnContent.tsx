import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import TwoColumnContentPropsType from './TwoColumnContent.type';

const TwoColumnContentListing = (props: TwoColumnContentPropsType): JSX.Element => {
  return (
    <div className="section container">
      {props?.fields?.contentList?.map((item, index) => (
        <RichText field={item?.fields?.description} key={index} />
      ))}
    </div>
  );
};

export default TwoColumnContentListing;
