// import React from 'react'
import { motion } from 'framer-motion'
// import { images } from '../../constants'
import { AppWrap } from '../../wrapper'




import React from 'react'
import shadman from "./shadman.jpg"
import "./Header.scss"




const Header = () => {
  return (
    <div className='start1'>
      <motion.div
        whileInView={{
          x: [-100, 0], opacity: [0, 1]

        }}
        transition={{ duration: 1.0 }}
        className="app__header-info">

        <div className='start2'>

          <h1 className='home-data-title'> Hi, I'm Shadman</h1>
          <h3 className='home-data-subtitle'>Full Stack Developer</h3>
          <br />
          <p className='home-data-description'>High Level experience in web development, producing quality work.</p>
          <br />
          <br />



          <a href="https://drive.google.com/file/d/1wskg2uP4_cOUQ6Efsu7fMqHuvXb490Tm/view" className="start3" target="_blank" rel='noreferrer' >Download CV</a>





        </div>
      </motion.div>
      <div className=''>
        <motion.div
          whileInView={{
            x: [100, 0], opacity: [0, 1]

          }}
          transition={{ duration: 1.0 }}
          className="app__header-info">

          <img className='image1' src={shadman} alt="" />

        </motion.div>
      </div>


    </div>
  )
}

export default AppWrap(Header, 'home')
