import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
type SearchListingProps = {
  pageOne: {
    total: number;
    pageInfo: {
      endCursor: string;
    };
    results: SearchResult[];
  };
};

type SearchResult = {
  name: string;
  id: string;
  template: {
    id: string;
  };
  Title: {
    value: TextField;
  };
  Category: {
    value: TextField;
  };
  Price: {
    value: TextField;
  };
  Size: {
    value: TextField;
  };
  Color: {
    value: TextField;
  };
  Brand: {
    value: TextField;
  };
  MediaList: {
    jsonValue: MediaItems[];
  };
};
type MediaItems = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Alt: {
      value: string;
    };
    Height: {
      value: number;
    };
    Width: {
      value: number;
    };
  };
};
export default SearchListingProps;
