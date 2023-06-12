import { withDatasourceCheck, LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderNavigationProps = ComponentProps & {
  fields: {
    items: [
      fields: {
        fields: {
          Link: LinkField;
        };
      }
    ];
  };
};

const HeaderNavigation = (props: HeaderNavigationProps): JSX.Element => (
  <div>
    {props?.fields?.items?.map((data, index) => {
      return (
        <h2 key={index}>
          <Link field={data.fields.Link} />
        </h2>
      );
    })}
  </div>
);

export default withDatasourceCheck()<HeaderNavigationProps>(HeaderNavigation);
