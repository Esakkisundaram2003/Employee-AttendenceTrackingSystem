import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthLayout from "../layouts/AuthLayout";
import UserLayout from "../layouts/userLayout/UserLayout.jsx";

// Pages
// import Login from "../pages/auth/Login";
import UserDashboard from "../pages/dashboard/userDashboard.jsx";
// import MarkAttendance from "../pages/attendance/MarkAttendance";
import Holiday from "../pages/holiday/Holiday.jsx";
import UserLeave from "../pages/userLeave/UserLeave.jsx";
import UserAttendence from "../pages/userAttendence/UserAttendence.jsx";
import UserProfile from "../pages/userProfile/UserProfile.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
{/* 
        No Sidebar
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route> */}

        {/* With Sidebar ONLY */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/leave" element={<UserLeave />} />
          <Route path="/attendance" element={<UserAttendence />} />
          <Route path="/profile" element={<UserProfile />} />
         
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
