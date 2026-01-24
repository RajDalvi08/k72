import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagesArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];

  useGSAP(() => {
    /* ================= FLOATING IMAGE ================= */
    if (window.innerWidth >= 768) {
      imageRef.current.src = imagesArray[0];

      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 30%",
          end: "top -90%",
          scrub: true,
          pin: true,
          onUpdate(self) {
            const index = Math.min(
              imagesArray.length - 1,
              Math.floor(self.progress * imagesArray.length)
            );
            imageRef.current.src = imagesArray[index];
          },
        },
      });
    }

    /* ================= INITIAL STATES ================= */
    gsap.set(".rd", { backgroundColor: "#fff" });
    gsap.set(".upar img", { yPercent: 100 });

    /* ================= IMAGE + BG SCROLL ================= */
    gsap.timeline({
      scrollTrigger: {
        trigger: ".rd",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
      },
    })
      .to(".rd", { backgroundColor: "#000", ease: "none" })
      .to(
        ".upar img",
        {
          yPercent: 0,
          ease: "none",
        },
        0
      );

    /* ================= MOVING TEXT ================= */
    gsap.utils.toArray(".tag").forEach((tag, i) => {
      gsap.to(tag, {
        xPercent: i % 2 === 0 ? -120 : 120,
        duration: 4,
        ease: "none",
        repeat: -1,
      });
    });
  }, []);

  return (
    <section className="relative font-[font2] overflow-hidden">

      {/* FLOATING IMAGE */}
      <div
        ref={imageDivRef}
        className="absolute z-0 w-[15vw] aspect-[3/4] top-[22vh] left-[30vw]
                   rounded-3xl overflow-hidden"
      >
        <img ref={imageRef} className="w-full h-full object-cover" alt="" />
      </div>

      {/* BIG TITLE */}
      <div className="relative z-10 pt-[55vh]">
        <h1 className="uppercase text-center leading-none text-[20vw] text-black">
          Soixan7e <br /> Douze
        </h1>
      </div>

      {/* PARAGRAPH */}
      <div className="relative z-10 mt-24 flex justify-end px-10">
        <p className="max-w-4xl text-5xl leading-relaxed opacity-90 text-black">
          We’re inquisitive and open-minded, and we make sure creativity crowds
          out ego from every corner.
        </p>
      </div>

      {/* ================= RD SECTION ================= */}
      <div className="rd relative min-h-[220vh] flex items-center justify-center">

        {/* IMAGE STACK */}
        <div className="relative w-[640px] h-[960px]">

          {/* TEXT ON IMAGE */}
          <div className="absolute inset-0 z-40 flex flex-col justify-center items-center pointer-events-none mix-blend-difference -mb-110">
            <div className="overflow-hidden">
              <h1 className="tag text-[20vw] leading-none text-yellow-300">
                HELL
              </h1>
            </div>
            <div className=" flex gap-1 overflow-hidden -mt-2">
              <h1 className="tag text-[20vw] leading-none text-yellow-300">
                CONtI 
              </h1>
              <h1 className="tag text-[3vw] leading-none text-white">
                Account Manager
              </h1>
            </div>
          </div>

          {/* BASE IMAGE */}
          <img
            className="absolute inset-0 rounded-xl z-10 object-cover -mt-60"
            src="https://k72.ca/images/teamMembers/Isa_640X960.jpg?w=640&h=960&s=5849bb72bb04be156ba2ff4048eb65b8"
            alt=""
          />

          {/* OVERLAY IMAGE */}
          <div className="upar absolute inset-0 z-20 overflow-hidden">
            <img
              className="absolute inset-0 rounded-xl object-cover -mt-10"
              src="https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca"
              alt=""
            />
          </div>
        
        </div>
        </div>
        
       

    </section>
  );
};

export default Agence;
