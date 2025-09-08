import React, {useEffect} from "react";
import { Home } from "./styles";
import { CiWallet } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMobileScreen } from "react-icons/fa6";



const Homepage = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,   // re-animate on scroll/reload
    });
    AOS.refresh();
  }, []);


  return (
    <Home>
      <div className="main">

        <div style={{flex: '1'}} data-aos="slide-right">
          <h1>Our Colors, Our Values</h1>
          <p>
            Green symbolizes growth and renewal — from agriculture and finance
            to the strength of communities working together. It is the color of
            opportunity, progress, and sustainability.
            <p>
              Gold reflects wealth, equity, and lasting value, reminding us that
              true prosperity is shared and sustainable. Dark Blue conveys
              trust, professionalism, and depth, the foundation on which
              meaningful relationships and strong institutions are built.
            </p>

            <p>
              Together, these values shape our identity and guide everything we
              do. They represent a vision of progress that is rooted in trust,
              guided by fairness, and driven by growth that uplifts everyone.
            </p>
            <div>
              <p>
                <span>
                  <button>Register</button>
                </span>{" "}
                with us today and be part of a community built on trust,
                fairness, and growth — where opportunities are created, values
                are protected, and success is shared.
              </p>
            </div>
          </p>
        </div>

        <div className="chart" data-aos="zoom-in">
          
          <div style={{display: 'flex', justifyContent: 'space-between'}}>

          <div className="phonebounce">
          <span><FaMobileScreen /></span>
         </div >

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
          <span style={{color: 'green', fontSize: '30px'}}><CiWallet  /></span>
            <span>My Wallet</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span>₦2,450,000</span>
              <span>Total Balance</span>
            </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between' }}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#111827', borderRadius: '10PX', color:'whitesmoke', padding: '20px 30px'}}>
                <span>₦</span>
                <span>Naira</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#111827', borderRadius: '10PX', color:'whitesmoke', padding: '20px 30px'}}>
                <span>$</span>
                <span>Dollar</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#111827', borderRadius: '10PX', color:'whitesmoke', padding: '20px 30px'}}>
                <span>£</span>
                <span>Pounds</span>
              </div>
              </div>
              <div style={{width: '100%', backgroundColor: 'red', padding: '10px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '10px', border: 'none'}}>
                <span>Daily Growth</span>
                <span>+12.5%</span>
              </div>
           
      
        </div>
      </div>
    </Home>
  );
};

export default Homepage;
