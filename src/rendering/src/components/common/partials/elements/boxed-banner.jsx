import React from 'react';

import ALink from '../../../feature/custom-link';

function boxedbanner(data) {
  return (
    <>
      <div className="page-content mb-10 pb-3">
        <div className="container">
          <div
            className="shop-boxed-banner banner mb-lg-6"
            style={{
              backgroundImage: `url(${data.props.fields.BackgroundImage?.value.src})`,
              backgroundColor: '#f2f2f3',
            }}
          >
            <div className="banner-content">
              <h4 className="banner-subtitle font-weight-bold ls-normal text-uppercase text-white">
                {data.props.fields.Heading.value}
              </h4>
              <h1 className="banner-title font-weight-bold text-white">
                {data.props.fields.Title.value}
              </h1>
              <ALink
                href={data.props.fields.CTA.value.href}
                className="btn btn-white btn-outline btn-rounded text-normal"
              >
                {data.props.fields.CTA.value.text}
                <i className="d-icon-arrow-right"></i>
              </ALink>
            </div>
          </div>

          {/* <div className="row gutter-lg mt-6">
                        <SidebarFilterOne type="boxed" />

                        <div className="col-lg-9">
                            <ProductListOne type="boxed" />
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
}

export default React.memo(boxedbanner);
