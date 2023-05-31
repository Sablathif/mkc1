import dynamic from 'next/dynamic';
import HeroBannerType from './HeroBanner.type';

const SimpleBanner = dynamic(() => import('components/common/partials/home/cta-section'));
const BoxedBanner = dynamic(() => import('components/common/partials/elements/boxed-banner'));
const BannerWithoutCTA = dynamic(() => import('components/HeroBanner/BannerWitoutCTA'));

const HeroBanners: Record<string, any> = {
  BoxedBanner,
  BannerWithoutCTA,
  SimpleBanner,
};

const HeroBanner = (props: HeroBannerType): JSX.Element => {
  const bannerType = props?.params.BannerType.toString();
  const Component = bannerType ? HeroBanners[bannerType] : SimpleBanner;
  return <Component props={props} />;
};
export const Default = HeroBanner;
