import { ComponentProps } from 'lib/component-props';
type BreadcrumbProps = ComponentProps & {
  fields: {
    data: {
      item: {
        url: { path: string };
        name: string;
        pageTitle: { value: string };
        displayName: string;
        title: { value: string };
        ancestors: [
          item: {
            url: { path: string };
            name: string;
            pageTitle: { value: string };
            displayName: string;
            title: { value: string };
          }
        ];
      };
    };
  };
};
export default BreadcrumbProps;
