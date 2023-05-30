import dynamic from 'next/dynamic';
const IntroSlide1 = dynamic(() => import('./IntroSlide1'));
const IntroSlide2 = dynamic(() => import('./IntroSlide2'));
const IntroSlide3 = dynamic(() => import('./IntroSlide3'));

const SLIDERS: Record<string, any> = {
  IntroSlide1,
  IntroSlide2,
  IntroSlide3,
};

const SliderCard = (data: any): JSX.Element => {
  const slideVariant = data?.props?.fields?.SlideVariant?.value;
  const Component = slideVariant ? SLIDERS[slideVariant] : IntroSlide1;
  return <Component props={data} />;
};
export default SliderCard;
