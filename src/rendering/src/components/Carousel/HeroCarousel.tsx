import SlickCarousel from 'components/feature/slick-carousel';
import { introSlider } from '../../utils/data/carousel';
import HeroCarouselType from './HeroCarousel.type';
import SliderCard from './SliderCard';

const HeroCarousel = (props: HeroCarouselType): JSX.Element => (
  <SlickCarousel adClass="intro-slider animation-slider" options={introSlider}>
    {props?.fields?.Slides?.map((data) => (
     <SliderCard props={data} />
    ))}
  </SlickCarousel>
);

export const Default = HeroCarousel;
// export default withDatasourceCheck()<HeroCarouselProps>(HeroCarousel);
