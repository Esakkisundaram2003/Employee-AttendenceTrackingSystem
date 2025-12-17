import "./UserAttendence.css";

function UserAttendence() {
  const attendanceResponse = {
    "status":"success",
    "message":"succesfully fetched details",
    "data":
      [
          {
              "id": 1,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "in",
              "loggedTime": "09:30:00",
              "outTime": "00:00:00",
              "totalWorkHours": "00:00:00",
              "totaloutTime": "00:00:00",
              "firstHalf": "absent",
              "secondHalf": "absent"
          },
          {
              "id": 2,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "out",
              "loggedTime": "11:30:00",
              "outTime": "00:00:00",
              "totalWorkHours": "02:00:00",
              "totalOutTime": "00:00:00",
              "firstHalf": "absent",
              "secondHalf": "absent"
          },
          {
              "id": 3,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "in",
              "loggedTime": "12:00:00",
              "outTime": "00:30:00",
              "totalWorkHours": "02:00:00",
              "totalOutTime": "00:30:00",
              "firstHalf": "absent",
              "secondHalf": "absent"
          },
          {
              "id": 4,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "out",
              "loggedTime": "14:00:00",
              "outTime": "00:00:00",
              "totalWorkHours": "04:00:00",
              "totalOutTime": "00:30:00",
              "firstHalf": "present",
              "secondHalf": "absent"
          },
          {
              "id": 5,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "in",
              "loggedTime": "15:00:00",
              "outTime": "01:00:00",
              "totalWorkHours": "04:00:00",
              "totalOutTime": "01:30:00",
              "firstHalf": "present",
              "secondHalf": "absent"
          },
          {
              "id": 6,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "out",
              "loggedTime": "17:00:00",
              "outTime": "00:00:00",
              "totalWorkHours": "06:00:00",
              "totalOutTime": "01:30:00",
              "firstHalf": "present",
              "secondHalf": "absent"
          },
          {
              "id": 7,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "in",
              "loggedTime": "17:30:00",
              "outTime": "00:30:00",
              "totalWorkHours": "06:00:00",
              "totalOutTime": "02:00:00",
              "firstHalf": "present",
              "secondHalf": "absent"
          },
          {
              "id": 8,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "out",
              "loggedTime": "19:30:00",
              "outTime": "00:00:00",
              "totalWorkHours": "08:00:00",
              "totalOutTime": "02:00:00",
              "firstHalf": "present",
              "secondHalf": "present"
          },
          {
              "id": 8,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "out",
              "loggedTime": "19:30:00",
              "outTime": "00:00:00",
              "totalWorkHours": "08:00:00",
              "totalOutTime": "02:00:00",
              "firstHalf": "present",
              "secondHalf": "present"
          },
          {
              "id": 8,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "out",
              "loggedTime": "19:30:00",
              "outTime": "00:00:00",
              "totalWorkHours": "08:00:00",
              "totalOutTime": "02:00:00",
              "firstHalf": "present",
              "secondHalf": "present"
          },
          {
              "id": 8,
              "userId": 1,
              "currentDate": "2025-12-11",
              "currentStatus": "out",
              "loggedTime": "19:30:00",
              "outTime": "00:00:00",
              "totalWorkHours": "08:00:00",
              "totalOutTime": "02:00:00",
              "firstHalf": "absent",
              "secondHalf": "present"
          }
      ]
  };
  const latest = attendanceResponse.data.at(-1);
  const today = new Date().toISOString().split("T")[0];


  return (
    <div className="attendance-page">

      {/* Row 1: IN / OUT */}
      <div className="attendance-row attendance-actions">
        <button className="attendance-btn attendance-in">
          IN
        </button>

        <button className="attendance-btn attendance-out">
          OUT
        </button>
      </div>

      {/* Row 2: Date Filter */}
      <div className="attendance-row attendance-filter-row">
        <input
          type="date"
          className="attendance-date-input"
          value={today}
        />
      </div>
      {/* Row 3: Attendance Table */}
      {/* ATTENDANCE TABLE */}
      <div className="attendance-table-card">
        <div className="attendance-table-scroll">
          <table className="attendance-table">
            <thead>
              <tr className="attendance-row-header">
                <th className="attendance-label">Date</th>
                <th className="attendance-label">In / Out</th>
                <th className="attendance-label">Logged Time</th>
                <th className="attendance-label">Out Time</th>
              </tr>
            </thead>

            <tbody className="attendance-table-body">
              {attendanceResponse.data.map((item) => (
                <tr key={item.id} className="attendance-row-data">
                  <td className="attendance-value">{item.currentDate}</td>
                  <td className="attendance-value">{item.currentStatus}</td>
                  <td className="attendance-value">{item.loggedTime}</td>
                  <td className="attendance-value">{item.outTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* SUMMARY INFO BOXES */}
      <div className="attendance-summary">

        {/* Total Work Hours */}
        <div className="attendance-summary-box work-hrs">
          <span className="attendance-summary-label">Total Work Hours</span>
          <span className="attendance-summary-value">
            {latest.totalWorkHours}
          </span>
        </div>

        {/* Total Out Time */}
        <div className="attendance-summary-box">
          <span className="attendance-summary-label">Total Out Time</span>
          <span className="attendance-summary-value">
            {latest.totalOutTime}
          </span>
        </div>

        {/* Attendance */}
        <div className="attendance-summary-box attendance">
          <span className="attendance-summary-label">Attendance</span>
          <div className="attendance-attendance-values">
            <span className="attendance-summary-value">
              {latest.firstHalf === "present" ? "P" : "AB"}
            </span>
            <span className="attendance-summary-value">
              {latest.secondHalf === "present" ? "P" : "AB"}
            </span>
          </div>
        </div>

</div>


    </div>
  );
}

export default UserAttendence;
