import BreadcrumbType from './Breadcrumb.type';
import ALink from 'components/feature/custom-link';

const Breadcrumb = (props: BreadcrumbType): JSX.Element => {
  console.log('Breadcrumb', props?.fields?.data?.item);
  const propItemAncestors = props?.fields?.data?.item?.ancestors;
  const breadcrumbs = [];
  const pageItems = {
    title:
      props?.fields?.data?.item?.pageTitle != null
        ? props?.fields?.data?.item?.pageTitle?.value
        : props?.fields?.data?.item?.title?.value,
    url: props?.fields?.data?.item?.url?.path,
    className: 'active',
  };

  breadcrumbs.push(pageItems);
  if (propItemAncestors) {
    propItemAncestors.map((parent) => {
      breadcrumbs.push({
        title: parent?.pageTitle != null ? parent?.pageTitle?.value : parent?.title?.value,
        url: parent?.url?.path,
      });
    });
  }

  return (
    <nav className="breadcrumb-nav">
      <div className="container">
        <ul className="breadcrumb">
          <li>
            <ALink href="#" className={undefined} content={undefined} style={undefined}>
              <i className="d-icon-home"></i>
            </ALink>
          </li>
          {breadcrumbs.reverse().map((bc, index) => (
            <li key={index}>
              <a title={bc?.title} href={bc?.url}>
                {bc?.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
