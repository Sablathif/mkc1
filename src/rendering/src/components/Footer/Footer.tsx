// import FooterComp from 'components/common/footer';
import FooterComp from 'components/common/footer dynamic';
import FooterType from './Footer.type';
import { Suspense } from 'react';

const Footer = (props: FooterType): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FooterComp props={props} />
    </Suspense>
  );
};

export default Footer;
