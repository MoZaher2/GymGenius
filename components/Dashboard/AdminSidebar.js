"use client";
import "./Sidebar.css";
import React, { useState, useEffect } from "react";
import {
  BiUserCircle,
  BiGrid,
  BiUserPlus,
  BiCalendarCheck,
  BiCreditCard,
  BiGroup,
  BiDumbbell,
  BiBookOpen,
  BiLogOut,
  BiChevronRight,
} from "react-icons/bi";
import Image from "next/image";
import AdminAvatar from "../../public/avatar.jpg";

export default function SideBar() {

  const [userName, setUserName] = useState("Guest");
  const [email, setEmail] = useState("guest@example.com");

  useEffect(() => {
    // Check if window is defined (client-side) before accessing sessionStorage
    if (typeof window !== 'undefined') {
      const storedUserName = sessionStorage.getItem("Username");
      const storedEmail = sessionStorage.getItem("Email");
      if (storedUserName) {
        setUserName(storedUserName);
      }
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, []);

  function handelLogOut(){
    localStorage.removeItem('Token');
  }

  return (
    <nav className="sidebar">
      <header>
        <div className="user">
          <i>
            <Image
      src={AdminAvatar}
      alt="Avatar"
      width={60}
      style={{borderRadius: "50%"}}
    />
          </i>
          <h2>{userName}</h2>
          <p>{email}</p>
          {/* <h2>{localStorage.getItem("Username") || "Guest"}</h2>
          <p>{localStorage.getItem("Email") || "guest@example.com"}</p> */}
        </div>
        <i className="toggle">
        <BiChevronRight />
        </i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-link">
            <li className="nav-link">
              <a href="/AdminDashboard/Dashboard">
                <i className="icon">
                  <BiGrid />
                </i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/AdminDashboard/Profile">
                <i className="icon">
                    <BiUserPlus />
                </i>
                <span className="text nav-text">Profile</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/AdminDashboard/Plan">
                <i className="icon">
                <BiCalendarCheck />
                </i>
                <span className="text nav-text">Plan</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/AdminDashboard/Payment">
                <i className="icon">
                <BiCreditCard />
                </i>
                <span className="text nav-text">Payment</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/AdminDashboard/ViewMembers">
                <i className="icon">
                <BiGroup />
                </i>
                <span className="text nav-text">View Members</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/AdminDashboard/ShowCoashes">
                <i className="icon">
                <BiDumbbell />
                </i>
                <span className="text nav-text">Coaches</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/AdminDashboard/Report">
                <i className="icon">
                <BiBookOpen />
                </i>
                <span className="text nav-text">Report</span>
              </a>
            </li>
            {/* Add more list items for navigation links */}
          </ul>
        </div>
        <div className="bottom-content">
          <li className="redhover">
            <a href="/Login" onClick={handelLogOut}>
              <i className="icon">
                <BiLogOut />
              </i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}
