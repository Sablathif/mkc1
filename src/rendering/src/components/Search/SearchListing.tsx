import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import SearchCard from './SearchCard';
import SearchListingProps from './SearchListing.type';
const SEARCH_QUERY = gql`
  query SearchQuery($rootItem: String!, $limit: Int, $templateId: String!, $keyword: String!) {
    pageOne: search(
      where: {
        AND: [
          { name: "_parent", value: $rootItem, operator: EQ }
          { name: "_templates", value: $templateId, operator: EQ }
          { name: "Title", value: $keyword, operator: CONTAINS }
        ]
      }
      first: $limit
    ) {
      total
      pageInfo {
        endCursor
      }
      results {
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
  }
`;

export const Default = () => {
  const router = useRouter();
  const { q } = router.query;

  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: {
      rootItem: '{DFECC2B4-0CEF-4C1F-B321-33CC92978F8F}',
      limit: 20,
      templateId: '{BD30A65C-A646-474F-9DDE-1A21687AB192}',
      keyword: q,
    },
  });

  const result: SearchListingProps = data;
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error.message);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {result?.pageOne?.results &&
            result?.pageOne?.results?.length > 0 &&
            result?.pageOne?.results?.map((item: any, index: any) => (
              <SearchCard props={item} key={index}></SearchCard>
            ))}
        </div>
      </div>
    </section>
  );
};
