import React, {useEffect} from 'react'
import {Conactform} from './styles'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
       useEffect(() => {
        AOS.init({
          duration: 2000,
          once: false,   
        });
        AOS.refresh();
      }, []);
    
    
  return (
    <Conactform>
      <div className="main">

        <form action="" data-aos="zoom-in">
         <h1>Conact Us</h1>
         <div className='form'>
            <div>
             <label htmlFor="">fullname</label>
             <input type="text" name="" id="" />
            </div>
             <div>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
             </div>
            
            <div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <button className='btn' type='submit'>Send</button>
                </div>
            </div>
         </div>
        </form>


        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d4056018.3088891674!2d3.7079944!3d6.8959407!3m2!1i1024!2i768!4f13.1!2m1!1sNo%2003%20Opete%20rd%20ritahillz%20kitchen%20opp%20plantation%20city!5e0!3m2!1sen!2sng!4v1757331997095!5m2!1sen!2sng"
        
        width="600"
          height="450" 
          style={{border: 0, width: '100%', height: '250px'}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
  
          
          </iframe>

      </div>
    </Conactform>
  )
}

export default Contact
