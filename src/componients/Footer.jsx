import React from 'react'
import {Footers} from './styles'
import { FaFacebookF,FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  return (
    <Footers>
      <div className='footter'>

        <div className='EQUITY'>
            <span>© 2025 D'AHOLS EQUITY — ALL RIGHTS RESERVED</span>
        </div>

        <div className='icon'>

            <span><FaFacebookF /></span>
            <span><FaTiktok /></span>
           <span> <BsInstagram /></span>
            <span><FaXTwitter /></span>
        </div>
      </div>
    </Footers>
  )
}

export default Footer
