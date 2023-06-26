import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider6 } from 'src/utils/data/carousel';
import CategoryGroup1Card1 from './CategoryGroup1Card1';

interface Fields {
  data: {
    item: {
      componentTitle: { value: string };
      categories: Items1[];
    };
  };
}

interface Items1 {
  targetItems: [
    {
      name: string;
      title: { value: string };
      listingType: { value: string };
      iconClassName: { value: string };
      image: { src: string; alt: string; width: string; height: string };
      backgroudColour: { value: string };
      categoryURL: {
        name: string;
        value: string;
        id: string;
        linkType: string;
        url: string;
      };
      categoryItems: Items2[];
    }
  ];
}

interface Items2 {
  targetItems: [
    {
      itemName: { value: string };
      itemUrl: {
        name: string;
        value: string;
        id: string;
        linkType: string;
        url: string;
      };
    }
  ];
}

type CategoryGroup1Props = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CategoryGroup1Props): JSX.Element => {
  return (
    <div className="page-content">
        <div className="container">
          <section className="mt-10 pt-4 border-container">
            <h2 className="title title-center">
              <Text field={props?.fields?.data?.item?.componentTitle} />
            </h2>
            {/* <OwlCarousel adClass="owl-theme" options={mainSlider6}>
              {props?.fields?.data?.item?.categories?.targetItems?.map((data: any, index: any) => (
                <CategoryGroup1Card1 props={data} index={index} key={index} />
              ))}
            </OwlCarousel> */}
          </section>
        </div>
      </div>
    // <h1>Category Group 1</h1>
  );
};
