import Image from 'next/image';
export default function FooterLeftIcons(props: any, index: any) {
  const datapay = props?.props;
  return (
    <figure className="payment" key={index}>
      <Image
        src={'/-' + datapay?.fields?.Icon?.value?.src?.split('/-').pop()}
        alt={datapay?.fields?.Icon?.value?.alt}
        width={datapay?.fields?.Icon?.value?.width}
        height={datapay?.fields?.Icon?.value?.height}
        loading="lazy"
      />
    </figure>
  );
}
