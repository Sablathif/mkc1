function VideoSlide(props: any) {
  const data = props?.props?.props;
  return (
    <div
      className="banner banner-fixed intro-slide1"
      style={{ backgroundColor: `${data?.fields?.BackgroundColor?.value}` }}
    >
      <figure>
        <video
          src={'/-' + data?.fields?.BackgroundVideo?.value?.href.split('/-').pop()}
          width="1903"
          height="630"
          autoPlay={true}
          muted
          loop
        ></video>
      </figure>
    </div>
  );
}

export default VideoSlide;
