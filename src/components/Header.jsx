import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="py-5 border-b-2 border-gray-500">
      <div className="container flex justify-between items-center">
        <Link className="text-3xl" to="/">
          Frontend Test
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-20 items-center">
            <li>
              <Link className="text-xl hover:underline" to="/">
                Test 1
              </Link>
            </li>
            <li>
              <Link className="text-xl hover:underline" to="/contact">
                Test 2
              </Link>
            </li>
            <li>
              <Link className="text-xl hover:underline" to="/userList">
                Test 3
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
