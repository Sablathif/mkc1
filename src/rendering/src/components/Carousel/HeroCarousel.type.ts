import { Field, ImageField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type HeroCarouselProps = ComponentProps & {
  fields: {
    Slides: [
      fields: {
        fields: {
          Tag1: Field<string>;
          Tag2: Field<string>;
          Title: Field<string>;
          SubTitle: Field<string>;
          Description: RichTextField;
          BackgroundImage: ImageField;
          BackgroundVideo: any;
          BackgroundType: Field<string>;
          CTA: Field<any>;
          BackgroundColor: Field<string>;
          SlideVariant: Field<string>;
        };
      }
    ];
  };
};
export default HeroCarouselProps;