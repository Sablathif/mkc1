import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
//import { ComponentProps } from 'lib/component-props';
// import { GraphQLClient, gql } from 'graphql-request';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ALink from '../feature/custom-link';
import Card from '../feature/accordion/card';
// import { useQuery } from '@apollo/react-hooks';
// import InputRange from 'react-input-range';
// import SlideToggle from 'react-slide-toggle';

const SearchFilters = (props: any): JSX.Element => {
  const { type = 'left' /*isFeatured = false*/ } = props;
  const router = useRouter();
  const [filter, setFiler] = useState([]);
  const query = router.query;
  useEffect(() => {
    window.addEventListener('resize', hideSidebar);
    return () => {
      window.removeEventListener('resize', hideSidebar);
    };
  }, []);
  const getfilters = async () => {
    const graphQLClient = new GraphQLRequestClient(
      'https://onewebacceleratorsc.dev.local/sitecore/api/graph/items/master',
      { apiKey: '{FA64975E-A617-4651-BA91-1CCB72E19FB7}' }
    );
    const result: any = await graphQLClient.request(`query filterqurey{
    item(path:"{90737F37-53AA-4C0C-88F6-9BD14E2C1A28}"){
      children{
        name
        children{
          name
        }
      }
    }
  }`);
    setFiler(result.item.children);
  };

  useEffect(() => {
    getfilters();
  }, []);
  const containsAttrInUrl = (type: any, value: any) => {
    const currentQueries: any[] = query[type] ? query[type].split(',') ?? [] : '';
    return currentQueries && currentQueries.includes(value);
  };
  const getUrlForAttrs = (type, value) => {
    let currentQueries: any = query[type] ? query[type].split(',') : [];
    currentQueries = containsAttrInUrl(type, value)
      ? currentQueries.filter((item) => item !== value)
      : [...currentQueries, value];
    return currentQueries.join(',');
  };
  const toggleSidebar = (e) => {
    e.preventDefault();
    document
      .querySelector('body')
      .classList.remove(
        `${type === 'left' || type === 'off-canvas' ? 'sidebar-active' : 'right-sidebar-active'}`
      );

    const stickyWraper = e.currentTarget.closest('.sticky-sidebar-wrapper');

    const mainContent = e.currentTarget.closest('.main-content-wrap');
    if (mainContent && type !== 'off-canvas' && query.grid !== '4cols')
      mainContent.querySelector('.row.product-wrapper') &&
        mainContent.querySelector('.row.product-wrapper').classList.toggle('cols-md-4');

    if (mainContent && stickyWraper) {
      stickyWraper.classList.toggle('closed');

      if (stickyWraper.classList.contains('closed')) {
        mainContent.classList.add('overflow-hidden');
        clearTimeout(timerId);
      } else {
        timerId = setTimeout(() => {
          mainContent.classList.remove('overflow-hidden');
        }, 500);
      }
    }
  };

  const showSidebar = (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('sidebar-active');
  };

  const hideSidebar = () => {
    document
      .querySelector('body')
      .classList.remove(
        `${
          type === 'left' || type === 'off-canvas' || type === 'boxed' || type === 'banner'
            ? 'sidebar-active'
            : 'right-sidebar-active'
        }`
      );
  };
  return (
    <>
      <aside
        className={`col-lg-3 shop-sidebar skeleton-body ${
          type === 'off-canvas' ? '' : 'sidebar-fixed sticky-sidebar-wrapper'
        } ${type === 'off-canvas' || type === 'boxed' ? '' : 'sidebar-toggle-remain'} ${
          type === 'left' || type === 'off-canvas' || type === 'boxed' || type === 'banner'
            ? 'sidebar'
            : 'right-sidebar'
        }`}
      >
        <div className="sidebar-overlay" onClick={hideSidebar}></div>
        {type === 'boxed' || type === 'banner' ? (
          <a href="#" className="sidebar-toggle" onClick={showSidebar}>
            <i className="fas fa-chevron-right"></i>
          </a>
        ) : (
          ''
        )}
        <ALink className="sidebar-close" href="#">
          <i className="d-icon-times"></i>
        </ALink>

        <div className="sidebar-content">
          {
            <div className="sticky-sidebar">
              {type === 'boxed' || type === 'banner' ? (
                ''
              ) : (
                <div className="filter-actions mb-4">
                  <a
                    href="#"
                    className="sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded"
                    onClick={toggleSidebar}
                  >
                    Filter
                    {type === 'left' || type === 'off-canvas' ? (
                      <i className="d-icon-arrow-left"></i>
                    ) : (
                      <i className="d-icon-arrow-right"></i>
                    )}
                  </a>
                  <ALink
                    href={{
                      pathname: router.pathname,
                      query: {
                        grid: query.grid,
                        type: router.query.type ? router.query.type : null,
                      },
                    }}
                    scroll={false}
                    className="filter-clean"
                  >
                    Clean All
                  </ALink>
                </div>
              )}

              {filter.slice(0, 1).map((category, index) => (
                <div className="widget widget-collapsible" key={index}>
                  <Card title={category.name} type="parse" expanded={true}>
                    <ul className="widget-body filter-items">
                      {category.children.map((subitem, index) => (
                        <li
                          className={containsAttrInUrl('Size', subitem.name) ? 'active' : ''}
                          key={subitem + ' - ' + index}
                        >
                          <ALink
                            scroll={false}
                            href={{
                              pathname: router.pathname,
                              query: {
                                ...query,
                                page: 1,
                                Size: getUrlForAttrs('Size', subitem.name),
                                //type: router.query.type ? router.query.type : null
                              },
                            }}
                          >
                            {subitem.name}
                          </ALink>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
              {filter.slice(1, 2).map((category, index) => (
                <div className="widget widget-collapsible" key={index}>
                  <Card title={category.name} type="parse" expanded={true}>
                    <ul className="widget-body filter-items">
                      {category.children.map((subitem, index) => (
                        <li
                          className={containsAttrInUrl('Color', subitem.name) ? 'active' : ''}
                          key={subitem + ' - ' + index}
                        >
                          <ALink
                            scroll={false}
                            href={{
                              pathname: router.pathname,
                              query: {
                                ...query,
                                page: 1,
                                Color: getUrlForAttrs('Color', subitem.name),
                                //type: router.query.type ? router.query.type : null
                              },
                            }}
                          >
                            {subitem.name}
                          </ALink>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
              {filter.slice(2, 3).map((category, index) => (
                <div className="widget widget-collapsible" key={index}>
                  <Card title={category.name} type="parse" expanded={true}>
                    {category.name}
                    <ul className="widget-body filter-items">
                      {category.children.map((subitem, index) => (
                        <li
                          className={containsAttrInUrl('Brand', subitem.name) ? 'active' : ''}
                          key={subitem + ' - ' + index}
                        >
                          <ALink
                            scroll={false}
                            href={{
                              pathname: router.pathname,
                              query: {
                                ...query,
                                page: 1,
                                Brand: getUrlForAttrs('Brand', subitem.name),
                                //type: router.query.type ? router.query.type : null
                              },
                            }}
                          >
                            {subitem.name}
                          </ALink>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          }
        </div>
      </aside>
      {/* <ul>
        {filter.map((category, index) => (
          <li key={index}>
            {category.name}
            <ul>
              {category.children.map((subitem, index) => (
                 
                <li key={index} >
                
                    <ALink scroll={ false } 
                          href={ 
                                { pathname: router.pathname,
                                  query: { ...query,                            
                                  Size:subitem.name
                                  }
                                } 
                              }>{ subitem.name }
                    </ALink>
                  
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </>
  );
};
export default SearchFilters;
