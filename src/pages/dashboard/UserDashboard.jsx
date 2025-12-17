import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./UserDashboard.css";

export default function UserDashboard() {
  const [date, setDate] = useState(new Date());

  const dashboardData = {
    userId: 1,
    userName: "Esakki",
    date: "2025-12-17",
    currentStatus: "In",
    loginTime: "07:30:30",
    logoutTime: "12:20:30",
    totalWorkHours: "12:30:30",
    leaveCount: 2,
    // Dummy API-like data
    holiday: ["2025-12-09", "2025-12-09"],
    approvedLeave: ["2025-12-10"],
    pendingLeave: [
      "2025-12-12",
      "2025-12-03",
      "2025-12-05",
      "2025-12-11",
      
  
    ],
    workedDate: [
      { currentDate: "2025-12-09", firstHalf: "ab", secondHalf: "ab" },
      { currentDate: "2025-12-10", firstHalf: "ab", secondHalf: "ab" },
    ],
  };

  // Function to assign class based on date
 const getTileClassName = ({ date, view }) => {
  if (view === "month") {
    const dateStr = date.toLocaleDateString("en-CA");   // YYYY-MM-DD local
    const todayStr = new Date().toLocaleDateString("en-CA");

    // Priority order: today > approvedLeave > pendingLeave > holiday > past/future
    if (dateStr === todayStr) return "current-date";                // red
    if (dashboardData.approvedLeave.includes(dateStr)) return "approved-leave-date"; // blue
    if (dashboardData.pendingLeave.includes(dateStr)) return "pending-leave-date";   // yellow
    if (dashboardData.holiday.includes(dateStr)) return "holiday-date";               // green

    // Fallback
    return dateStr < todayStr ? "past-date" : "future-date";  
  }
  return "";
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};



  return (
    <div className="dashboard-container">
      {/* Top Section */}
      <div className="dashboard-header">
        <div className="dashboard-username">
          Welcome, {dashboardData.userName}
        </div>
        <div className="dashboard-date">
           {formatDate(dashboardData.date)}
        </div>

      </div>

      {/* Cards Section */}
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-title">Today Check-in</div>
          <div className="card-value">{dashboardData.loginTime}</div>
        </div>

        <div className="dashboard-card">
          <div className="card-title">Today Check-out</div>
          <div className="card-value">{dashboardData.logoutTime}</div>
        </div>

        <div className="dashboard-card">
          <div className="card-title">Total Work Hours</div>
          <div className="card-value">{dashboardData.totalWorkHours}</div>
        </div>

        <div className="dashboard-card">
          <div className="card-title">Leave Request</div>
          <div className="card-value">{dashboardData.leaveCount}</div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="dashboard-calendar">
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={getTileClassName}
        />
      </div>
    </div>
  );
}
