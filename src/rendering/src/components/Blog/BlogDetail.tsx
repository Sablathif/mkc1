import { Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import BlogDetailType from './BlogDetail.type';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import dynamic from 'next/dynamic';
const LazyLoadImage = dynamic(() => import('react-lazy-load-image-component'));
const Image = dynamic(() => import('next/image'));
const BlogDetail = (props: BlogDetailType): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <div className="container">
      <div className="row gutter-lg">
        <div className="col-lg-12">
          <div className="post post-single ">
            <figure className="post-media">
              <ALink href="#" className={undefined} content={undefined} style={undefined}>
                {sitecoreContext?.pageState === 'normal' ? (
                  <Image
                    src={props?.fields?.Image?.value?.src}
                    alt={`${props?.fields?.Image?.value?.alt}`}
                    width={`${props?.fields?.Image?.value?.width}`}
                    height={`${props?.fields?.Image?.value?.height}`}
                    loading="lazy"
                  />
                ) : (
                  <LazyLoadImage
                    src={props?.fields?.Image?.value?.src}
                    alt={`${props?.fields?.Image?.value?.alt}`}
                    width={`${props?.fields?.Image?.value?.width}`}
                    height={`${props?.fields?.Image?.value?.height}`}
                    loading="lazy"
                  />
                )}
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
