import { Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import BlogDetailType from './BlogDetail.type';
import LazyImage from 'components/common/lazyimage';
const BlogDetail = (props: BlogDetailType): JSX.Element => {
  return (
    <div className="container">
      <div className="row gutter-lg">
        <div className="col-lg-12">
          <div className="post post-single ">
            <figure className="post-media">
              <ALink href="#" className={undefined} content={undefined} style={undefined}>
                <LazyImage {...props?.fields?.Image}></LazyImage>
              </ALink>
            </figure>
            <div className="post-details">
              <div className="post-meta">
                <Text field={props?.fields?.Author} />
                &nbsp;
                <Text field={props?.fields?.Date} />
              </div>
              <div>
                <h1>
                  <Text field={props?.fields?.Title} />
                </h1>
              </div>
              <div>
                <RichText field={props?.fields?.Description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetail;
