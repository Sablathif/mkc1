import Image from 'next/image';

function ImageSlide(props: any) {
  const data = props?.props?.props;
  return (
    <div
      className="banner banner-fixed intro-slide1"
      style={{ backgroundColor: `${data?.fields?.BackgroundColor?.value}` }}
    >
      <figure>
        <Image
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
