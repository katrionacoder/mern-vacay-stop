import { FaBars, FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-blue-100/50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-indigo-600">Vacay</span>
            <span className="text-slate-700">Stop</span>
          </h1>
        </Link>
        <form className="bg-white p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <div className="hidden sm:inline-block">
          <ul className="flex gap-4">
            <Link to="/">
              <li className="text-slate-700 hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="text-slate-700 hover:underline">About</li>
            </Link>
            <Link to="/sign-in">
              <li className="text-slate-700 hover:underline">Sign in</li>
            </Link>
          </ul>
        </div>
        <div className="sm:hidden flex justify-end">
          <button onClick={() => setMobileMenu(true)}>
            <FaBars className="text-slate-700" />
          </button>
        </div>
      </div>

      {/* CONDITIONAL MOBILE MENU (hamburger menu): */}
      {mobileMenu && (
        // Overlay container:
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
          {/* Menu container inside overlay: */}
          <div className="bg-white rounded-lg p-4 w-4/5 max-w-md">
            {/* Close button on menu container: */}
            <div className="flex justify-end">
              {/* Button: */}
              <button onClick={() => setMobileMenu(false)}>
                <AiOutlineClose className="text-slate-700 text-lg" />
              </button>
            </div>
            <ul className="flex flex-col gap-4 justify-center items-center">
              <Link to="/">
                <li className="text-slate-700 hover:underline">Home</li>
              </Link>
              <Link to="/about">
                <li className="text-slate-700 hover:underline">About</li>
              </Link>
              <Link to="/sign-in">
                <li className="text-slate-700 hover:underline">Sign in</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
