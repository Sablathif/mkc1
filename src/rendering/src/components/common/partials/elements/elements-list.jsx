import React from 'react';
import ElementsListCard from './ElementsListCard';

function ElementsList(data) {
  const Icon = data?.data?.fields?.Icon;
  return (
    <section className={'element-section ' + data?.adClass}>
      <div className={'container ' + data?.subClass}>
        <p className="text-center text-uppercase ls-s mb-1">{data?.data?.fields?.Title?.value}</p>
        <h2 className="title title-center ls-s mb-8">{data?.data?.fields?.Heading?.value}</h2>
        <div className="row elements">
          {Icon?.map((data, index) => (
            <ElementsListCard props={data} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(ElementsList);
