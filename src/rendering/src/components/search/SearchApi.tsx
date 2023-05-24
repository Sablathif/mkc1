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
    //'https://cm.xmcloudcm.localhost/sitecore/api/graph/edge/ide',
    'https://xmc-14znhkjkgfiwyow0b42wwg.sitecorecloud.io/sitecore/api/graph/edge/ide',
    {
      apiKey: '{1047AEE5-9BCD-4DBF-9744-A26E12B79AB6}',
    }
  );

  const result: any = await graphQLClient.request(`query searchqyery {
      search(
        keyword: "${query?.keyword ? query.keyword : ''}",
        fieldsEqual: [
          ${Size},${Color},${Brand}
          	
      ]

        rootItem: "{0E8CFD79-ACFC-4CD7-B846-5A15A1443DD8}"
        
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
