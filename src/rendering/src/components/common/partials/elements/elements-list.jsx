import { RichText } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

import ALink from '../../../feature/custom-link';

function ElementsList(data) {
  const Icon = data.data.fields.Icon;
  return (
    <section className={'element-section ' + data.adClass}>
      <div className={'container ' + data.subClass}>
        <p className="text-center text-uppercase ls-s mb-1">{data.data.fields.Title.value}</p>
        <h2 className="title title-center ls-s mb-8">{data.data.fields.Heading.value}</h2>
        <div className="row elements">
          {Icon?.map((data, index) => (
            <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
              <ALink href={data.fields.Link.value.href} className="element-type">
                <div className="element element-accordian">
                  <RichText field={data.fields.Icon} />
                  <p>{data.fields.Title.value}</p>
                </div>
              </ALink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(ElementsList);
