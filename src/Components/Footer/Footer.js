import React from 'react'
import "./Footer.css"
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin ,AiOutlineInstagram ,AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='Footer__container'> 
            <div className='Footer__data'>
            
            
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">  <AiFillLinkedin className='icons' / > LinkedIn</a>
                <a href="https://github.com//sajidkhan117" target="_blank" rel="noopener noreferrer">  <BsGithub  className='icons' /> Github  </a>
                <a href="http://www.instagram//sajid556" target="_blank" rel="noopener noreferrer"> <AiOutlineInstagram className='icons'/>  Instagram</a>
                <a href="http://www.whatsapp.com" target="_blank" rel="noopener noreferrer"> <AiOutlineWhatsApp />  +92 312 9700730</a>

            </div>  
     </div>
  )
}

export default Footer;