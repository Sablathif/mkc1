import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type HeaderBottomProps = ComponentProps & {
  fields: {
    MainNavigationList: [children: { fields: { Link: Field<any> } }];
    SpecialOffers: LinkField;
    Buy: LinkField;
  };
};
export default HeaderBottomProps;
