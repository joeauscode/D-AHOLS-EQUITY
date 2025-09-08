import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from '../assets/image/logo.png'
import { FiMenu } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Navbar } from "./styles";
import { IoCloseSharp } from "react-icons/io5";




const Nav = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const GOhome = () => {
      setTimeout(() => {
     window.location.href = '/'
  }, 1000);
  }



  const [openloader, setOpenloader] = useState(false)


  // signup
  const reload = () => {
      setTimeout(() => {
     window.location.href = '/login'
  }, 2000);}

  // contact us
  const reloader = () => {
      setTimeout(() => {
     window.location.href = '/contact'
  }, 2000);}

  // Aboutt
  const Aboutt = () => {
      setTimeout(() => {
     window.location.href = '/about'
  }, 2000);}

  // pORTFORLIO
  const portfolio = () => {
      setTimeout(() => {
     window.location.href = '/portfolio'
  
  }, 2000);}

  // loader for all
  const loader = () => {
    setOpenloader(prev => !prev)
  }


  const [menubutton, setMenubutton] = useState(false)

  const openmenu = () => {
    setMenubutton(!menubutton)
  }




 

   useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/session"); 
        const data = await res.json();
        setIsLoggedIn(data.loggedIn); 
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <Navbar data-aos="fade-down">

         {openloader && (
       <div className='blur' onClick={() => setOpenloader(false)}>
       </div>
   )}

{openloader && (
  <div className="loading">
    <button className="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
  </div>
)}



          <div className="main">
        <div className="left" onClick={ ()=> {GOhome(); loader();}}>
          <img src={image} alt="Logo" />
        </div>
        
        <div className="menbar" onClick={openmenu}>
          {menubutton ? (
           <IoCloseSharp />
          ):(
          <FiMenu />
          )}
         
        </div>

       
         <div className="middle">
          {isLoggedIn ? (
           <div>
            <ul>
              <li>Dashboard</li>
              <li>Myaccount</li>
            </ul>
           </div>
          ):(
         <div className="middle">
          <Link onClick={ ()=> {GOhome(); loader();}}>Home</Link>
          <Link onClick={() => {portfolio(); loader();}}>Portfolio</Link>
          <Link onClick={() => {Aboutt(); loader();}}>About</Link>
          <Link onClick={()=>  {reloader();loader();}}>Contact</Link>
         </div>
          )}
          
        </div>

        <div className="right">
          {isLoggedIn ? (
            <MdOutlineAccountCircle />
          ) : (
            <div className="right">
              <div className="a" onClick={reload}>
                <Link onClick={loader}>Signup</Link>
              </div>
            </div>
          )}
        </div>
       </div>

{menubutton && (


<div className="rightnave">
            {isLoggedIn ? (
           <div className="mobilenav">
            <ul>
              <li>Dashboard</li>
              <li>Myaccount</li>
            </ul>
           </div>
          ):(
         <div className="mobilenaves">
          <Link onClick={ ()=> {GOhome(); loader();}}>Home</Link>
          <Link onClick={() => {portfolio(); loader();}}>Portfolio</Link>
          <Link onClick={() => {Aboutt(); loader();}}>About</Link>
          <Link onClick={()=>  {reloader();loader();}}>Contact</Link>
         </div>
          )}
          

                    {isLoggedIn ? (
            <div><MdOutlineAccountCircle /></div>
          ) : (
            <div className="mobilelogin">
              <div className="a" onClick={reload}>
                <Link onClick={loader}>Signup</Link>
              </div>
            </div>
          )}
  </div>
  )}
 

 
   


    </Navbar> 
    
  );
};

export default Nav;
