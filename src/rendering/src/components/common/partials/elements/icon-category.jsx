import React from 'react';

import ALink from '../../../../components/feature/custom-link';

function iconcategory(props) {
  const categories = props.props.fields.Categories;
  const data = props.props;
  return (
    <>
      <section className="mt-10 pt-4">
        <h2 className="title title-center">{data.fields.Title.value}</h2>

        <div className="row">
          {categories?.map((data, index) => (
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4" key={index}>
              <div className="category category-icon">
                <ALink href={data.fields.CTA.value.href}>
                  <figure className="category-media">
                    <i className={data.fields.IconClass.value}></i>
                  </figure>

                  <div className="category-content">
                    <h4 className="category-name">{data.fields.Title.value}</h4>
                  </div>
                </ALink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default React.memo(iconcategory);
