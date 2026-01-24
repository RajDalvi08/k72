import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] -pt-20 sm:-pt-20 px-4 sm:px-0 text-center text-white">

      {/* LINE 1 */}
      <div className="uppercase flex justify-center items-center 
        text-[12vw] sm:text-[10vw] lg:text-[9.5vw]
        leading-[11vw] sm:leading-[9vw] lg:leading-[8vw]">
        L&apos;étincelle
      </div>

      {/* LINE 2 WITH MASK VIDEO */}
      <div className="uppercase flex justify-center items-center gap-[2vw] sm:gap-[1vw]
        text-[12vw] sm:text-[10vw] lg:text-[9.5vw]
        leading-[11vw] sm:leading-[9vw] lg:leading-[8vw]">

        qui

        {/* MASK */}
        <div
          className="relative overflow-hidden rounded-md
          h-[10vw] w-[24vw]
          sm:h-[8vw] sm:w-[18vw]
          lg:h-[7vw] lg:w-[16vw]
          -mt-1 sm:-mt-2"
        >
          <Video />
        </div>

        génère
      </div>

      {/* LINE 3 */}
      <div className="uppercase flex justify-center items-center
        text-[12vw] sm:text-[10vw] lg:text-[9.5vw]
        leading-[11vw] sm:leading-[9vw] lg:leading-[8vw]">
        la créativité
      </div>

      {/* PARAGRAPH — RIGHT ALIGNED & SMALLER */}
      <div className="flex justify-end mt-6 sm:mt-10 pr-2 sm:pr-10">
        <p
          className="text-left max-w-[85%] sm:max-w-[32%]
          text-sm sm:text-base lg:text-sm
          leading-relaxed opacity-90"
        >
          K72 est une agence qui pense chaque action pour nourrir la marque.
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
          l’étincelle pour générer de l’émotion. Pour assurer une relation
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
          qui doit être fait.
        </p>
      </div>

    </div>
  );
};

export default HomeHeroText;
