import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../images/credit-logo.png";
function Footer() {
  return (
    <>
      <footer>
        <Image src={logo} width={228} />
        <p className="footer-text">
          © 2023 Credit Mentro Pro. All Rights Reserved. **
        </p>
      </footer>
    </>
  );
}

export default Footer;
