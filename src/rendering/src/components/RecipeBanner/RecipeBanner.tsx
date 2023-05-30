import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
// import Image from 'src/core/atoms/Image';
import Styles from './banner.module.scss';

type RecipeBannerProps = ComponentProps & {
  fields: {
    Desktop_Image: ImageField;
    Mobile_Image: ImageField;
  };
};

const RecipeBanner = (props: RecipeBannerProps): JSX.Element => {
  const imgsrc = '/-' + props.fields.Desktop_Image.value.src.split('/-').pop();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className={Styles.fullBanner}>
                 {props.fields?.Desktop_Image.value.src ? <img src={imgsrc} alt="image" /> : null}
                {/* <picture title="banner">
                  <source
                    media="(min-width:0px)"
                    srcSet={props.fields.Desktop_Image.value.src.slice(10)}
                  />
                  <img src={props.fields.Desktop_Image.value.src.slice(10)} alt="banner" /> 
                <Image field={props.fields.Desktop_Image} priority />
                 </picture> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = RecipeBanner;
