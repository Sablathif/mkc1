import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

import CtaSection from 'components/common/partials/home/cta-section';
import BoxedBanner from 'components/common/partials/elements/boxed-banner';
import BannerWitoutCTA from 'components/HeroBanner/BannerWitoutCTA';

type HeroBannerProps = ComponentProps & {
  params: { BannerType: Field<string> };
};

const HeroBanner = (props: HeroBannerProps): JSX.Element => (
  <>
    {props.params.BannerType.toString() == 'BoxedBanner' ? <BoxedBanner props={props} /> : <></>}
    {props.params.BannerType.toString() == 'BannerWithoutCTA' ? (
      <BannerWitoutCTA bannerProps={props} />
    ) : (
      <></>
    )}
    {props.params.BannerType.toString() == 'SimpleBanner' ? <CtaSection props={props} /> : <></>}
  </>
);
export const Default = HeroBanner;

// export default withDatasourceCheck()<HeroBannerProps>(HeroBanner);
