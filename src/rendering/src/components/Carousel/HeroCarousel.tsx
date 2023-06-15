import SlickCarousel from 'components/feature/slick-carousel';
import { introSlider } from '../../utils/data/carousel';
import HeroCarouselType from './HeroCarousel.type';
import SliderCard from './SliderCard';

export const Default = (props: HeroCarouselType): JSX.Element => (
  <SlickCarousel adClass="intro-slider animation-slider" options={introSlider}>
    {props?.fields?.Slides?.map((data, index) => (
      <SliderCard props={data} index={index} key={index} />
    ))}
  </SlickCarousel>
);
