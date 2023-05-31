import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../../../feature/custom-link';

function CategorySectionCard(props, index) {
  const data = props?.props;
  return (
    <div className="col-xs-6 col-lg-3 mb-4" key={index}>
      <div className="category category-default1 category-absolute banner-radius overlay-zoom">
        <ALink href={data?.fields?.CTA?.value?.href}>
          <figure className="category-media">
            <LazyLoadImage
              src={'/-' + data?.fields?.Image?.value?.src.split('/-').pop()}
              alt="Intro Slider"
              effect="opacity; transform"
              width={280}
              height={280}
              loading="lazy"
            />
          </figure>

          <div className="category-content">
            <h4 className="category-name font-weight-bold ls-l">{data?.fields?.Title?.value}</h4>
          </div>
        </ALink>
      </div>
    </div>
  );
}

export default CategorySectionCard;
