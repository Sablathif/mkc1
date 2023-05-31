import React from 'react';
import IconCategoryCard from './IconCategoryCard';

function iconcategory(props) {
  const categories = props?.props?.fields?.Categories;
  const data = props?.props;
  return (
    <>
      <section className="mt-10 pt-4">
        <h2 className="title title-center">{data?.fields?.Title?.value}</h2>
        <div className="row">
          {categories?.map((data, index) => (
            <IconCategoryCard props={data} index={index} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default React.memo(iconcategory);
