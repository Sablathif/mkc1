import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchCard from './SearchCard';

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
            jsonValue
          }
      }
      path
    }
  }
}`;

export const Default = () => {
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
            {displayedResults?.map((item: any, index: any) => (
              <SearchCard props={item} key={index}></SearchCard>
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

// export const Default = SearchListing;
