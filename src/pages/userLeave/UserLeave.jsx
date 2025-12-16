import { useState } from "react";
import "./UserLeave.css";

function UserLeave() {
  const [showForm, setShowForm] = useState(false);

  const leaveResponse = {
    status: "success",
    message: "successfully fetched the user leave details",
    data: [
      {
        id: 1,
        applicationDate: "2025-12-09T13:19:41.053718",
        period: "fullday",
        fromDate: "2025-12-08",
        toDate: "2025-12-08",
        duration: 1,
        reason: "fever",
        leaveStatus: "pending",
        totalLeave: 12,
        leaveTaken: 17,
        leaveRemaining: 0
      }
    ]
  };

  const totalLeave =
    leaveResponse.data.length > 0
      ? leaveResponse.data[0].totalLeave
      : 0;

  const leaveTaken =
    leaveResponse.data.length > 0
      ? leaveResponse.data[0].leaveTaken
      : 0;

  const leaveRemaining =
    leaveResponse.data.length > 0
      ? leaveResponse.data[0].leaveRemaining
      : 0;

  return (
    <>
      {/* Overlay */}
      {showForm && (
        <div
          className="overlay"
          onClick={() => setShowForm(false)}
        />
      )}

      {/* Main Content */}
      <div className={`userleave ${showForm ? "blurred" : ""}`}>
        {/* Info boxes */}
        <div className="leave-grid">
          <h3 className="info-box">Total Leave: {totalLeave}</h3>
          <h3 className="info-box">
            Taken: {leaveTaken}/{totalLeave}
          </h3>
          <h3 className="info-box">
            Remaining: {leaveRemaining}/{totalLeave}
          </h3>
        </div>

        {/* Table Card */}
        <div className="profile-table-card-2">
          <button
            className="apply-btn floating-action"
            onClick={() => setShowForm(true)}
          >
            Apply Leave
          </button>

          <table className="profile-table">
            <thead>
              <tr className="profile-row">
                <th className="profile-label">Application Date</th>
                <th className="profile-label">Period</th>
                <th className="profile-label">From Date</th>
                <th className="profile-label">To Date</th>
                <th className="profile-label">Duration</th>
                <th className="profile-label">Status</th>
              </tr>
            </thead>
            <tbody className="profile-table-body">
              {leaveResponse.data.map((leave) => (
                <tr key={leave.id} className="profile-row">
                  <td className="profile-value">
                    {new Date(leave.applicationDate).toLocaleDateString()}
                  </td>
                  <td className="profile-value">{leave.period}</td>
                  <td className="profile-value">{leave.fromDate}</td>
                  <td className="profile-value">{leave.toDate}</td>
                  <td className="profile-value">{leave.duration}</td>
                  <td className="profile-value">{leave.leaveStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide-in Drawer */}
      <div className={`leave-drawer ${showForm ? "open" : ""}`}>
        <h2>Apply Leave</h2>

        <form className="leave-form">
          <label>
            Period
            <select required>
              <option value="">Select</option>
              <option value="fullday">Full Day</option>
              <option value="halfday">Half Day</option>
            </select>
          </label>

          <label>
            From Date
            <input type="date" required />
          </label>

          <label>
            To Date
            <input type="date" required />
          </label>

          <label>
            Duration
            <input type="number" min="1" required />
          </label>

          <label>
            Reason
            <textarea rows="3" required />
          </label>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserLeave;
