import { useRouter } from 'next/router';

import ALink from '../../feature/custom-link';

function MainMenu() {
  const pathname = useRouter().pathname;

  return (
    <nav className="main-nav">
      <ul className="menu">
        <li id="menu-home" className={pathname === '/' ? 'active' : ''}>
          <ALink href="/">Home</ALink>
        </li>
        <li id="menu-home" className={pathname === '/' ? 'active' : ''}>
          <ALink href="/About Us">About Us</ALink>
        </li>
        <li id="menu-home" className={pathname === '/' ? 'active' : ''}>
          <ALink href="/ProductCategory">Product Category</ALink>
        </li>
        <li id="menu-home" className={pathname === '/' ? 'active' : ''}>
          <ALink href="/Blogs/listing">Blogs</ALink>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
