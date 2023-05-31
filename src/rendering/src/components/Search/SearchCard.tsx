import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';

function SearchCard(props: any) {
  const item = props?.props;
  return (
    <div key={item?.id} className="col-xs-6 col-lg-3 mb-4 mb-10">
      <div className="product text-left">
        <div className="image-wrap">
          <ALink href="#" className={undefined} content={undefined} style={undefined}>
            <img
              src="https://d-themes.com/react_asset_api/riode/uploads/images/demo-1/products/product-7-2-300x338.jpg"
              alt={item?.Title?.value}
            />
          </ALink>
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
