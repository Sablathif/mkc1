import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import Styles from './HeaderBottom.module.css';
import HeaderBottomType from './HeaderBottom.type';
import { useEffect } from 'react';
export const Default = (props: HeaderBottomType): JSX.Element => {
  // const router = useRouter();

  useEffect(() => {
    // const { query } = router;

    // Check if the sc_mode cookie exists
    const sitecorePageMode = document.cookie
      .split(';')
      .find((cookie) => cookie.trim().startsWith('sc_mode='));
    console.log('Sitecore Page Mode:', sitecorePageMode);

    if (sitecorePageMode) {
      const pageMode = sitecorePageMode.split('=')[1];

      // Use the page mode value for your logic
      console.log('Sitecore Page Mode:', pageMode);
    }
  }, []);
  return (
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
};
