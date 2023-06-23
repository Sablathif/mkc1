import dynamic from 'next/dynamic';
const Image = dynamic(() => import('./ImageSlide'));
const Video = dynamic(() => import('./VideoSlide'));

const IMAGEORVIDEO: Record<string, any> = {
  Image,
  Video,
};

const Sliders = (props: any): JSX.Element => {
  const backgroundType = props.props?.fields?.BackgroundType?.value;
  const Component = backgroundType ? IMAGEORVIDEO[backgroundType] : Image;
  return <Component props={props} />;
};

export default Sliders;
