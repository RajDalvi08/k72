import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'


const FullScreenNav = ({ navTl }) => {
  const containerRef = useRef(null)
  const closeTl = useRef(null)
  const fullNavLinkRef = useRef(null)
  const navigate = useNavigate()
 


  useGSAP(() => {

    // 🔴 HIDE FULLSCREEN NAV INITIALLY
    gsap.set(containerRef.current, {
      autoAlpha: 0,
      pointerEvents: 'none',
    })

    gsap.set(fullNavLinkRef.current.children, {
      y: -120,
      opacity: 0,
    })

    gsap.set('.stairs', {
      scaleY: 1,
      transformOrigin: 'bottom',
    })

    gsap.set('.hello .link', {
  y: 100,
  opacity: 0,
})


    /* ---------- OPEN ---------- */
    const openTl = gsap.timeline({
      paused: true,
      onStart: () => {
        gsap.set(containerRef.current, {
          autoAlpha: 1,
          pointerEvents: 'auto',
        })
        gsap.set('.stairs', {
          scaleY: 1,
          transformOrigin: 'bottom',
        })
        gsap.set(fullNavLinkRef.current.children, {
          y: -60,
          opacity: 0,
        })
        gsap.set('.hello .link', {
          y: 80,
          opacity: 0,
        })
      },
    })

    openTl
      .to('.stairs', {
        scaleY: 0,
        transformOrigin: 'top',
        stagger: 0.1,
        duration: 0.8,
        ease: 'power4.inOut',
      })
     .to(
    '.hello',
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power4.out',
    },
    '-=0.4'
  )
    .to(
    '.hello .link',
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,   // ⭐ one by one
      duration: 0.8,
      ease: 'power4.out',
    },
    '-=0.2'
  )
      

      
      .to(
        fullNavLinkRef.current.children,
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power4.out',
        },
        '-=0.4'
      )

    navTl.current = openTl

    /* ---------- CLOSE ---------- */
    const closeTimeline = gsap.timeline({
      paused: true,
      onComplete: () => {
        gsap.set(containerRef.current, {
          autoAlpha: 0,
          pointerEvents: 'none',
        })
      },
    })

    closeTimeline
      .to(fullNavLinkRef.current.children, {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power4.inOut',
      })
      .to(
        '.stairs',
        {
          scaleY: 1,
          transformOrigin: 'top',
          stagger: 0.1,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '-=0.3'
      )
 .to(
  '.hello ',
  {
    y: 80,
    opacity: 0,
    duration: 0.5,
    ease: 'power4.in',
  },
  '-=0.3'
)
.to(
  '.hello .link ',
  {
    y: 80,
      opacity: 0,
      stagger: 0.2,   // ⭐ one by one
      duration: 0.8,
      ease: 'power4.out',
  },
  '-=0.5'
)



      

    closeTl.current = closeTimeline
  }, [])


  const handleCloseClick = () => {
    closeTl.current.restart()
  }
  const handleprojets = () => {
    closeTl.current.restart()
    navigate('/projects')
  }
  const handleagence = () => {
    closeTl.current.restart()
    navigate('/agence')
  }
  
  const handlecontact = () => {
    closeTl.current.restart()
    navigate('/contact')
  }
  const handleblog = () => {
    closeTl.current.restart()
    navigate('/blog')
  }


  

  return (
    
    <div ref={containerRef} id='fullscreennav' className='z-40 overflow-hidden text-white h-screen w-full fixed bg-black uppercase'>
        
      {/* STAIRS */}
      <div className="absolute top-0 left-0 z-20 h-screen w-full pointer-events-none">
        <div className="flex h-full w-full">
          <div className="stairs h-full w-1/5 bg-black" />
          <div className="stairs h-full w-1/5 bg-white" />
          <div className="stairs h-full w-1/5 bg-black" />
          <div className="stairs h-full w-1/5 bg-white" />
          <div className="stairs h-full w-1/5 bg-black" />
        </div>
      </div>

      {/* NAV CONTENT */}
      <div ref={fullNavLinkRef} className='relative z-30'>
        <div className='flex w-full justify-between p-4 sm:p-6 lg:p-8 items-start'>
          {/* Logo */}
          <a className="relative z-20 block text-white transition-opacity duration-300 hover:opacity-80" href="/" title="Go to home page">
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
          </a>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            aria-label="Close navigation menu"
            className="group relative cursor-pointer p-2 flex items-center justify-center transition-transform duration-300 hover:rotate-90"
            onClick={handleCloseClick}
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

        {/* Links */}
        {/* Keep all your .link blocks exactly as they are */}
         <div className='hel         <div onClick={handleprojets} className='link origin-top relative  border-t-1 border-white '>
        <h1  className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3 '>PROJETS</h1>
       <div className='moveLink top-0 text-black absolute flex bg-[#D3FD50]'>
            <div className='moveX flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>See everything</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>See everything</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
             <div className='flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>See everything</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>See everything</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>

              
        </div> 
      
        </div>
        <div onClick={handleagence} className='link origin-top relative  border-t-1 border-white'>
        <h1  className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>AGENCE</h1>
       <div className='moveLink top-0 text-black absolute flex bg-[#D3FD50]'>
            <div className='moveX flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Know us</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Know us</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
             <div className='flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Know us</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Know us</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>

              
        </div> 
      
        </div>
        <div onClick={handlecontact} className='link relative origin-top border-t-1 border-white'>
        <h1 className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>CONTACT</h1>
       <div className='moveLink top-0 text-black absolute flex bg-[#D3FD50]'>
            <div className='moveX flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Send us a fax</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Send us a fax</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
             <div className='flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Send us a fax</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Send us a fax</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>

              
        </div> 
      
        </div>
        <div onClick={handleblog} className='link relative origin-top  border-t-1 border-white'>
        <h1 className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>BLOG</h1>
       <div className='moveLink top-0 text-black absolute flex bg-[#D3FD50]'>
            <div className='moveX flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Read articles</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Read articles</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
             <div className='flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Read articles</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Read articles</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>

              
        </div> 
      
        </div> </div>
    </div> 
      </div>
    </div>
  )
}

export default FullScreenNav

    {/*  <div className=''>
        <div className='link relative  border-t-1 border-white '>
        <h1 className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3 '>PROJETS</h1>
       <div className='moveLink top-0 text-black absolute flex bg-[#D3FD50]'>
            <div className='moveX flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
             <div className='flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>

              
        </div> 
      
        </div>
        <div className='link relative  border-t-1 border-white'>
        <h1 className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>PROJETS</h1>
       <div className='moveLink top-0 text-black absolute flex bg-[#D3FD50]'>
            <div className='moveX flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
             <div className='flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>

              
        </div> 
      
        </div>
        <div className='link relative  border-t-1 border-white'>
        <h1 className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>PROJETS</h1>
       <div className='moveLink top-0 text-black absolute flex bg-[#D3FD50]'>
            <div className='moveX flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
             <div className='flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>

              
        </div> 
      
        </div>
        <div className='link relative  border-t-1 border-white'>
        <h1 className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>PROJETS</h1>
       <div className='moveLink top-0 text-black absolute flex bg-[#D3FD50]'>
            <div className='moveX flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
             <div className='flex  items-center'>
             <h2 className=' whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
             <h2 className='  whitespace-nowrap text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>Pour Tout Voir</h2>
             <img className=" h-36 rounded-full shrink-0 w-[96] object-cover max-w-[280px] h-auto" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>

              
        </div> 
      
        </div>
    </div> */}