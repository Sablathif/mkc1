import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import Image from 'next/image';

function SearchCard(props: any) {
  const item = props?.props;
  return (
    <div key={item?.id} className="col-xs-6 col-lg-3 mb-4 mb-10">
      <div className="product text-left">
        <div className="image-wrap">
          <Image
            src={'/-' + item?.MediaList?.jsonValue[0]?.url.split('/-').pop()}
            alt={`${item?.MediaList?.jsonValue[0]?.name}`}
            width={`${item?.MediaList?.jsonValue[0]?.fields?.Width?.value}`}
            height={`${item?.MediaList?.jsonValue[0]?.fields?.Height?.value}`}
            loading="lazy"
          />
          <div className="product-action">
            <ALink
              href="#"
              className="btn-product btn-quickview"
              content={undefined}
              style={undefined}
            >
              Quick View
            </ALink>
          </div>
        </div>
      </div>
      <div className="product-cat mt-2">
        <RichText field={item?.Category}></RichText>
      </div>
      <h3 className="product-name mt-2">{item?.Title?.value}</h3>
      <p className="product-price">
        <RichText field={item?.Price}></RichText>
      </p>
      <span className="text-gray-900">
        <RichText field={item?.Color}></RichText>
      </span>
    </div>
  );
}

export default SearchCard;
