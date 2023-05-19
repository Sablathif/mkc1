import React from 'react';
import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import {
  Field,
  GraphQLRequestClient,
  ImageField,
  LinkField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider6 } from 'src/utils/data/carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
  const content: CategoryGroup1Props = await graphQLClient.request(query);
  return content;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
type CategoryGroup1Props = {
  item: {
    componentTitle: Field<string>;
    categories: {
      name: Field<string>;
      targetItems: Categories[];
    };
  };
};

type Categories = {
  title: TextField;
  listingType: TextField;
  iconClassName: TextField;
  image: ImageField;
  backgroudColour: TextField;
  categoryURL: LinkField;
  categoryItems: {
    name: Field<string>;
    targetItems: CategoryItems[];
  };
};
type CategoryItems = {
  itemName: TextField;
  itemUrl: LinkField;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CategoryGroup1 = () => {
  const { isLoading, data } = useQuery(['get-user'], fetchUser);
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="page-content">
        <div className="container">
          <section className="mt-10 pt-4 border-container">
            <h2 className="title title-center">
              <Text field={data.item.componentTitle}></Text>
            </h2>
            <OwlCarousel adClass="owl-theme" options={mainSlider6}>
              {data.item.categories.targetItems &&
                data.item.categories.targetItems.length > 0 &&
                data.item.categories.targetItems?.map((item: any, index) => (
                  <div className="category category-group-image" key={index}>
                    <ALink
                      href={item.categoryURL.url}
                      className={undefined}
                      content={undefined}
                      style={undefined}
                    >
                      <figure className="category-media">
                        <LazyLoadImage
                          src={item.image.src}
                          alt={item.image.alt}
                          width={item.image.width}
                          height={item.image.height}
                          effect="opacity"
                        />
                      </figure>
                    </ALink>
                    <div className="category-content">
                      <h4 className="category-name">
                        <ALink
                          href={item.categoryURL.url}
                          className={undefined}
                          content={undefined}
                          style={undefined}
                        >
                          {item.title.value}
                        </ALink>
                      </h4>
                      <ul className="category-list">
                        {item.categoryItems.targetItems &&
                          item.categoryItems.targetItems.length > 0 &&
                          item.categoryItems.targetItems
                            .slice(0, 5)
                            .map((categoryItem: any, categoryItemIndex: any) => (
                              <li key={categoryItemIndex}>
                                <ALink
                                  href={categoryItem.itemUrl.url}
                                  className={undefined}
                                  content={undefined}
                                  style={undefined}
                                >
                                  {categoryItem.itemName.value}
                                </ALink>
                              </li>
                            ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </OwlCarousel>
          </section>
        </div>
      </div>
    </>
  );
};

export const Default = CategoryGroup1;
