import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const yellowRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      // Yellow strip movement
      tl.fromTo(
        yellowRef.current,
        { x: "0%" },
        { x: "-50%", ease: "none" }
      );

      // Opposite text motion
      tl.fromTo(
        leftRef.current,
        { x: "0%" },
        { x: "-40%", ease: "none" },
        0
      );

      tl.fromTo(
        rightRef.current,
        { x: "20%" },
        { x: "-40%", ease: "none" },
        0
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* TEXT BLOCK */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-[8vw] uppercase font-[font2] -mt-40 z-10 pointer-events-none">
        <h1 className="text-[10vw] leading-[0.9] text-white">To talk</h1>
        <h1 className="text-[10vw] leading-[0.9] text-white">about</h1>
        <h1 className="text-[10vw] leading-[0.9] text-white">your</h1>
        <h1 className="text-[10vw] leading-[0.9] text-white">project</h1>

        <div className="absolute bottom-[18vh] w-full flex justify-between text-white text-sm tracking-wider ">
          <p className="max-w-[180px] ml-30 -mt-40 cursor-pointer hover:underline">
            Onscreen or in an office.
            <br />
            Here. There.
            <br />
            Anywhere.
          </p>

          <p className="max-w-[180px] text-right mr-30 -mt-40 cursor-pointer">
            Onscreen or in an office.
            <br />
            Here. There.
            <br />
            Anywhere.
          </p>
        </div>
      </div>

      {/* YELLOW STRIP */}
      <div
        ref={yellowRef}
        className="absolute bottom-0 w-[320vw] h-[20vh] bg-amber-200 flex"
      >
        <div ref={leftRef} className="w-1/2 flex items-center justify-center">
          <p className="uppercase text-black text-[12vw] leading-[11vw]">
            Hello @K72.ca
          </p>
        </div>

        <div ref={rightRef} className="w-1/2 flex items-center justify-center">
          <p className="uppercase text-black text-[12vw] leading-[11vw]">
            Hello @K72.ca
          </p>
        </div>
      </div>
      
    </section>
    
  );
};

export default Contact;
