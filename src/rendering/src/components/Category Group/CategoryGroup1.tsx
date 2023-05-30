import React from 'react';
import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider6 } from 'src/utils/data/carousel';
import CategoryGroup1Type from './CategoryGroup1.type';
import CategoryGroup1Card1 from './CategoryGroup1Card1';
// const endpoint = 'https://cm.xmcloudcm.localhost/sitecore/api/graph/edge';
const endpoint = 'https://xmc-14znhkjkgfiwyow0b42wwg.sitecorecloud.io/sitecore/api/graph/edge';
const apiKey = '{1047aee5-9bcd-4dbf-9744-a26e12b79ab6}';
const query = gql`
  # Write your query or mutation here
  query {
    # path can be an item tree path or GUID-based id
    item(
      path: "/sitecore/content/PLAY/playwebsite/XMCDemoHome/productcategory/Page Components/Category Group/CategoryGroupList"
      language: "en"
    ) {
      # items can be cast to a Template type with inline fragments
      ... on CategoryGroupList {
        componentTitle {
          value
        }
        categories {
          name
          targetItems {
            id
            name
            ... on Categories {
              title {
                value
              }
              listingType {
                value
              }
              iconClassName {
                value
              }
              image {
                src
                alt
                width
                height
                src
              }
              backgroudColour {
                value
              }
              categoryURL {
                name
                value
                id
                linkType
                url
              }
              categoryItems {
                name
                targetItems {
                  ... on CategoryItems {
                    itemName {
                      value
                    }
                    itemUrl {
                      name
                      value
                      id
                      linkType
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
      # fields can be cast to a Field type with inline fragments
    }
  }
`;
const graphQLClient = new GraphQLRequestClient(endpoint, {
  apiKey: apiKey,
});
const fetchUser = async () => {
  const content: CategoryGroup1Type = await graphQLClient.request(query);
  return content;
};

const CategoryGroup1 = () => {
  const { isLoading, data } = useQuery(['get-user'], fetchUser);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="page-content">
        <div className="container">
          <section className="mt-10 pt-4 border-container">
            <h2 className="title title-center">
              <Text field={data?.item?.componentTitle}></Text>
            </h2>
            <OwlCarousel adClass="owl-theme" options={mainSlider6}>
              {data?.item?.categories?.targetItems &&
                data?.item?.categories?.targetItems?.length > 0 &&
                data?.item?.categories?.targetItems?.map((item: any, index) => (
                  <CategoryGroup1Card1 props={item} index={index} key={index} />
                ))}
            </OwlCarousel>
          </section>
        </div>
      </div>
    </>
  );
};

export default CategoryGroup1;
