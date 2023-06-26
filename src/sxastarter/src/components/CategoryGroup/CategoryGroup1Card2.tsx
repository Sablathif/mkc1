import React from 'react';
import Link from 'next/link';

function CategoryGroup1Card2(props: any, index: any) {
  const categoryItem = props?.props;
  return (
    <li key={index}>
      <Link href={categoryItem?.itemUrl?.url} className={undefined} style={undefined}>
        {categoryItem?.itemName?.value}
      </Link>
    </li>
  );
}
export default CategoryGroup1Card2;
