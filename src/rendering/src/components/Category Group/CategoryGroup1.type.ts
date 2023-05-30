import { Field, ImageField, LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
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
export default CategoryGroup1Props;
