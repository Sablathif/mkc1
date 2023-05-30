import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import dynamic from 'next/dynamic';

const SimpleBanner = dynamic(() => import('components/common/partials/home/cta-section'));
const BoxedBanner = dynamic(() => import('components/common/partials/elements/boxed-banner'));
const BannerWithoutCTA = dynamic(() => import('components/HeroBanner/BannerWitoutCTA'));

const HeroBanners: Record<string, any> = {
  BoxedBanner,
  BannerWithoutCTA,
  SimpleBanner,
};
type HeroBannerProps = ComponentProps & {
  params: { BannerType: Field<string> };
};

const HeroBanner = (props: HeroBannerProps): JSX.Element => {
  const bannerType = props?.params.BannerType.toString();
  const Component = bannerType ? HeroBanners[bannerType] : SimpleBanner;
  return <Component props={props} />;
};
export const Default = HeroBanner;
