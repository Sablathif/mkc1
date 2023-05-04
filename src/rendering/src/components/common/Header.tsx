import { useEffect } from 'react';
import { useRouter } from 'next/router';

import ALink from '../feature/custom-link';

import MainMenu from '../common/partials/main-menu';
// import SearchBar from '../SearchBar';
import { headerBorderRemoveList } from '../../utils/data/menu';
// type HeaderProps = ComponentProps & {
//   fields: {
//     Logo: ImageField;
//   };
// };
export default function Header(/*props: HeaderProps*/) {
  const router = useRouter();

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (
        headerBorderRemoveList.includes(router.pathname) &&
        header.classList.contains('header-border')
      )
        header.classList.remove('header-border');
      else if (!headerBorderRemoveList.includes(router.pathname))
        document?.querySelector('header')?.classList.add('header-border');
    }
  }, [router.pathname]);

  const showMobileMenu = () => {
    document?.querySelector('body')?.classList.add('mmenu-active');
  };

  return (
    <header className="header header-border">
      <div className="header-middle sticky-header fix-top sticky-content">
        <div className="container">
          <div className="header-left">
            <ALink
              href="#"
              className="mobile-menu-toggle"
              onClick={showMobileMenu}
              content={undefined}
              style={undefined}
            >
              <i className="d-icon-bars2"></i>
            </ALink>

            <ALink href="/" className="logo" content={undefined} style={undefined}>
              <span></span>
            </ALink>
          </div>
        </div>
      </div>

      <div className="header-bottom d-lg-show">
        <div className="container">
          <div className="header-left">
            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export const Default = Header;
