import React from 'react';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import Styles from './MainNavigation.module.css';
function MainNavigation(props: any) {
  const item = props?.props;
  return (
    <Link field={item.fields.NavigationUrl} className={Styles.nav} style={undefined}>
      {item.fields.Title.value}
    </Link>
  );
}
export default MainNavigation;
