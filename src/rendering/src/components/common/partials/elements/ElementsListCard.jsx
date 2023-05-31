import { RichText } from '@sitecore-jss/sitecore-jss-react';
import ALink from '../../../feature/custom-link';

function ElementsListCard(data) {
  return (
    <div className="col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
      <ALink href={data?.fields?.Link?.value?.href} className="element-type">
        <div className="element element-accordian">
          <RichText field={data?.fields?.Icon} />
          <p>{data?.fields?.Title?.value}</p>
        </div>
      </ALink>
    </div>
  );
}

export default ElementsListCard;
