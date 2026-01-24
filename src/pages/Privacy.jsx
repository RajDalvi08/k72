import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Privacy() {
   const containerRef = useRef(null);
  /* ================= GSAP ================= */
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(" .footer").forEach((row) => {
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
    <div className="p-0" ref={containerRef}>
    <div className="w-full min-h-screen bg-white text-black px-6 md:px-20 lg:px-32 py-16">
      
      {/* Header */}
      <div className="mb-16">
        <h1 className="uppercase text-[10vw] md:text-[6vw] font-bold mb-6">
          Privacy Policy
        </h1>

        <p className="text-xl md:text-2xl font-semibold tracking-tight">
          “PLUS COMPANY” AND “COMPANY” MEAN PLUS COMPANY CANADA INC. AND ITS
          AFFILIATES AND BUSINESS UNITS IN CANADA.
        </p>
      </div>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">
          Plus Company respects the privacy of its customers.
        </h2>

        <p className="font-medium">
          This Policy concerns you. It describes how we collect, use, disclose
          and protect your personal information, including when you visit our
          website or any website we own, operate or control (collectively, the
          “Site”), when you contact us by phone or email or when you communicate
          with us via social media.
        </p>

        <p className="font-medium">
          We may update this Policy (see “Changes to the Policy” below).
        </p>

        <p className="font-medium">
          If you submit personal information to us, we assume that you authorize
          us to use and disclose it as described in this Policy.
        </p>
      </section>

      {/* Personal Info */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">What is personal information?</h2>

        <p className="font-medium">
          Personal information is information that identifies you directly or
          indirectly, on its own or with other information, such as your name,
          contact details or IP address.
        </p>

        <p className="font-medium">
          We may make full use of all information that is de-identified,
          aggregated or otherwise not in personally identifiable form.
        </p>
      </section>

      {/* Cookies */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">
          Cookies and other automated technology
        </h2>

        <p className="font-medium">
          A “cookie” is a small text file placed onto a user’s browser to store
          information. A “web beacon” tracks activity on pages or emails.
        </p>

        <p className="font-medium">
          We and/or third parties may use these technologies for analytics,
          performance monitoring, and site improvement.
        </p>

        <p className="font-medium">
          We use Google Analytics to understand site usage. To learn more, visit
          Google’s privacy policy.
        </p>
      </section>

      {/* Contact */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">How to contact us</h2>

        <p className="font-medium">
          For questions about this Policy, contact our Privacy Officer at{" "}
          <span className="font-semibold underline">
            privacy@pluscompany.com
          </span>
        </p>
      </section>

      {/* Changes */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Changes to This Privacy Policy</h2>

        <p className="font-medium">
          This Policy may be revised from time to time. Review it before
          submitting personal information or using our services.
        </p>
      </section>
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
        </div>
      </div>

    </div>
  );
}

export default Privacy;
