import { ComponentProps } from 'lib/component-props';
type CategoryGroup1Props = ComponentProps & {
  fields: {
    data: {
      item: {
        componentTitle: { value: string };
        categories: {
          targetItems: [
            {
              name: string;
              title: { value: string };
              listingType: { value: string };
              iconClassName: { value: string };
              image: { src: string; alt: string; width: string; height: string };
              backgroudColour: { value: string };
              categoryURL: {
                name: string;
                value: string;
                id: string;
                linkType: string;
                url: string;
              };
              categoryItems: {
                targetItems: [
                  {
                    itemName: { value: string };
                    itemUrl: {
                      name: string;
                      value: string;
                      id: string;
                      linkType: string;
                      url: string;
                    };
                  }
                ];
              };
            }
          ];
        };
      };
    };
  };
};
export default CategoryGroup1Props;
