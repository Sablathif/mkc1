import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider6 } from 'src/utils/data/carousel';
import CategoryGroup1Type from './CategoryGroup1.type';
import CategoryGroup1Card1 from './CategoryGroup1Card1';

const CategoryGroup1Listing = (props: CategoryGroup1Type): JSX.Element => {
  return (
    <>
      <div className="page-content">
        <div className="container">
          <section className="mt-10 pt-4 border-container">
            <h2 className="title title-center">
              <Text field={props?.fields?.data?.item?.componentTitle} />
            </h2>
            <OwlCarousel adClass="owl-theme" options={mainSlider6}>
              {props?.fields?.data?.item?.categories?.targetItems?.map((data: any, index: any) => (
                <CategoryGroup1Card1 props={data} index={index} key={index} />
              ))}
            </OwlCarousel>
          </section>
        </div>
      </div>
    </>
  );
};

export const Default = CategoryGroup1Listing;
