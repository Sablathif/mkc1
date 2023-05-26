import { LazyLoadImage } from 'react-lazy-load-image-component';

function ImageSlide(props: any) {
  const data = props;
  console.log('Image Slide data', data);
  return (
    <div
      className="banner banner-fixed intro-slide1"
      style={{ backgroundColor: `${data.fields.BackgroundColor.value}` }}
    >
      <figure>
        <LazyLoadImage
          src={'/-' + data?.fields?.BackgroundImage?.value?.src.split('/-').pop()}
          alt="Intro Slider"
          effect="opacity"
          width="auto"
          height={630}
        />
      </figure>
    </div>
  );
}

export default ImageSlide;
