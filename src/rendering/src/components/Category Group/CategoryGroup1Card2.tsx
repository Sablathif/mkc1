import React from 'react';
import ALink from 'components/feature/custom-link';

function CategoryGroup1Card2(props: any, index: any) {
  const categoryItem = props?.props;
  return (
    <li key={index}>
      <ALink
        href={categoryItem?.itemUrl?.url}
        className={undefined}
        content={undefined}
        style={undefined}
      >
        {categoryItem?.itemName?.value}
      </ALink>
    </li>
  );
}
export default CategoryGroup1Card2;
