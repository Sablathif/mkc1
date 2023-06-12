import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
export default function FooterNavigationLinks(props: any) {
  const datanav = props?.props;
  return (
    <div className="col-lg-3 col-md-6">
      <div className="widget ml-lg-4">
        <h4 className="widget-title">{datanav?.fields?.NavigationName?.value}</h4>
        <ul className="widget-body">
          <li>
            <RichText field={datanav?.fields?.FooterNavigations} />
          </li>
        </ul>
      </div>
    </div>
  );
}
