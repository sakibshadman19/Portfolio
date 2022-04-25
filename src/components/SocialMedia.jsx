import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'


import {FaFacebook} from "react-icons/fa"
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div >
           
            <a href="https://github.com/sakibshadman19" target="_blank" rel="noreferrer"> <BsGithub /></a>
            
        </div>
        <div>
           
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"> <BsLinkedin/></a>

        </div>
        <div>
        
            <a href="https://www.facebook.com/shadman.sakibtanmoy/" target="_blank" rel="noreferrer">     <FaFacebook/></a>

        </div>
    </div>
  )
}

export default SocialMedia