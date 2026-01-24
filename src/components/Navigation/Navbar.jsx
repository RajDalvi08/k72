import React from "react";
import "./Navbar.css";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = ({ onMenuClick }) => {
      


  return (
    <div className="fixed top-0 left-0 z-50 w-full px-6 py-4">
      <div className="relative flex items-center justify-between">

        {/* Logo */}
      <a class="c-header_logo" href="en" title="Go to home page">
                    <div class="u-screen-reader-text">K72</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                      <path fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </a>

       

        {/* Burger */}
    <button
  onClick={onMenuClick}
  className="nav-wrapper cursor-pointer relative z-20 bg-black 
             -mt-24 h-[14vh] w-[17vw] -mr-6
             flex items-center justify-center"
>
    {/* DASHES */}
    <div className="flex flex-col gap-8 mt-4">
      <span className="block w-8 h-[2px] bg-white"></span>
      <span className="block w-15 h-[2px] bg-black"></span>
       <span className="block w-15 h-[2px] bg-black"></span>
    </div>
  {/* GREEN LAYER */}
  <div className="nav-green absolute inset-0 bg-yellow-300 h-[15vh] flex items-center justify-center">
    
    {/* DASHES */}
    <div className="flex flex-col gap-8 mt-4">
      <span className="block w-8 h-[2px] bg-black"></span>
      <span className="block w-15 h-[2px] bg-black"></span>
       <span className="block w-15 h-[2px] bg-black"></span>
    </div>

  </div>
</button>


      </div>
    </div>
  );
};

export default Navbar;
