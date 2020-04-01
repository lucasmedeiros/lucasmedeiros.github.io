import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import { navbarStyle } from "../styles";
import { ParallaxContext } from "react-scroll-parallax";

const Header = ({ siteTitle, scrollTop }) => {
  const parallaxController = useContext(ParallaxContext);
  const [isExpanded, setExpanded] = useState(false);
  const [navbarColor, setNavbarColor] = useState({
    background: `none`,
    color: `#000`
  });

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (parallaxController) {
        parallaxController.update();
      }
    });
  });

  useEffect(() => {
    if (!scrollTop) {
      setNavbarColor({
        background: "#000",
        color: "#fff"
      });
    } else {
      setNavbarColor({
        background: isExpanded ? "#000" : `none`,
        color: `#000`
      });
    }
  }, [scrollTop, isExpanded]);

  return (
    <nav
      style={{ ...navbarStyle, ...navbarColor }}
      className={`flex items-center justify-between flex-wrap ${
        scrollTop ? "p-6" : "p-4"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-bold text-xl">
          {siteTitle}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setExpanded(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow" />
        <div>
          <Link
            to={`/projects`}
            href="#responsive-header"
            className={`transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 hover:bg-gray-200 rounded mr-4 p-2`}
          >
            Projects
          </Link>
          <Link
            to={`/about`}
            className={`transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 hover:bg-gray-200 rounded mr-4 p-2`}
          >
            About
          </Link>
          <Link
            to={`/contact`}
            className={`transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 hover:bg-gray-200 rounded mr-4 p-2`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
