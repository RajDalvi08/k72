import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = ({ onStart, onReveal }) => {
  const { pathname } = useLocation()
  const stairParentRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power4.inOut',
        duration: 0.5
      }
    })

    // hide content immediately
    if (onStart) onStart()

    tl.fromTo(
      stairParentRef.current,
      { autoAlpha: 1 },
      { autoAlpha: 1 }
    )

    tl.fromTo(
      '.stair',
      
      { height: 0 },
      { height: '100%',  stagger: {
            amount:0.25,
            from:'end'
        },delay:0.35}
    )

    tl.fromTo(
      '.stair',
      { y: '0%' },
      {
        y: '100%',
        stagger: {
            amount:0.25,
            from:'end'
        },
        delay:0.35,
        onStart: () => {
          // reveal page early
          if (onReveal) onReveal()
        }
      }
    )

    tl.to(stairParentRef.current, {
      autoAlpha: 0
    })
  }, [pathname])

  return (
    <div
      ref={stairParentRef}
      className="fixed top-0 left-0 z-20 h-screen w-full pointer-events-none"
    >
      <div className="flex h-full w-full">
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
      </div>
    </div>
  )
}

export default Stairs
