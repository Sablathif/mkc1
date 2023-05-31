import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState, useEffect } from 'react';
import ALink from '../feature/custom-link';
import { useRouter } from 'next/router';

const query = `
query SearchQuery
(
  $rootItem: String!, $limit: Int, $templateId: String!, $keyword: String!
) 
{
  pageOne: search
  (
    where: 
      {
        AND: [
          {
            name: "_parent"
            value: $rootItem
            operator: EQ
          },
          {
            name: "_templates"
            value: $templateId
            operator: EQ
          },
          { name: "Title", value: $keyword, operator: CONTAINS },
        ]
      },
      first: $limit
  ) 
  {
    total
    pageInfo 
    {
      endCursor
    }
    results 
    {
      name
        id
        template {
          id
        }
        Title: field(name: "Title") {
          value
        }
        Category: field(name: "Category") {
          value
        }
        Price: field(name: "Price") {
          value
        }
        Size: field(name: "Size") {
          value
        }
        Color: field(name: "Color") {
          value
        }
        Brand: field(name: "Brand") {
          value
        }
        MediaList: field(name: "MediaList") {
          ... on MultilistField {
            value
          }
      }
      path
    }
  }
}`;

const SearchListing = () => {
  const router = useRouter();
  const API_KEY = '1047AEE5-9BCD-4DBF-9744-A26E12B79AB6';
  //const API_URL = `https://cm.xmcloudcm.localhost/sitecore/api/graph/edge?sc_apikey=${API_KEY}`;
  const API_URL = `https://xmc-3grg5v0uit5oa43nqowrr0.sitecorecloud.io/sitecore/api/graph/edge?sc_apikey=${API_KEY}`;
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [displayedResults, setDisplayedResults] = useState([]);
  const [limit, setLimit] = useState(10);
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  useEffect(() => {
    const queryString = router?.asPath?.split('=')[1];
    if (queryString !== null && queryString !== '' && queryString !== undefined) {
      setSearchTerm(queryString);
      handleSearch();
    }
  }, [state]);

  useEffect(() => {
    setDisplayedResults(results?.slice(0, limit));
  }, [results, limit]);

  const handleSearch = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          rootItem: '{DFECC2B4-0CEF-4C1F-B321-33CC92978F8F}',
          limit: 20,
          templateId: '{BD30A65C-A646-474F-9DDE-1A21687AB192}',
          keyword: searchTerm,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(
          data?.data?.pageOne?.results?.filter((item: any) =>
            item?.Title?.value.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const handleLoadMore = () => {
    setLimit(limit + 1);
  };
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            {displayedResults?.map((item: any) => (
              <div key={item?.id} className="col-xs-6 col-lg-3 mb-4 mb-10">
                <div className="product text-left">
                  <div className="image-wrap">
                    <ALink href="#" className={undefined} content={undefined} style={undefined}>
                      <img
                        src="https://d-themes.com/react_asset_api/riode/uploads/images/demo-1/products/product-7-2-300x338.jpg"
                        alt={item?.Title.value}
                      />
                    </ALink>
                    <div className="product-action">
                      <ALink
                        href="#"
                        className="btn-product btn-quickview"
                        content={undefined}
                        style={undefined}
                      >
                        Quick View
                      </ALink>
                    </div>
                  </div>
                </div>
                <div className="product-cat mt-2">
                  <RichText field={item?.Category}></RichText>
                </div>
                <h3 className="product-name mt-2">{item?.Title?.value}</h3>
                <p className="product-price">
                  <RichText field={item?.Price}></RichText>
                </p>
                <span className="text-gray-900">
                  <RichText field={item?.Color}></RichText>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {results?.length > limit && (
        <button
          className="w-auto mb-3 mx-auto text-center px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </>
  );
};

export const Default = SearchListing;
