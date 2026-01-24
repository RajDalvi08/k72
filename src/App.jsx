import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Stairs from './components/Stairs'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import Privacynotice from './pages/Privacynotice'

const App = () => {
  const [visible, setVisible] = useState(true)

const navTl = useRef(null)


  return (
    <>
    <div className='overflow-x-hidden'>
<FullScreenNav navTl={navTl} />
<Navbar onMenuClick={() => navTl.current.restart()} />
 


      <Stairs
        onStart={() => setVisible(false)}
        onReveal={() => setVisible(true)}
      />

      <div
        className="text-white"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.25s ease'
        }}
      >
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<Privacy />} /> 
          <Route path="/privacy-notice" element={<Privacynotice />} />
          
        </Routes>
      
      </div> 
      </div>
      
    </>
  )
}

export default App
