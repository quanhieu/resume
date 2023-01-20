import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsGrid1X2Fill } from "react-icons/bs";

export const Menu = ({ menu }) => {
  const [show, setShow] = useState(false);
  const router = useRouter()

  const getHash = useMemo(() => {
    if (router.asPath) {
      const hash = router.asPath.split('/')[1]
      return hash
    }
  }, [router.asPath])

  const _handleActiveSection = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <header className="l-header" id="header">
      {/* <Route exact path="/"><Redirect to="/#home" /></Route> */}
      <nav className="nav bd-container">
        <span className="nav__logo">Menu</span>
        <div
          className={show ? "nav__menu show-menu" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__list">
            {menu.map(({ label, section, icon }) => (
              <li className="nav__item" key={label}>
                <Link
                  className="nav__link"
                  onClick={_handleActiveSection}
                  href={`/${section}`}
                  scroll={false}
                  // to={{ pathname: "/", hash: section }}
                  // isActive={(m, l) => (l.hash === section ? true : false)}
                >
                  <div className="nav__menu_item">
                    {
                      getHash === section
                      ? <p style={{ color: 'var(--title-color)' }}>{icon}</p>
                      : <p>{icon}</p>
                    }
                    {label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setShow(!show)}
        >
          <BsGrid1X2Fill/>
        </div>
      </nav>
    </header>
  );
};
