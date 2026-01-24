import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Blog() {
  const containerRef = useRef(null);

  /* ================= GSAP ================= */
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".upper, .footer").forEach((row) => {
        const cards = row.children;

        gsap.fromTo(
          cards,
          {
            scaleY: 0.6,
            transformOrigin: "top",
          },
          {
            scaleY: 1,
            ease: "none",
            stagger: 0.25,
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 55%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-white">
      {/* ================= HEADING & BLOGS ================= */}
      <div className="upper">
        {/* Heading */}
        <div className="flex gap-2 justify-center items-center text-2xl font-semibold mb-20">
          <div className="w-6 h-6 bg-black rounded-full mt-40"></div>
          <h1 className="text-black mr-220 mt-40 text-8xl">Blogue</h1>
        </div>

        {/* Top Blogs */}
        <div className="flex gap-20 px-20 py-20">
          {/* Card 1 */}
          <div className="w-1/2 cursor-pointer">
            <div className="rounded-xl overflow-hidden">
              <img
                className="w-full h-[30vw] object-cover transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1"
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=1280&h=960&s=184feac75d6b23e52aff206bff3c3c45"
                alt=""
              />
            </div>

            <div className="flex gap-2 mt-6 items-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <h1 className="text-black text-[26px]">October 3 2025</h1>
            </div>

            <h1 className="text-black uppercase text-[32px] font-semibold leading-tight">
              Écrire un article sur l’écriture d’un article avec ChatGPT : plongée
              dans la mise en abyme
            </h1>
          </div>

          {/* Card 2 */}
          <div className="w-1/2 cursor-pointer">
            <div className="rounded-xl overflow-hidden">
              <img
                className="w-full h-[30vw] object-cover transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1"
                src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=1280&h=960&s=0710934494c383dae85863a13e713d46"
                alt=""
              />
            </div>

            <div className="flex gap-2 mt-6 items-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <h1 className="text-black text-[26px]">May 9 2025</h1>
            </div>

            <h1 className="text-black uppercase text-[32px] font-semibold leading-tight">
              Pub prédictive: L’IA révolutionne le ciblage
            </h1>
          </div>
        </div>

        {/* Bottom Blog */}
        <div className="mt-32 w-1/2 cursor-pointer px-20 py-20">
          <div className="rounded-xl overflow-hidden">
            <img
              className="w-full h-[25vw] object-cover transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-3"
              src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
              alt=""
            />
          </div>

          <div className="flex gap-2 mt-6 items-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h1 className="text-black text-[26px]">October 3 2025</h1>
          </div>

          <h1 className="text-black uppercase text-[32px] font-semibold leading-tight">
            Conseil & relation client: un duo qui ne se briefe pas, qui se construit
          </h1>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="footer w-full h-[30vw] bg-black">
        <div className="flex gap-122 px-20 items-center justify-center">
          <div className="flex gap-2 cursor-pointer">
            {["FB", "IG", "IN", "BE"].map((item) => (
              <h1
                key={item}
                className="flex w-40 h-20 text-7xl font-bold text-white border-2 border-white rounded-full justify-center items-center mt-2 hover:text-amber-200 hover:border-amber-200 transition-all duration-300"
              >
                {item}
              </h1>
            ))}
          </div>

          <div>
            <Link
              to="/contact"
              className="flex w-90 h-20 text-7xl font-bold text-white border-2 border-white rounded-full justify-center items-center mt-2 hover:text-amber-200 hover:border-amber-200 transition-all duration-300 uppercase"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex gap-90 px-10">
          <div className="flex gap-5 items-center justify-center mt-80">
            <h1 className="cursor-pointer text-white hover:text-amber-200">
              MONTREAL_
            </h1>
          </div>

          <div className="flex gap-5 items-center justify-center mt-80 whitespace-nowrap">
       {[
         "Privacy Policy",
         "Privacy Notice",
         "Ethics Report",
         "Consent choices",
       ].map((item) => {
         if (item === "Privacy Policy") {
           return (
             <Link
               key={item}
               to="/privacy-policy"
               className="uppercase text-md text-white cursor-pointer hover:text-amber-200"
             >
               {item}
             </Link>
           );
         }
     
         if (item === "Privacy Notice") {
           return (
             <Link
               key={item}
               to="/privacy-notice"
               className="uppercase text-md text-white cursor-pointer hover:text-amber-200"
             >
               {item}
             </Link>
           );
         }
     
         return (
           <h1
             key={item}
             className="uppercase text-md text-white cursor-pointer hover:text-amber-200"
           >
             {item}
           </h1>
         );
       })}
     </div>

          <div className="flex gap-5 items-center justify-center mt-80">
            <h1 className="text-lg text-white whitespace-nowrap cursor-pointer hover:text-amber-200">
              BACK TO TOP
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
