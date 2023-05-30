import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import Styles from './HeaderBottom.module.css';
import HeaderBottomType from './HeaderBottom.type';

const HeaderBottom = (props: HeaderBottomType): JSX.Element => (
  <div className="header header-border">
    <div className="header-bottom d-lg-show">
      <div className="container">
        <div className="header-left">
          {props?.fields?.MainNavigationList?.map((datanav, index) => (
            <Link className={Styles.nav} field={datanav.fields.Link} key={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
export const Default = HeaderBottom;
