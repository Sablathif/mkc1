import React from 'react';
import ProductCard from '../Card/productCard';

function SearchResults({ CardData }) {
  return (
    <>
      <div className="row">
        {CardData.map((data, index) => (
          <ProductCard cardItem={data} key={index} />
        ))}
      </div>
    </>
  );
}

export default React.memo(SearchResults);
