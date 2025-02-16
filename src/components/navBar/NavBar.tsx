import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const activeStyle = "underline underline-offset-4";
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setShowSubmenu((prev) => !prev);
    }
  };
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-4 items-center">
        <li className="menu-link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="relative menu-link group" onClick={handleClick}>
          <NavLink to="#">Categories</NavLink>
          <ul
            className={`absolute left-0  bg-white shadow-lg rounded w-80 h-5 overflow-hidden transition-opacity duration-300 ${
              showSubmenu
                ? "block opacity-100 overflow-auto h-auto z-20"
                : "hidden opacity-0"
            } md:block md:opacity-0  group-hover:opacity-100 group-hover:block group-hover:z-20 group-hover:overflow-auto group-hover:h-auto`}
          >
            <li className="menu-link p-2 hover:bg-gray-100">
              <NavLink
                to="/category/all"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                All
              </NavLink>
            </li>
            <li className="menu-link p-2 hover:bg-gray-100">
              <NavLink
                to="/category/men's clothing"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Men's Clothing
              </NavLink>
            </li>
            <li className="menu-link p-2 hover:bg-gray-100">
              <NavLink
                to="/category/women's clothing"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Women's Clothing
              </NavLink>
            </li>
            <li className="menu-link p-2 hover:bg-gray-100">
              <NavLink
                to="/category/jewelery"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Jewelry
              </NavLink>
            </li>
            <li className="menu-link p-2 hover:bg-gray-100">
              <NavLink
                to="/category/electronics"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Electronics
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
