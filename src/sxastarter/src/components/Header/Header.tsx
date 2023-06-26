import React from 'react';
import { Link, ImageField, LinkField, TextField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ComponentProps } from 'lib/component-props';
import MainNavigation from './MainNavigation';

interface Fields {
  Logo: ImageField;
  TargetUrl: LinkField;
  Navigation: Navigation[];
}
interface Navigation {
  Title: TextField;
  NavigationUrl: Field<any>;
}

type HeaderProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeaderProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  return (
    // <div className={`component ${props.params.styles}`} id={id ? id : undefined} tabIndex={1}>
    //   <div className="component-content">
    //     <p>Header Component</p>
    //   </div>
    // </div>
    <header className="header header-border">
      <div className="header-middle sticky-header fix-top sticky-content">
        <div className="container">
          <div className="header-left">
            <Link field={props?.fields?.TargetUrl.value} className="logo" style={undefined}>
              <LazyLoadImage
                src={'/-' + props?.fields?.Logo?.value?.src?.split('/-').pop()}
                alt={`${props?.fields?.Logo?.value?.alt}`}
                width={`${props?.fields?.Logo?.value?.width}`}
                height={`${props?.fields?.Logo?.value?.height}`}
                loading="lazy"
              />
            </Link>
            {/* <HeaderSearch /> */}
          </div>
        </div>
      </div>
      <div className="header-bottom d-lg-show">
        <div className="container">
          <div className="header-left">
            {props?.fields?.Navigation?.map((nav, index) => (
              <MainNavigation props={nav} key={index}></MainNavigation>
              // <Link field={nav.Link.value.href} key={index} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
