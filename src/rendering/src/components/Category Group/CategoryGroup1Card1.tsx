import React from 'react';
import ALink from 'components/feature/custom-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategoryGroup1Card2 from './CategoryGroup1Card2';

function CategoryGroup1Card1(props: any, index: any) {
  const item = props?.props;
  return (
    <div className="category category-group-image" key={index}>
      <ALink
        href={item?.categoryURL?.url}
        className={undefined}
        content={undefined}
        style={undefined}
      >
        <figure className="category-media">
          <LazyLoadImage
            src={item?.image?.src}
            alt={item?.image?.alt}
            width={item?.image?.width}
            height={item?.image?.height}
            effect="opacity"
          />
        </figure>
      </ALink>
      <div className="category-content">
        <h4 className="category-name">
          <ALink
            href={item?.categoryURL?.url}
            className={undefined}
            content={undefined}
            style={undefined}
          >
            {item?.title?.value}
          </ALink>
        </h4>
        <ul className="category-list">
          {item?.categoryItems?.targetItems &&
            item?.categoryItems?.targetItems?.length > 0 &&
            item?.categoryItems?.targetItems
              .slice(0, 5)
              .map((categoryItem: any, categoryItemIndex: any) => (
                <CategoryGroup1Card2
                  props={categoryItem}
                  index={categoryItemIndex}
                  key={categoryItemIndex}
                />
              ))}
        </ul>
      </div>
    </div>
  );
}
export default CategoryGroup1Card1;
