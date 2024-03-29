import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav";
import MenuIcon from "../../icons/MenuIcon";
import MobileMenu from "../mobileMenu";
import { links } from "../../fixtures/links";
import * as ROUTES from "../../constants/routes";
import SearchBar from "../SearchBar";

export default function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollPos(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenu]);

  return (
    <header
      className={`sticky inset-x-0 top-0 bg-white dark:bg-gray-800 h-20 z-50 ${
        scrollPos > 1
          ? "border-b border-gray-300 dark:border-gray-700 shadow-sm backdrop-filter backdrop-blur-sm backdrop-saturate-150 bg-opacity-80 dark:bg-opacity-80"
          : ""
      }`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4 opacity-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="block sm:hidden">
                {mobileMenu && (
                  <div>
                    <MobileMenu
                      links={links}
                      mobileMenu={mobileMenu}
                      setMobileMenu={setMobileMenu}
                    />
                  </div>
                )}
                <button
                  className="h-8 w-8 text-lg cursor-pointer text-gray-900 rounded dark:text-white focus:outline-none focus:ring-2 focus:ring-offest-white dark:focus:ring-offset-gray-800 focus:ring-gray-900 dark:focus:ring-white"
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  <MenuIcon />
                </button>
              </div>
              <Link
                to={ROUTES.HOME}
                className="w-40 h-16 block text-gray-900 text-xl dark:text-white rounded focus:outline-none"
                title="Recipe Venture"
              >
                <span className="w-full h-full block">
                  {/* <Logo /> */}
                  <img src="logo.png" alt="logo" className="w-full h-full" />
                </span>
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <div className="hidden sm:block">
                <Nav links={links} />
              </div>
              <div className="sm:ml-6">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
