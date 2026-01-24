import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      
      <Link
        to="/projects"
        className='text-[5.5vw] leading-[6vw] border-[5px] border-white rounded-full px-14 pt-3 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'
      >
        Projects
      </Link>

      <Link
        to="/agence"
        className='text-[5.5vw] leading-[6vw] border-[5px] border-white rounded-full px-14 pt-3 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'
      >
        Agence
      </Link>

    </div>
  )
}

export default HomeBottomText
