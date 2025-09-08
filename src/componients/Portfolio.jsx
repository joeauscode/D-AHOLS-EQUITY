import React, {useEffect} from 'react';
import {Portfolios} from './styles'
import Port from '../assets/image/portfolio.jpg'
    import AOS from "aos";
    import "aos/dist/aos.css";
const Portfolio = () => {


          useEffect(() => {
        AOS.init({
          duration: 2000,
          once: false,   
        });
        AOS.refresh();
      }, []);
    
  return (
  <Portfolios>
    
    <div className="main">
    <section data-aos="fade-up">
      <h2>Our Portfolio</h2>
      <ul>
        <li>
          <strong>Payday Loans:</strong> Short-term salary advances with fast approval to cover urgent needs.
        </li>
        <li>
          <strong>Business Loans:</strong> Flexible financing for SMEs—working capital, inventory, and expansion.
        </li>
        <li>
          <strong>Personal Savings:</strong> Structured savings plans that build discipline and earn returns.
        </li>
        <li>
          <strong>Asset Finance:</strong> Acquire equipment and vehicles with staged payments.
        </li>
        <li>
          <strong>Investment (Real Estate):</strong> Lands, completed & uncompleted buildings, and plazas for long-term value.
        </li>
        <li>
          <strong>Market Places:</strong> Merchant-friendly platforms connecting buyers and sellers.
        </li>
        <li>
          <strong>Third Party Lenders:</strong> Vetted partners that extend responsible credit options.
        </li>
        <li>
          <strong>Ember Savings:</strong> Sept–Dec savings drive to hit Q4 and festive goals.
        </li>
      </ul>
    </section>



    <div className="images">
     <img src={Port} alt="Portforlio" />

    </div>


    </div>
    
  </Portfolios>
  );
};

export default Portfolio;
