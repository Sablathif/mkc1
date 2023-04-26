import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
// import { GraphQLClient, gql } from 'graphql-request';
// import {   useState, useEffect } from 'react';

export async function search(query: any) {
  const Size: string =
    query?.Size != '' ? `{name:"Size",value: "${query?.Size ? query.Size : ''}"}` : '';
  const Color: string =
    query?.Color != '' ? `{name:"Size",value: "${query?.Color ? query.Color : ''}"}` : '';
  const Brand: string =
    query?.Brand != '' ? `{name:"Size",value: "${query?.Brand ? query.Brand : ''}"}` : '';
  //let returnData = '';

  const graphQLClient: any = new GraphQLRequestClient(
    'https://onewebacceleratorsc.dev.local/sitecore/api/graph/items/master',
    {
      apiKey: '{FA64975E-A617-4651-BA91-1CCB72E19FB7}',
    }
  );

  const result: any = await graphQLClient.request(`query searchqyery {
      search(
        keyword: "${query?.keyword ? query.keyword : ''}",
        fieldsEqual: [
          ${Size},${Color},${Brand}
          	
      ]

        rootItem: "/sitecore/content/OneWebHeadless/DefaultSite/Home/product"
        
      ) {
        results {
          totalCount
          items {
            name
            item {
              Title: field(name: "Title") {
                value
              }
              Category: field(name: "Category") {
                value
              }
              Price: field(name: "Price") {
                value
              }
              MediaList: field(name: "MediaList") {
                ...MediaList
              }
            }
          }
        }
      }
    }
    
    fragment MediaList on MultilistField {
      targetItems {
        name
        url
      }
    }
          
  `);
  const returnData: { cardData: any; totalCount: any } = {
    cardData: result?.search?.results?.items ? result.search.results.items : '',
    totalCount: result?.search?.results?.totalCount ? result.search.results.totalCount : '',
  };
  return returnData;
}
