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
  MdKeyboardDoubleArrowRight
} from "react-icons/md";

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <MdDashboard /> },
    { name: "Profile", path: "/profile", icon: <MdPerson /> },
    { name: "Attendance", path: "/attendance", icon: <MdAccessTime /> },
    { name: "Leave", path: "/leave", icon: <MdFactCheck /> },
    { name: "Holiday", path: "/holiday", icon: <MdOutlineCalendarToday /> }
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* 🔽 Toggle Button */}
      <button
        className="toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
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
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={
              location.pathname === item.path
                ? "menu-item active"
                : "menu-item"
            }
          >
           <Link to={item.path} className="menu-link">
  <span className="menu-icon-wrapper">
    <span className="menu-icon">{item.icon}</span>

    {/* Tooltip text */}
    <span className="menu-tooltip">{item.name}</span>
  </span>

  {!collapsed && (
    <span className="menu-text">{item.name}</span>
  )}
</Link>

          </li>
        ))}
      </ul>
    </div>
  );
}
