import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Privacynotice() {
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
          Privacy Notice
        </h1>

        <p className="text-xl md:text-2xl font-semibold tracking-tight">
        under the General Data Protection Regulation (GDPR)
        </p>
      </div>

      {/* Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">
       About this notice
        </h2>

        <p className="font-medium">
          Plus Company Americas Inc., and its subsidiaries, (together, the “Company”) is committed to protecting the privacy and security of your personal information. This privacy notice describes how we collect and use personal information about you as an EU resident in accordance with data protection law and is not intended to apply to any individuals outside the EU. Please read it carefully. 
        </p>

        <p className="font-medium">
          Data protection law says that the personal information we hold about you must be:
        </p>

        <p className="font-medium">
          - Used lawfully, fairly and in a transparent way.

- Collected only for valid purposes that we have clearly explained to you and not used in any way that is incompatible with those purposes.

- Relevant to the purposes we have told you about and limited only to those purposes.

- Accurate and kept up to date.

- Kept only as long as necessary for the purposes we have told you about.

- Kept securely.

If you have any questions about this notice or how we collect and use personal information about you please contact us
        </p>
      </section>

      {/* Personal Info */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">Information about us</h2>

        <p className="font-medium">
        We are Plus Company Americas Inc. a company incorporated in the province of Alberta, Canada. Our registered office is at 300 St-Paul Street, Suite 300, Quebec City, Quebec, G1K 7R1 and our registered company number is 2018688800.
        </p>

        <p className="font-medium">
          If you have any questions, our contact details are:
        </p>
         <p className="font-medium">
         300 St-Paul Street, Suite 300, Quebec City, Quebec, G1K 7R1 Attention: GDPR request
gdpr@pluscompany.com
        </p>
         <p className="font-medium">
         As we are based outside the EU, our nominated representative for the purposes of data protection law is Mr. Mark Cater, his contact details are below:
        </p>
            <p className="font-medium">
        Alphabeta Building, 2 Worship Street, London, UK EC2A 2AH Attention: GDPR request
gdpr@pluscompany.com
        </p>
   
      </section>

      {/* Cookies */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">
       Contact information and other correspondence
        </h2>

        <p className="font-medium">
         If you are an individual and you enter into a contract with us (or someone does so on your behalf) there will be personal information about you relating to that contract such as your name, contact details, contract details, delivery details, and correspondence with us about the contract.
        </p>

        <p className="font-medium">
          Other correspondence or interaction (for example by email, telephone, post, SMS, social media, or via our website) between you and us, will include personal information (such as names and contact details) in that correspondence. This may include enquiries, reviews, follow-up comments or complaints lodged by or against you and disputes with you or your organisation.
        </p>

        <p className="font-medium">
       Call information. We may also collect details of phone numbers used to call our organisation and the date, time and duration of any calls. Please note that if we record your calls to or from us, we will inform you of this.
        </p>
        <p  className="font-medium">We will keep and use that information to carry out our contract with you (if applicable), to comply with any legal requirements for us to maintain certain records or carry out certain verifications, and/or for our legitimate interests in dealing with a complaint or enquiry and administering your (or your organisation’s) account or order and any services we offer, as well as to review and improve our offerings, including troubleshooting, data analysis, testing, research, statistical and survey purposes.</p>
        <p  className="font-medium">Where your information relates to a contract, it is kept for a period of up to seven years after your account is closed to enable us to deal with any after sales enquiries or claims and as required for tax purposes.</p>
        <p  className="font-medium">Any other information set out above is kept for seven years.</p>
      </section>

      {/* Contact */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">Marketing</h2>

    
        <p className="font-medium">We may collect your name and contact details (such as your email address, phone number or address) in order to send you information about our products and services which you might be interested in. We may collect this directly from you, or through a third party. If a third party collected your name and contact details, they will only pass those details to us for marketing purposes if you have consented to them doing so.</p>
        <p className="font-medium">You always have the right to “opt out” of receiving our marketing. You can exercise the right at any time by contacting us. If we send you any marketing emails, we will always provide an unsubscribe option to allow you to opt out of any further marketing emails. If you “opt-out” of our marketing materials you will be added to our suppression list to ensure we do not accidentally send you further marketing. </p>
        <p className="font-medium">If you are an existing customer or are acting in a professional capacity as part of a company or LLP we use your contact details as necessary for our legitimate interests in marketing to you and maintaining a list of potential customers.</p>
        <p className="font-medium">If you are not an existing customer, and are not acting in a professional capacity as part of a company or LLP, we will only contact you for marketing purposes with your consent (whether we have collected your details directly from you, or through a third party).</p>
        <p className="font-medium">We never share your name or contact details with third parties for marketing purposes unless we have your “opt-in” consent to share your details with a specific third party for them to send you marketing. We do use third party service providers to send out our marketing, but we only allow them to use that information on our instructions and where they have agreed to treat the information confidentially and to keep it secure.</p>
        <p className="font-medium">We retain your details on our marketing list until you “opt-out” at which point we add you to our suppression list. We keep that suppression list indefinitely to comply with our legal obligations to ensure we don’t accidentally send you any more marketing.</p>
      </section>

      {/* Changes */}
      <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">Website Information</h2>

        <p className="font-medium">
         We may collect information about you and your use of our website via technical means such as cookies, webpage counters and other analytics tools. This may include your IP address, login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website. We use this as necessary for our legitimate interests in administering and improving our website and its content, to ensure it operates effectively and securely, and to develop our business and inform our marketing strategy. We may also create aggregate statistical data from that information (for instance, overall numbers of website visitors) which is not personal information about you.
        </p>
        <p className="font-medium">We keep this website information about you for one year from when it is collected or the relevant cookie expires. </p>
        <p className="font-medium">Our website may, from time to time, contain links to third party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit.</p>
    
      </section>

       <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">Employee information</h2>

        <p className="font-medium">
        If you work for one of our customers, suppliers or business partners, the information we collect about you may include your contact information, details of your employment and our relationship with you. This information may be collected directly from you, or provided by your organisation. Your organisation should have informed you that your information would be provided to us, and directed you to this policy. We use this as necessary for our legitimate interests in managing our relationship with your organisation. If we have a business relationship with you or your organisation, we may receive information about you from your organisation. 
        </p>
       
        <p className="font-medium">We keep this information for up to seven years after the end of our relationship with your organisation.</p>
        
      </section>
          <section className="space-y-6 mb-16">
        <h2 className="text-3xl font-bold">Your Rights</h2>

        <p className="font-medium">
     Data protection law gives you, as an EU-resident, a number of rights when it comes to personal information we hold about you. The key rights are set out below. Under certain circumstances, by law you have the right to:</p>
       
        <p className="font-medium">- Be informed in a clear, transparent and easily understandable way about how we use your personal information and about your rights. This is why we are providing you with the information in this notice. If you require any further information about how we use your personal information, please let us know.</p>
        <p className="font-medium">- Request access to your personal information (commonly known as a “data subject access request”). This enables you to receive a copy of the personal information we hold about you and to check that we are lawfully processing it.</p>
        <p className="font-medium">- Request correction of the personal information that we hold about you. This enables you to have any incomplete or inaccurate information we hold about you corrected.</p>
        <p className="font-medium">- Request erasure of your personal information. This enables you to ask us to delete or remove personal information where there is no good reason for us continuing to process it (for instance, we may need to continue using your personal data to comply with our legal obligations). You also have the right to ask us to delete or remove your personal information where you have exercised your right to object to processing (see below).</p>
        <p className="font-medium">- Object to processing of your personal information where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to us using your information on this basis and we do not have a compelling legitimate basis for doing so which overrides your rights, interests and freedoms (for instance, we may need it to defend a legal claim). You also have the right to object where we are processing your personal information for direct marketing purposes.</p>
        <p className="font-medium">- Request the restriction of processing of your personal information. This enables you to ask us to suspend the processing of personal information about you, for example if you want us to establish its accuracy or the reason for processing it.</p>
        <p className="font-medium">- Request the transfer of your personal information to another party where you provided it to us and we are using it based on your consent, or to carry out a contract with you, and we process it using automated means.</p>
        <p className="font-medium">- Withdraw consent. In the limited circumstances where we are relying on your consent (as opposed to the other bases set out above) to the collection, processing and transfer of your personal information for a specific purpose, you have the right to withdraw your consent for that specific processing at any time. Once we have received notification that you have withdrawn your consent, we will no longer process your information for the purpose or purposes you originally agreed to, unless we have another compelling legitimate interest in doing so.</p>
        <p className="font-medium">- Lodge a complaint. If you think that we are using your information in a way which breaches data protection law, you have the right to lodge a complaint with your national data protection supervisory authority.</p>
        <p className="font-medium">If you want to review, verify, correct or request erasure of your personal information, object to the processing of your personal information, withdraw your consent to the processing of your personal information or request that we transfer a copy of your personal information to another party, please contact us</p>
        <p className="font-medium">Please note that when we act as sub-contractor (data processor) for a client we may refer you to the client (data controller) who will act on your requests below or give us authorisation to do so.</p>
        <p className="font-medium">No fee usually required. You will not have to pay a fee to access your personal information (or to exercise any of the other rights). However, we may charge a reasonable fee if your request for access is clearly unfounded or excessive. Alternatively, we may refuse to comply with the request in such circumstances.</p>
        <p className="font-medium">What we may need from you. We may need to request specific information from you to help us understand the nature of your request, to confirm your identity and ensure your right to access the information (or to exercise any of your other rights). This is another appropriate security measure to ensure that personal information is not disclosed to any person who has no right to receive it.</p>
        <p className="font-medium">Timescale. Please consider your request responsibly before submitting it. We will respond to your request as soon as we can. Generally, this will be within one month from when we receive your request but, if the request is going to take longer to deal with, we will let you know</p>
      </section>
    </div>
    <section  className="space-y-6">
         <h2 className="text-3xl font-bold">Change to this Privacy Notice</h2>
         <p className="font-medium">Any changes we make to our privacy notice in the future will be posted on this page and, where appropriate, notified to you by e-mail or otherwise. Please check back frequently to see any updates or changes to our privacy notice.</p>
    </section>
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
  )
}

export default Privacynotice
