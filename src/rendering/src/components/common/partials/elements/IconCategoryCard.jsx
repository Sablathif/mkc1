import ALink from '../../../feature/custom-link';

function IconCategoryCard(props) {
  const data = props?.props;
  return (
    <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4" key={index}>
      <div className="category category-icon">
        <ALink href={data?.fields?.CTA?.value?.href}>
          <figure className="category-media">
            <i className={data?.fields?.IconClass?.value}></i>
          </figure>
          <div className="category-content">
            <h4 className="category-name">{data?.fields?.Title?.value}</h4>
          </div>
        </ALink>
      </div>
    </div>
  );
}

export default IconCategoryCard;
