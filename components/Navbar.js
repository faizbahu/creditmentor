import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../images/credit-logo.png";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Services", href: "/" },
  { text: "Testimonials", href: "/" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="container">
      <nav className={`nav`}>
        <Link href={"/"}>
          <Image src={Logo} width={228} />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          <div>
            <button
              className="button-class"
              style={{ background: "rgb(140, 253, 33)" }}
            >
              Improve My Credit
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
