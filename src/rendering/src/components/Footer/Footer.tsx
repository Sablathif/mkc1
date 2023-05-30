// import { ComponentProps } from 'lib/component-props';
import FooterComp from 'components/common/footer';
// import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Suspense } from 'react';
// type FooterProps = ComponentProps & {
//   fields: {
//     Title: Field<string>;
//     FooterLogo: ImageField;
//     FooterDescription: Field<string>;
//     FooterCopyrightText: Field<string>;
//     PlaceholderText: Field<string>;
//     SubscribeCTA: Field<string>;
//     SubscribeHeading: Field<string>;
//     SubscribeTitle: Field<any>;
//     FooterNavigation: [
//       children: { fields: { NavigationName: Field<string>; FooterNavigationList: Field<any> } }
//     ];
//     FooterSocialLinks: [children: { fields: { Icon: ImageField; Link: Field<any> } }];
//     FooterInstagram: [children: { fields: { Image: ImageField } }];
//     FooterCardIcon: [children: { fields: { Icon: ImageField } }];
//   };
// };

const Footer = (/*props: FooterProps*/): JSX.Element => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <FooterComp /*props={props}*/ />
    </Suspense>
  </>
);

export default Footer;
