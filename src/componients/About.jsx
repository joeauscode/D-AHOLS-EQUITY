import React, {useEffect}  from 'react'
import {Aboutus} from './styles'
import Save from '../assets/image/about.png'
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {

      useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,   
    });
    AOS.refresh();
  }, []);

  return (
    <Aboutus>
      <div className='main'>
      <section>
        <div style={{flex: '1', display: 'flex', flexDirection: 'column', gap: '20px'}} data-aos="fade-right"> 
            <h1>About The Cooperative</h1>
            <p>At <strong>D’AHOLS Equity Multipurpose Cooperative Society (MPCS)</strong>, we believe in building wealth through unity, fairness, and shared opportunities. Our mission is to empower members by creating access to resources that improve financial security, enhance livelihoods, and support long-term growth.</p>
            <p>We provide more than financial services — we provide a community. From cash support and loans to household essentials and investment platforms, every service we offer is designed to help our members achieve stability and prosperity.</p>
         </div>

         <div className="image" data-aos="zoom-in">
            <img src={Save} alt="Save" />
         </div>
      </section>
      </div>
    </Aboutus>
  )
}

export default About
