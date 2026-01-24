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
        <div className='flex w-full justify-between p-5 items-start'>
          {/* Logo */}
          <a className="c-header_logo relative z-20 bg-amber-50 h-[15vh] w-[13vw] rounded-2xl" href="/" title="Go to home page">
            <svg width="103" height="44" viewBox="0 0 103 44" className="fill-white">
              <path d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,0 Z" />
            </svg>
          </a>

          {/* CLOSE BUTTON */}
          <div className='h-25 w-30  cursor-pointer' onClick={handleCloseClick}>
            <div className='h-38 w-1 -rotate-50 origin-top absolute bg-[#D3FD50]'></div>
            <div className='h-38 w-1 right-0 rotate-50 origin-top absolute bg-[#D3FD50]'></div>
          </div>
        </div>

        {/* Links */}
        {/* Keep all your .link blocks exactly as they are */}
         <div className='hello' >
        <div onClick={handleprojets} className='link origin-top relative  border-t-1 border-white '>
        <h1  className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3 '>PROJETS</h1>
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
        <div onClick={handleagence} className='link origin-top relative  border-t-1 border-white'>
        <h1  className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>AGENCE</h1>
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
        <div onClick={handlecontact} className='link relative origin-top border-t-1 border-white'>
        <h1 className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>CONTACT</h1>
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
        <div onClick={handleblog} className='link relative origin-top  border-t-1 border-white'>
        <h1 className='text-center font-[font1] text-[8vw] leading-[9vw] pt-3'>BLOG</h1>
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