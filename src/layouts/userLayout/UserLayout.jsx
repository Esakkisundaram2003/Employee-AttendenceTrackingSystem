import { Outlet } from "react-router-dom";
import Sidebar from "../../components/slideBar/UserSlideBar.jsx";
import Header from "../../components/header/Header.jsx";
import "./UserLayout.css";

export default function UserLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        {/* <Header /> */}
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
