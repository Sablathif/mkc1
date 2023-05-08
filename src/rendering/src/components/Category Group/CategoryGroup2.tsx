import React from 'react';
import { Text, Field, ImageField, LinkField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ALink from 'components/feature/custom-link';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider6 } from 'src/utils/data/carousel';
import Styles from 'components/CategoryGroup/CategoryGroup.module.css';

type CategoryGroup2Props = ComponentProps & {
  fields: {
    componentTitle: Field<string>;
    categories: [
      children: {
        fields: {
          listingType: Field<string>;
          iconClassName: Field<string>;
          image: ImageField;
          backgroudColour: Field<string>;
          title: Field<string>;
          categoryItems: [
            children: {
              fields: {
                itemName: Field<string>;
                itemUrl: LinkField;
              };
            }
          ];
        };
      }
    ];
  };
};

const CategoryGroup2 = (props: CategoryGroup2Props): JSX.Element => {
  return (
    <>
      <div className="container">
        <section className="mt-10 pt-4" style={{ paddingBottom: '20px' }}>
          <h2 className="title title-center">
            <Text field={props.fields.componentTitle} />
          </h2>
          <OwlCarousel adClass="owl-theme" options={mainSlider6}>
            {props.fields?.categories?.map((item, index) => (
              <div
                key={index}
                className="category category-group-icon"
                style={{
                  backgroundColor:
                    item.fields.backgroudColour.value === ''
                      ? '#4b5577'
                      : item.fields.backgroudColour.value,
                }}
              >
                <ALink href="#" className={undefined} content={undefined} style={undefined}>
                  <figure className="category-media">
                    {item.fields.listingType.value.toLowerCase() == 'icon' ? (
                      <i className={item.fields.iconClassName.value}></i>
                    ) : (
                      <i className={Styles.imageListing}>
                        <Image
                          field={item.fields.image}
                          alt={item?.fields?.image?.value?.alt}
                          className={Styles.imageListing}
                        ></Image>
                      </i>
                    )}
                  </figure>
                  <h4 className="category-name">
                    <Text field={item.fields.title} />
                  </h4>
                </ALink>

                <div className="category-content">
                  <ul className="category-list">
                    {item.fields.categoryItems.map((categoryItem, categoryItemIndex) => (
                      <li key={categoryItemIndex}>
                        <ALink
                          href={categoryItem.fields.itemUrl.value.href}
                          className={undefined}
                          content={undefined}
                          style={undefined}
                        >
                          <Text field={categoryItem.fields.itemName} />
                        </ALink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </section>
      </div>
    </>
  );
};

export const Default = CategoryGroup2;
