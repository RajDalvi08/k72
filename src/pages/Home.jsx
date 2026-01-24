import React from "react";
import Video from "../home/Video";
import HomeHeroText from "../home/HomeHeroText";
import HomeBottomText from "../home/HomeBottomText";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      {/* Background Video */}
      <div className="absolute inset-0">
        <Video />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-4 py-6 sm:px-8 sm:py-8 lg:px-12">
        
        {/* Hero Text */}
        <div className="mt-24 sm:mt-32">
          <HomeHeroText />
        </div>

        {/* Bottom Text */}
        <div className="mb-6 sm:mb-10">
          <HomeBottomText />
        </div>

      </div>
    </div>
  );
};

export default Home;

