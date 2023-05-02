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
export default function Header(/*props*/) {
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
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <p className="welcome-msg">Welcome to Riode store message or remove it!</p>
          </div>
          <div className="header-right">
            {/* <div className="dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div> */}

            {/* <div className="dropdown ml-5">
                            <ALink href="#">ENG</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">ENG</ALink>
                                </li>
                                <li>
                                    <ALink href="#">FRH</ALink>
                                </li>
                            </ul>
                        </div> */}

            <span className="divider"></span>
            <ALink
              href="/Contact-Us"
              className="contact d-lg-show"
              content={undefined}
              style={undefined}
            >
              <i className="d-icon-map"></i>Contact
            </ALink>
            <ALink
              href="/Contact-Us"
              className="help d-lg-show"
              content={undefined}
              style={undefined}
            >
              <i className="d-icon-info"></i> Need Help
            </ALink>
            {/* <LoginModal /> */}
          </div>
        </div>
      </div>

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
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width="153"
                height="44"
              />
            </ALink>
            <div className="header-search hs-simple"><a href="#" className="search-toggle" role="button"><i className="icon-search-3"></i></a><form action="#" method="get" class="input-wrapper"><input type="text" class="form-control" name="search" autocomplete="off" placeholder="Search..." required="" value=""><button class="btn btn-search" type="submit"><i className="d-icon-search"></i></button><div className="live-search-list bg-white scrollable"></div></form></div>
            {/* <SearchBar /> */}
          </div>

          <div className="header-right">
            <ALink
              href="tel:#"
              className="icon-box icon-box-side"
              content={undefined}
              style={undefined}
            >
              <div className="icon-box-icon mr-0 mr-lg-2">
                <i className="d-icon-phone"></i>
              </div>
              <div className="icon-box-content d-lg-show">
                <h4 className="icon-box-title">Call Us Now:</h4>
                <p>0(800) 123-456</p>
              </div>
            </ALink>
            <span className="divider"></span>
            <ALink
              href="/pages/wishlist"
              className="wishlist"
              content={undefined}
              style={undefined}
            >
              <i className="d-icon-heart"></i>
            </ALink>
            <span className="divider"></span>

            {/* <CartMenu /> */}
          </div>
        </div>
      </div>

      <div className="header-bottom d-lg-show">
        <div className="container">
          <div className="header-left">
            <MainMenu />
          </div>

          <div className="header-right">
            <ALink href="#" className={undefined} content={undefined} style={undefined}>
              <i className="d-icon-card"></i>Special Offers
            </ALink>
            <a href="#" className="ml-6">
              Buy Riode!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
