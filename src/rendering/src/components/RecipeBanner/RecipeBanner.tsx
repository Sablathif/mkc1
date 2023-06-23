import React from 'react';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Styles from './banner.module.scss';
import Image from 'src/core/atoms/Image';

type RecipeBannerProps = ComponentProps & {
  fields: {
    Desktop_Image: ImageField;
    Mobile_Image: ImageField;
  };
};

const RecipeBanner = (props: RecipeBannerProps): JSX.Element => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className={Styles.fullBanner}>
                <Image field={props.fields.Desktop_Image} priority={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = RecipeBanner;
