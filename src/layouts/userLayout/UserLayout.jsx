import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/slideBar/UserSlideBar.jsx";
import "./UserLayout.css";

export default function UserLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`layout ${collapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="main">
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
