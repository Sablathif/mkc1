import React from 'react';
import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { Reveal } from 'react-awesome-reveal';
import { fadeIn } from 'src/utils/data/keyframes';
import { ComponentProps } from 'lib/component-props';
import CounterCards from './StatsCardData';

interface Fields {
  CounterCards: CounterCard[];
  Title: Field<string>;
  SubTitle: Field<string>;
  Description: Field<string>;
}
interface CounterCard {
  fields: {
    Title: Field<string>;
    SubTitle: Field<string>;
    Description: Field<string>;
    CountUp: number;
  };
}

type StatsCardProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: StatsCardProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;

  return (
    <div className="page-content mt-10 pt-10">
      <Reveal keyframes={fadeIn} delay={50} duration={1000} triggerOnce>
        <section className="about-section pb-10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 mb-10 mb-lg-4">
                <h5 className="section-subtitle lh-2 ls-md font-weight-normal">
                  {props?.fields?.Title?.value}
                </h5>
                <h3 className="section-title lh-1 font-weight-bold">
                  {/* {props?.fields?.SubTitle?.value} */}
                </h3>
                <RichText className="section-desc" field={props?.fields?.Description} />
              </div>
              <div className="col-lg-8 ">
                <div className="row">
                  {props?.fields?.CounterCards?.map((data, index) => (
                    <CounterCards props={data} index={index} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};
