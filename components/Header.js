import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import logo from '../images/credit-logo.png';
function Header() {
     return ( 
          <>
           <div className="container-fluid header-bg">
          <nav className="navbar navbar-expand-lg navbar-light sizing">
               <a className="navbar-brand logo-showing" href="#">
                    {/* <img className="logo-image" src="./images/logo.png" alt="">
                     */}
                     <Image src={logo} width={228}/>
               </a>
               
               <Image src={logo} width={228}/>
             
               
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="making-justify-content collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand logo-hiding" href="#">
                         {/* <img className="logo-image" src="./images/logo.png" alt=""> */}
                    </a>
                    <ul className="navbar-nav mr-auto elements">
                   <li className="nav-item active">
                     <a className="items nav-link text-white " href="#">Services </a>
                   </li>
                   <li className="nav-item active">
                    <a className="items nav-link text-white" href="#">Testimonials </a>
                  </li>
                 
                 </ul>
                 <div className="header-button d-flex items-center text-white">
                   <button>Imrove My Credit</button>
               </div>
               </div>
             </nav>
     </div>
    {/* </header> */}
          </>
      );
}

export default Header;