import React from 'react';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Image from 'next/image';

// var  backgroundPosition: "center",
// var  backgroundRepeat: "no-repeat",
// var  backgroundSize: "cover",
// var  position: "relative"

type RecipeBannerProps = ComponentProps & {
  fields: {
    Mobile_Image: ImageField;

    Desktop_Image?: {
      value: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
    };
  };
};

const RecipeBanner = (props: RecipeBannerProps): JSX.Element => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div
                style={{
                  color: 'red',
                  backgroundPosition: 'center',
                  position: 'relative',
                  backgroundSize: 'cover',
                }}
              >
                <Image
                  src={'/-' + props.fields.Desktop_Image.value.src.split('/-').pop()}
                  alt="banner image"
                  height={props.fields.Desktop_Image.value.height}
                  width={props.fields.Desktop_Image.value.width}
                  style={{ objectFit: 'cover', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = RecipeBanner;
