import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  // Hide Navbar when on /menu so Menu page's header doesn't collide
  if (location.pathname === "/menu") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full pointer-events-none flex items-start justify-between">
      {/* Logo */}
      <Link
        className="pointer-events-auto p-4 sm:p-6 lg:p-8 block text-white transition-opacity duration-300 hover:opacity-80"
        to="/"
        title="Go to home page"
      >
        <div className="sr-only">K72</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 103 44"
          className="w-20 sm:w-24 lg:w-28 h-auto fill-current"
        >
          <path
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          />
        </svg>
      </Link>

      {/* Top-Right Navigation Group */}
      <div className="pointer-events-auto flex items-start">
        {/* Quicknav: Projects (Desktop) */}
        <Link
          to="/projects"
          className="k72-nav-block group relative hidden lg:flex flex-col justify-end p-4 h-[3.5rem] w-40 bg-black overflow-hidden select-none"
        >
          <div className="k72-nav-overlay absolute inset-0 bg-[#D3FD50]" />
          <span className="relative z-10 font-[font1] uppercase text-xs lg:text-sm tracking-wider text-white group-hover:text-black transition-colors duration-200">
            Projets (17)
          </span>
        </Link>

        {/* Quicknav: Agency (Desktop) */}
        <Link
          to="/agence"
          className="k72-nav-block group relative hidden lg:flex flex-col justify-end p-4 h-[5.6rem] w-52 bg-black overflow-hidden select-none"
        >
          <div className="k72-nav-overlay absolute inset-0 bg-[#D3FD50]" />
          <span className="relative z-10 font-[font1] uppercase text-xs lg:text-sm tracking-wider text-white group-hover:text-black transition-colors duration-200">
            Agence
          </span>
        </Link>

        {/* Main Menu Link (Top Right Component) */}
        <Link
          to="/menu"
          aria-label="Open navigation menu"
          className="k72-nav-block group relative flex flex-col justify-between p-4 sm:p-5 lg:p-6 
                     h-[4rem] sm:h-[5rem] lg:h-[8.125rem] 
                     w-32 sm:w-44 lg:w-56 
                     bg-black overflow-hidden cursor-pointer select-none text-white focus:outline-none"
        >
          {/* Lime Green Slide-Down Layer */}
          <div className="k72-nav-overlay absolute inset-0 bg-[#D3FD50]" />

          {/* Top Row: Burger Icon (aligned top right) */}
          <div className="relative z-10 w-full flex justify-end">
            <svg
              viewBox="0 0 63 10"
              className="w-10 sm:w-12 lg:w-15 h-2 sm:h-2.5 lg:h-3 stroke-current text-white group-hover:text-black transition-colors duration-200"
              fill="none"
              strokeWidth="2"
              strokeLinecap="square"
            >
              <line
                x1="0.355"
                y1="0.5"
                x2="60.645"
                y2="0.5"
                className="transition-all duration-300"
              />
              <line
                x1="30.5"
                y1="7.5"
                x2="60.645"
                y2="7.5"
                className="transition-all duration-300 group-hover:translate-x-[-4px]"
              />
            </svg>
          </div>

          {/* Bottom Row: Menu Label (aligned bottom left) */}
          <span className="relative z-10 font-[font1] uppercase text-xs sm:text-sm lg:text-base font-medium tracking-widest text-white group-hover:text-black transition-colors duration-200 leading-none">
            Menu
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
