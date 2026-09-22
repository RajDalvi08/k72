import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

// K72 Heart SVG Icon
const HeartIcon = () => (
  <svg
    viewBox="0 0 70 83"
    fill="currentColor"
    className="inline-block w-[0.75em] h-[0.75em] mx-4 sm:mx-8 -mt-2 align-middle flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M57.87 1.67 L69.21 15.29 C69.72 15.9 70 16.67 70 17.47 L70 40.87 C70 41.67 69.72 42.43 69.21 43.05 L37.61 81 C36.41 82.44 34.27 82.64 32.82 81.44 C32.67 81.3 32.52 81.16 32.39 81 L0.79 43.04 C0.28 42.43 0 41.66 0 40.87 L0 17.47 C0 16.67 0.28 15.9 0.79 15.29 L12.13 1.67 C13.33 0.23 15.47 0.03 16.92 1.23 C16.98 1.28 17.04 1.34 17.1 1.39 L32.64 16.33 C33.96 17.59 36.04 17.59 37.36 16.33 L52.9 1.39 C54.26 0.09 56.41 0.14 57.71 1.49 C57.77 1.55 57.82 1.61 57.87 1.67 Z" />
  </svg>
);

const ContactSection = ({ targetWord, scrollTilt }) => {
  return (
    <div className="contact-section relative w-full pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 overflow-hidden">
      {/* Central Punchline Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        {/* Massive Punchline Header */}
        <h1 className="punchline-text font-[font1] font-light uppercase text-center text-[13vw] sm:text-[11vw] lg:text-[9.5vw] leading-[0.84] tracking-tight select-none">
          <div className="overflow-hidden">
            <span className="punchline-line block">To talk</span>
          </div>
          <div className="overflow-hidden">
            <span className="punchline-line block">about</span>
          </div>
          <div className="overflow-hidden">
            <span className="punchline-line block">your</span>
          </div>
          <div className="overflow-hidden">
            <span className="punchline-line block text-[#D3FD50]">{targetWord}</span>
          </div>
        </h1>

        {/* Floating Info / Address overlay */}
        <div className="mt-8 sm:mt-12 lg:-mt-28 relative z-10 w-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 text-sm sm:text-base lg:text-lg font-[font1] tracking-wide text-center sm:text-left">
          {/* Left Column: Office tagline */}
          <div className="sm:max-w-[260px] text-zinc-300 font-light leading-relaxed">
            Onscreen or in an office.
            <br />
            Here. There.
            <br />
            Anywhere.
          </div>

          {/* Right Column: Address */}
          <address className="sm:max-w-[280px] not-italic text-center sm:text-right font-light leading-relaxed">
            <a
              href="https://maps.app.goo.gl/PwGE7FGRcGwdtdto6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-[#D3FD50] transition-colors duration-200 group inline-block"
            >
              525 Av. Viger O - Suite 400
              <br />
              Montréal, QC H2Z 1G6{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </address>
        </div>
      </div>

      {/* Tilted Animated Marquee Banner */}
      <div className="my-16 sm:my-24 w-full overflow-hidden">
        <a
          href="mailto:hello@k72.ca"
          style={{
            transform: `rotate(${scrollTilt}deg)`,
          }}
          className="contact-banner-btn py-3 sm:py-5 lg:py-6 shadow-2xl"
          title="Send email to hello@k72.ca"
        >
          <div className="contact-marquee-track relative z-10">
            {/* Repeated Marquee Items for infinite seamless scroll */}
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="flex items-center text-[10vw] sm:text-[8vw] lg:text-[7vw] font-[font1] font-bold uppercase leading-none tracking-tight whitespace-nowrap"
              >
                <span>hello@k72.ca</span>
                <HeartIcon />
              </span>
            ))}
          </div>
        </a>
      </div>

      {/* Social Follow Links */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center mt-12 sm:mt-16">
        <h2 className="uppercase font-[font1] text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 mb-6 sm:mb-8">
          Follow us
        </h2>
        <ul className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <li>
            <a
              href="https://www.facebook.com/K72.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill px-5 sm:px-7 py-2 sm:py-2.5 text-base sm:text-xl lg:text-2xl font-[font1] font-medium"
            >
              FB
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/k72_creation/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill px-5 sm:px-7 py-2 sm:py-2.5 text-base sm:text-xl lg:text-2xl font-[font1] font-medium"
            >
              IG
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/k72"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill px-5 sm:px-7 py-2 sm:py-2.5 text-base sm:text-xl lg:text-2xl font-[font1] font-medium"
            >
              IN
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/agenceK72"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill px-5 sm:px-7 py-2 sm:py-2.5 text-base sm:text-xl lg:text-2xl font-[font1] font-medium"
            >
              BE
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Contact = () => {
  const containerRef = useRef(null);
  const [scrollTilt, setScrollTilt] = useState(-4.5);
  const lastScrollY = useRef(0);

  // Dynamic banner tilt based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current + 5) {
        // Scrolling down
        setScrollTilt(-4.5);
      } else if (currentScrollY < lastScrollY.current - 5) {
        // Scrolling up
        setScrollTilt(4.5);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".contact-section");
      sections.forEach((section) => {
        const lines = section.querySelectorAll(".punchline-line");
        gsap.from(lines, {
          yPercent: 120,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="contact-container w-full overflow-x-hidden">
      {/* Section 1: "project" */}
      <ContactSection targetWord="project" scrollTilt={scrollTilt} />

      {/* Section 2: "brand" */}
      <ContactSection targetWord="brand" scrollTilt={scrollTilt} />

      {/* Section 3: "vision" */}
      <ContactSection targetWord="vision" scrollTilt={scrollTilt} />
    </main>
  );
};

export default Contact;
