import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import icon1 from "../images/feature-tile-icon-01.svg";
import icon2 from "../images/feature-tile-icon-02.svg";
import icon3 from "../images/feature-tile-icon-03.svg"

function Banner_2() {
     return ( 
          <>
          <div>
               <div className='combining-tiles'>
                    <div className='tiles-wrap'>
                         <Image className='image-styling' src={icon1}/>
                         <h3 className='services'>IT Managed Services</h3>
                         <p className='consistent'>Consistent IT Support that is reliable for your business today and tomorrow.</p>
                    </div>
                    <div className='tiles-wrap'>
                    <Image className='image-styling' src={icon2}/>
                         <h3 className='services'>Planet Press Services</h3>
                         <p className='consistent'>Data and personality together. An experience with your data the way you need it.</p>
                    </div>
                    <div className='tiles-wrap'>
                    <Image className='image-styling' src={icon3}/>
                         <h3 className='services'>IT Security Services</h3>
                         <p className='consistent'>IT Security services for your business to protect and your customers.</p>
                    </div>
               </div>
          </div>
    
          </>
      );
}

export default Banner_2;