import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function FooterDynamic(props: any, index: any) {
  const datainsta = props?.props;
  console.log('datainsta', datainsta);
  return (
    <div className="col-3" key={index}>
      <LazyLoadImage
        src={'/-' + datainsta?.fields?.Image?.value?.src?.split('/-').pop()}
        alt={datainsta?.fields?.Image?.value?.alt}
        width={datainsta?.fields?.Image?.value?.width}
        height={datainsta?.fields?.Image?.value?.height}
        loading="lazy"
      />
    </div>
  );
}
