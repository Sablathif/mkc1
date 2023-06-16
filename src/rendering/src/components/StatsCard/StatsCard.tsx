import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import Reveal from 'react-awesome-reveal';
import { fadeIn } from '../../utils/data/keyframes';
import StatsCardType from './StatsCard.type';
import StatsCardData from './StatsCardData';

const StatsCard = (props: StatsCardType): JSX.Element => (
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
                {props?.fields?.SubTitle?.value}
              </h3>
              <RichText className="section-desc" field={props?.fields?.Description} />
            </div>
            <div className="col-lg-8 ">
              <div className="row">
                {props?.fields?.StatsItems?.map((data, index) => (
                  <StatsCardData props={data} index={index} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  </div>
);

export default StatsCard;
