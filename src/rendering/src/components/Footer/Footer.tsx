import FooterComp from 'components/common/footer';
import { Suspense } from 'react';
const Footer = (/*props: FooterProps*/): JSX.Element => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <FooterComp /*props={props}*/ />
    </Suspense>
  </>
);

export default Footer;
