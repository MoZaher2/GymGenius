import React from "react";
import Image from "next/image";
import  Style  from "./NavBar.module.css";
export default function NavBar() {
  return (
    <>
      <div className={Style.container}>
        <a href="#" className={Style.logo}>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="NoImage"
          />
        </a>
        <nav className={Style.nav}>
          <ul className={Style.ul}>
            <li>
              <a href="/Home" className={Style.link}>Home</a>
            </li>
            <li>
              {" "}
              <a href="#Program" className={Style.link}>Program</a>
            </li>
            <li>
              <a href="#Coaches" className={Style.link}>Coaches</a>
            </li>
            <li>
              {" "}
              <a href="#ContactUs" className={Style.link}>Contact Us</a>
            </li>
            <li>
              {" "}
              <a href="/Register" className={`${Style.active} ${Style.link}`}>
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
