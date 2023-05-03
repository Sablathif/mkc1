import {
  Text,
  Field,
  ImageField,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
import { ComponentProps } from 'lib/component-props';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type BlogDetailProps = ComponentProps & {
  fields: {
    Image: ImageField;
    Author: Field<string>;
    Date: Field<string>;
    Title: Field<string>;
    Description: RichTextField;
  };
};

const BlogDetail = (props: BlogDetailProps): JSX.Element => (
  <div className="container">
    <div className="row gutter-lg">
      <div className="col-lg-12">
        <div className="post post-single ">
          <figure className="post-media">
            <ALink
              href="/react/riode/demo-1/blog/single/pellentesque-fusce-suscipit/#"
              className={undefined}
              content={undefined}
              style={undefined}
            >
              <LazyLoadImage
                src={'/-' + props.fields.Image.value.src.split('/-').pop()}
                // alt={props?.fields?.Image?.value?.alt}
                // width={props.fields.Image.value.width}
                // height={props.fields.Image.value.height}
              />
              {/* <Image field={props.fields.Image} /> */}
            </ALink>
          </figure>
          <div className="post-details">
            <div className="post-meta">
              <Text field={props.fields.Author} />
              &nbsp; on &nbsp;
              <Text field={props.fields.Date} />
              
            </div>
            <div>
              <h1>
                <Text field={props.fields.Title} />
              </h1>
            </div>
            <div>
              <RichText field={props.fields.Description} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export const Default = BlogDetail;
// export default withDatasourceCheck()<BlogDetailProps>(BlogDetail);
