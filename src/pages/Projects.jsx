import React from "react";
import ProjectCard from "../projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      image2:
        "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
      image2:
        "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
      image2:
        "https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
      image2:
        "https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f",
    },
  ];

  /* ================= GSAP ================= */
  useGSAP(() => {
    gsap.utils.toArray(".project-row, .footer").forEach((row) => {
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
            // markers: true, // enable for debugging
          },
        }
      );
    });
  }, []);

  return (
    <div className="p-0">
    <section className="px-4 sm:px-6 pb-24">
      {/* ================= HEADING ================= */}
      <div className="pt-[20vh] sm:pt-[28vh] mb-12 sm:mb-16">
        <h2 className="font-[font1] text-[12vw] sm:text-[9.5vw] uppercase text-black">
          Projets
        </h2>
      </div>

      {/* ================= PROJECT LIST ================= */}
      <div className="space-y-14 sm:space-y-20">
        {projects.map((row, index) => (
          <div
            key={index}
            className="
              project-row
              flex flex-col sm:flex-row
              gap-6 sm:gap-10
              min-h-[60vh] sm:h-[75vh]
              overflow-hidden
            "
          >
            <ProjectCard image1={row.image1} />
            <ProjectCard image1={row.image2} />
          </div>
        ))}
      </div>
      
    </section>
          <div className="footer w-full h-[30vw] bg-black">
            <div className="flex  gap-122 px-20 items-center justify-center">
                <div className="flex gap-2 cursor-pointer ">
                    <h1 className="flex w-40 h-20 text-7xl font-bold text-white border-2 border-white rounded-full  justify-center items-center mt-2 hover:text-amber-200 hover:border-amber-200 
    transition-all duration-300">FB</h1>
                    <h1 className="flex w-40 h-20 text-7xl font-bold text-white border-2 border-white rounded-full  justify-center items-center mt-2 hover:text-amber-200 hover:border-amber-200 
    transition-all duration-300">IG</h1>
                    <h1 className="flex w-40 h-20 text-7xl font-bold text-white border-2 border-white rounded-full  justify-center items-center mt-2 hover:text-amber-200 hover:border-amber-200 
    transition-all duration-300">IN</h1>
                    <h1 className="flex w-40 h-20 text-7xl font-bold text-white border-2 border-white rounded-full  justify-center items-center mt-2 hover:text-amber-200 hover:border-amber-200 
    transition-all duration-300">BE</h1>
                </div>
                <div>
                    <Link
            to="/contact"
            className='flex w-90 h-20 text-7xl font-bold text-white border-2 border-white rounded-full  justify-center items-center mt-2 hover:text-amber-200 hover:border-amber-200 
    transition-all duration-300 uppercase'
          >
            Contact
          </Link>
                </div>
            </div>
            <div className="flex gap-90 px-10 ">
                <div  className="flex gap-5 items-center justify-center mt-80">
                    <h1 className="cursor-pointer hover:text-amber-200">MONTREAL_</h1>
                </div>
                <div className="flex gap-5 items-center justify-center mt-80 whitespace-nowrap">
                    <h1 className="uppercase text-md text-white cursor-pointer hover:text-amber-200 ">Privacy Policy</h1>
                    <h1 className="uppercase text-md text-white cursor-pointer hover:text-amber-200 ">Privacy Notice</h1>
                    <h1 className="uppercase text-md text-white cursor-pointer hover:text-amber-200 ">Ethics Report</h1>
                    <h1 className="uppercase text-md text-white cursor-pointer hover:text-amber-200 ">Consent choices</h1>
                </div>
                <div  className="flex gap-5 items-center justify-center mt-80">
                    <h1 className="text-lg whitespace-nowrap cursor-pointer hover:text-amber-200">BACK TO TOP</h1>
                </div>
            </div>
          </div>
    </div>
  );
};

export default Projects;
