import React from 'react';

function ProductCard({ cardItem }) {
  return (
    <>
      {cardItem ? (
        <div className="product-card col-md-4">
          <img
            src={
              cardItem?.item?.MediaList?.targetItems[0]?.url
                ? cardItem.item.MediaList.targetItems[0].url
                : '/-/media/Project/OneWebHeadless/Products/product-6-1-300x338.jpg'
            }
          ></img>
          <h6>{cardItem?.item?.Title?.value ? cardItem.item.Title.value : 'Default Title'}</h6>
          <p>
            {cardItem?.item?.Category?.value ? cardItem.item.Category.value : 'Default Category'}
          </p>
          <p>{cardItem?.item?.Price?.value ? cardItem.item.Price.value : 'Default Price'}</p>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default ProductCard;
