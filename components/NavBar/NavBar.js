import React from "react";
import Image from "next/image";
import  Style  from "./NavBar.module.css";
export default function NavBar() {
  return (
    <>
      <div class={Style.container}>
        <a href="#" class={Style.logo}>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="NoImage"
          />
        </a>
        <nav class={Style.nav}>
          <ul class={Style.ul}>
            <li>
              <a href="/Home" class={Style.link}>Home</a>
            </li>
            <li>
              {" "}
              <a href="#Program" class={Style.link}>Program</a>
            </li>
            <li>
              <a href="#Coaches" class={Style.link}>Coaches</a>
            </li>
            <li>
              {" "}
              <a href="#Visit our Gym" class={Style.link}>Visit our Gym</a>
            </li>
            <li>
              {" "}
              <a href="#Register" class={`${Style.active} ${Style.link}`}>
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
