"use client";
import "./Sidebar.css";
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
          <h2>{localStorage.getItem("Username") || "Guest"}</h2>
          <p>{localStorage.getItem("Email") || "guest@example.com"}</p>
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
