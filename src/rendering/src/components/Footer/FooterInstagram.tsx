import Image from 'next/image';
export default function FooterDynamic(props: any, index: any) {
  const datainsta = props?.props;
  return (
    <div className="col-3" key={index}>
      <Image
        src={'/-' + datainsta?.fields?.Image?.value?.src?.split('/-').pop()}
        alt={datainsta?.fields?.Image?.value?.alt}
        width={datainsta?.fields?.Image?.value?.width}
        height={datainsta?.fields?.Image?.value?.height}
        loading="lazy"
      />
    </div>
  );
}
