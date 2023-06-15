import { LazyLoadImage } from 'react-lazy-load-image-component';
function ImageSlide(props: any) {
  const data = props?.props?.props;
  return (
    <div
      className="banner banner-fixed"
      style={{ backgroundColor: `${data?.fields?.BackgroundColor?.value}` }}
    >
      <figure>
        <LazyLoadImage
          src={'/-' + data?.fields?.BackgroundImage?.value?.src?.split('/-').pop()}
          alt="Intro Slider"
          // effect="opacity"
          width={data?.fields?.BackgroundImage?.value?.width}
          height={data?.fields?.BackgroundImage?.value?.height}
          loading="lazy"
        />
      </figure>
    </div>
  );
}
export default ImageSlide;
