// import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ComponentProps } from 'lib/component-props';
// import { startTransition, Suspense } from 'react';
import SearchFilters from './ProductSearchFilters';
import React, { createContext, useState, useEffect } from 'react';
//import { search } from './SearchApi';
import SearchResults from './SearchResult';
import { useRouter } from 'next/router';
import Pagination from '../feature/pagination';

export const SearchInfo = createContext();

const SearchListing = (): JSX.Element => {
  const router = useRouter();
  const query = router.query;
  const [searchResultData, setResult] = useState([]);
  const [searchResultCount, setResultCount] = useState('undefined');
  const [Keyword, setKeyword] = useState();
  const [Query, setQuery] = useState();

  // let querystring = router.query.search;
  const perPage = 3;
  const totalPage = searchResultCount
    ? parseInt(searchResultCount / perPage) + (searchResultCount % perPage ? 1 : 0)
    : 1;
  const page = parseInt(query.page ? query.page : 1);
 
  console.log(searchResultCount);
  useEffect(() => {
    typeof Query !== 'undefined'
      ? setKeyword({
          keyword: router?.query?.search ? router.query.search : '',
          Size: router?.query?.Size ? router.query.Size : '',
          Color: router?.query?.Color ? router.query.Color : '',
          Brand: router?.query?.Brand ? router.query.Brand : '',
          page: parseInt(query.page ? query.page : 1),
        })
      : '';
  }, [Query]);

  useEffect(() => {
    typeof router.query.search !== 'undefined' ? setQuery(router.query) : '';
  }, [query]);

  useEffect(() => {
    if (typeof router.query.search !== 'undefined') {
      const searchDataAsync = async (QueryData) => {
        const result = await search(QueryData);
        setResult(result.cardData);
        setResultCount(result.totalCount);
      };
      searchDataAsync(Keyword);
    }
  }, [Keyword]);

  return (
    <>
      <div className="container mt-10">
        <div className="row justify-content-center">
          <SearchFilters />

          <div className="col-lg-9 col-sm-12 ">
            {searchResultCount == 'undefined' ? <h2 className="text-center">🌀 Loading...</h2> : ''}
            {searchResultCount == 0 ? (
              <p className="ml-1 text-center">No products were found matching your selection.</p>
            ) : (
              <SearchResults
                CardData={searchResultData.slice(
                  perPage * (page - 1),
                  Math.min(perPage * page, searchResultCount)
                )}
              />
            )}
            {searchResultCount > 0 ? (
              <div className="toolbox toolbox-pagination">
                {
                  <p className="show-info">
                    Showing{' '}
                    <span>
                      {perPage * (page - 1) + 1} - {Math.min(perPage * page, searchResultCount)} of{' '}
                      {searchResultCount}
                    </span>
                    Products
                  </p>
                }
                <Pagination totalPage={totalPage} />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

//export default SearchListing;
export const Default = SearchListing;
