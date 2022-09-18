import React from 'react'
import mec_logo from '../../assets/logos/mec_logo.a06dac18.png'
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import './Footer.css'
import excel_logo from '../../assets/logos/excel2022.svg'
const Footer = () => {
  return (
    <div className='footer__main'>
      <div className="footer__logos">
        <div ><a href='https://www.mec.ac.in/'>< img src={mec_logo} className="mec__logo"  alt="" /></a></div>
        <div className='footer_contact_social'>
        <a href={`facebook.com`} target="_blank" rel="noreferrer">
          <FiFacebook style={{border:'none'}} className='contact_social_icon'/>
        </a>
        <a href={`instagram.com`} target="_blank" rel="noreferrer">
          <FiInstagram className='contact_social_icon'/>
        </a>
        <a href="achyuthmohan.me" target="_blank" rel="noreferrer">
          <FiLinkedin className='contact_social_icon'/>
        </a>
      </div>
        <div ><a href='https://excelmec.org/'><img src={excel_logo}className="excel__logo" alt="" /></a></div>
      </div>
      <div className="footer__made">Made with ❤️ Excel 2022</div>

    </div>
  )
}

export default Footer