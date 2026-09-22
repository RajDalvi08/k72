import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
  const containerRef = useRef(null)
  const fullNavLinkRef = useRef(null)
  const navigate = useNavigate()

  useGSAP(() => {
    // Initial states
    gsap.set(containerRef.current, {
      autoAlpha: 1,
    })

    gsap.set('.menu-stairs', {
      scaleY: 1,
      transformOrigin: 'bottom',
    })

    gsap.set('.menu-links .link', {
      y: 80,
      opacity: 0,
    })

    gsap.set('.menu-header', {
      y: -40,
      opacity: 0,
    })

    const openTl = gsap.timeline({
      defaults: { ease: 'power4.out' }
    })

    openTl
      .to('.menu-stairs', {
        scaleY: 0,
        transformOrigin: 'top',
        stagger: 0.08,
        duration: 0.7,
        ease: 'power4.inOut',
      })
      .to(
        '.menu-header',
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        '-=0.3'
      )
      .to(
        '.menu-links .link',
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
        },
        '-=0.3'
      )
  }, [])

  const handleClose = () => {
    const closeTl = gsap.timeline({
      onComplete: () => {
        navigate(-1)
      }
    })

    closeTl
      .to('.menu-links .link', {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power4.in',
      })
      .to(
        '.menu-stairs',
        {
          scaleY: 1,
          transformOrigin: 'top',
          stagger: 0.08,
          duration: 0.6,
          ease: 'power4.inOut',
        },
        '-=0.2'
      )
  }

  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <div
      ref={containerRef}
      id="menupage"
      className="relative z-40 overflow-hidden text-white min-h-screen w-full bg-black uppercase select-none"
    >
      {/* 5-COLUMN STAIRS TRANSITION */}
      <div className="absolute top-0 left-0 z-20 h-full w-full pointer-events-none">
        <div className="flex h-full w-full">
          <div className="menu-stairs h-full w-1/5 bg-black" />
          <div className="menu-stairs h-full w-1/5 bg-white" />
          <div className="menu-stairs h-full w-1/5 bg-black" />
          <div className="menu-stairs h-full w-1/5 bg-white" />
          <div className="menu-stairs h-full w-1/5 bg-black" />
        </div>
      </div>

      {/* CONTENT */}
      <div ref={fullNavLinkRef} className="relative z-30 flex flex-col justify-between min-h-screen">
        {/* HEADER */}
        <div className="menu-header flex w-full justify-between p-4 sm:p-6 lg:p-8 items-start">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-20 block text-white transition-opacity duration-300 hover:opacity-80"
            title="Go to home page"
          >
            <div className="sr-only">K72</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
              className="w-20 sm:w-24 lg:w-28 h-auto fill-current"
            >
              <path
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              />
            </svg>
          </Link>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            aria-label="Close navigation menu"
            className="group relative cursor-pointer p-2 flex items-center justify-center transition-transform duration-300 hover:rotate-90"
            onClick={handleClose}
          >
            <svg
              viewBox="0 0 139 139"
              className="w-10 h-10 sm:w-12 sm:h-12 stroke-white group-hover:stroke-[#D3FD50] transition-colors duration-200"
              fill="none"
              strokeWidth="4"
              strokeLinecap="square"
            >
              <line x1="10" y1="10" x2="129" y2="129" />
              <line x1="129" y1="10" x2="10" y2="129" />
            </svg>
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="menu-links my-auto">
          {/* PROJETS */}
          <div
            onClick={() => navigateTo('/projects')}
            className="link origin-top relative border-t border-white cursor-pointer"
          >
            <h1 className="text-center font-[font1] text-[8vw] leading-[9vw] pt-3">
              PROJETS
            </h1>
            <div className="moveLink top-0 text-black absolute inset-0 flex bg-[#D3FD50] items-center overflow-hidden">
              <div className="moveX flex items-center gap-4 shrink-0">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  See everything
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  See everything
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center gap-4 shrink-0">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  See everything
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  See everything
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* AGENCE */}
          <div
            onClick={() => navigateTo('/agence')}
            className="link origin-top relative border-t border-white cursor-pointer"
          >
            <h1 className="text-center font-[font1] text-[8vw] leading-[9vw] pt-3">
              AGENCE
            </h1>
            <div className="moveLink top-0 text-black absolute inset-0 flex bg-[#D3FD50] items-center overflow-hidden">
              <div className="moveX flex items-center gap-4 shrink-0">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Know us
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Know us
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center gap-4 shrink-0">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Know us
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Know us
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div
            onClick={() => navigateTo('/contact')}
            className="link relative origin-top border-t border-white cursor-pointer"
          >
            <h1 className="text-center font-[font1] text-[8vw] leading-[9vw] pt-3">
              CONTACT
            </h1>
            <div className="moveLink top-0 text-black absolute inset-0 flex bg-[#D3FD50] items-center overflow-hidden">
              <div className="moveX flex items-center gap-4 shrink-0">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Send us a fax
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Send us a fax
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center gap-4 shrink-0">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Send us a fax
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Send us a fax
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* BLOG */}
          <div
            onClick={() => navigateTo('/blog')}
            className="link relative origin-top border-t border-b border-white cursor-pointer"
          >
            <h1 className="text-center font-[font1] text-[8vw] leading-[9vw] pt-3">
              BLOG
            </h1>
            <div className="moveLink top-0 text-black absolute inset-0 flex bg-[#D3FD50] items-center overflow-hidden">
              <div className="moveX flex items-center gap-4 shrink-0">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Read articles
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Read articles
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center gap-4 shrink-0">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Read articles
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[9vw] pt-3">
                  Read articles
                </h2>
                <img
                  className="rounded-full shrink-0 w-36 h-20 object-cover"
                  src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 sm:p-6 lg:p-8 flex justify-between items-end text-xs opacity-70">
          <span>K72 AGENCY</span>
          <span className="font-[font1] lowercase">contact@k72.ca</span>
        </div>
      </div>
    </div>
  )
}

export default Menu
