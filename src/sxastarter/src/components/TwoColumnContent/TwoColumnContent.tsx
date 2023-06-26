import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { Field, ImageField, LinkField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  contentList: [
    children: {
      fields: {
        description: Field<string>;
      };
    }
  ];
}

type TwoColumnContentProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: TwoColumnContentProps): JSX.Element => {
  return (
    <div className="section container">
      {props?.fields?.contentList?.map((item, index) => (
        <RichText field={item?.fields?.description} key={index} />
      ))}
    </div>
    // <p>TwoColumnContent Component</p>
  );
};
