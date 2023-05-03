import { Field, Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Styles from './HeaderBottom.module.css';
type HeaderBottomProps = ComponentProps & {
  fields: {
    MainNavigationList: [children: { fields: { Link: Field<any> } }];
    SpecialOffers: LinkField;
    Buy: LinkField;
  };
};

const HeaderBottom = (props: HeaderBottomProps): JSX.Element => (
  <div className="header header-border">
    <div className="header-bottom d-lg-show">
      <div className="container">
        <div className="header-left">
          {props?.fields?.MainNavigationList?.map((datanav, index) => (
            <Link className={Styles.nav} field={datanav.fields.Link} key={index} />
          ))}
        </div>
        {/* <div className="header-right">
          <span className={Styles.utility}>
            <i className="d-icon-card"></i>
            <Link field={props.fields.SpecialOffers} />
          </span>
          <span className={Styles.utility}>
            <Link field={props.fields.Buy} />
          </span>
        </div> */}
      </div>
    </div>
  </div>
);
export const Default = HeaderBottom;

// export default withDatasourceCheck()<HeaderBottomProps>(HeaderBottom);
