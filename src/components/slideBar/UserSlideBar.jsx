import { Link, useLocation } from "react-router-dom";
import "./UserSlider.css";
import employeeimage from "../../assets/images/saturogojo.jpeg";
export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "UserDashboard", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Attendance", path: "/attendance" },
    { name: "Leave", path: "/leave" },
    { name: "Holiday", path: "/holiday" }
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Employee Panel</h2>
      <div className="employeesimage"><img src={ employeeimage} alt="" /></div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.path ? "active menu-item" : "menu-item"}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
