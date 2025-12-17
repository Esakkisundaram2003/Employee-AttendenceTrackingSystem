import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./UserSlider.css";
import employeeimage from "../../assets/images/profile.jpg";
import {
  MdDashboard,
  MdAccessTime,
  MdFactCheck,
  MdOutlineCalendarToday,
  MdPerson,
   MdKeyboardDoubleArrowLeft,
   MdKeyboardDoubleArrowRight,  //MdLogout
} from "react-icons/md";

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <MdDashboard /> },
    { name: "Profile", path: "/profile", icon: <MdPerson /> },
    { name: "Attendance", path: "/attendance", icon: <MdAccessTime /> },
    { name: "Leave", path: "/leave", icon: <MdFactCheck /> },
    { name: "Holiday", path: "/holiday", icon: <MdOutlineCalendarToday /> }
  ];
 // const handleLogout = () => {
//  // Example logic
//   localStorage.clear();        // or remove token only
//   sessionStorage.clear();

//   // optional: redirect to login page
//   window.location.href = "/login";
 //};

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Toggle */}
      <button
        className="toggle-btn"
        onClick={() => setCollapsed(prev => !prev)}
      >
        {collapsed ? (
          <MdKeyboardDoubleArrowRight />
        ) : (
          <MdKeyboardDoubleArrowLeft />
        )}
      </button>

      <div className="employeesimage">
        <img
          src={employeeimage}
          alt="Employee"
          className="employeesimage-avatar"
        />
      </div>

      <ul className="menu">
        {menuItems.map(item => (
          <li
            key={item.name}
            className={`menu-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <Link to={item.path} className="menu-link">
              <span className="menu-icon-wrapper">
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-tooltip">{item.name}</span>
              </span>

              {!collapsed && (
                <span className="menu-text">{item.name}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className="sidebar-logout">
  <button className="logout-btn" onClick={handleLogout}>
    <span className="menu-icon-wrapper">
      <span className="menu-icon">
        <MdLogout />
      </span>
      <span className="menu-tooltip">Logout</span>
    </span>

    {!collapsed && <span className="menu-text">Logout</span>}
  </button>
</div> */}
    </div>
  );
}