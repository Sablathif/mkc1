import React from 'react';

import ALink from '../../../feature/custom-link';

function boxedbanner(props) {
  return (
    <>
      <div className="page-content mb-10 pb-3">
        <div className="container">
          <div
            className="shop-boxed-banner banner mb-lg-6"
            style={{
              backgroundImage: `url(${props?.props?.fields?.BackgroundImage?.value.src})`,
              backgroundColor: '#f2f2f3',
            }}
          >
            <div className="banner-content">
              <h4 className="banner-subtitle font-weight-bold ls-normal text-uppercase text-white">
                {props?.props?.fields?.Heading?.value}
              </h4>
              <h1 className="banner-title font-weight-bold text-white">
                {props?.props?.fields?.Title?.value}
              </h1>
              <ALink
                href={props?.props?.fields?.CTA?.value?.href}
                className="btn btn-white btn-outline btn-rounded text-normal"
              >
                {props?.props?.fields?.CTA?.value?.text}
                <i className="d-icon-arrow-right"></i>
              </ALink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(boxedbanner);
