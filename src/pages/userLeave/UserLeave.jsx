import { useState } from "react";
import "./UserLeave.css";
import leaveValidation from "../../validations/LeaveValidation";

function UserLeave() {
  const [showForm, setShowForm] = useState(false);

  const [formValues, setFormValues] = useState({
    period: "",
    fromDate: "",
    toDate: "",
    duration: 0,
    reason: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [fromDay, setFromDay] = useState("");
  const [toDay, setToDay] = useState("");

  /* ---------------- MOCK DATA ---------------- */
  const leaveResponse = {
    status: "success",
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

  const totalLeave = leaveResponse.data[0]?.totalLeave || 0;
  const leaveTaken = leaveResponse.data[0]?.leaveTaken || 0;
  const leaveRemaining = leaveResponse.data[0]?.leaveRemaining || 0;

  /* ---------------- HELPERS ---------------- */
  const getDayName = (date) =>
    new Date(date).toLocaleDateString("en-US", { weekday: "long" });

  const calculateDuration = (start, end, period) => {
    if (!start || !end) return 0;

    if (start === end) {
      if (period === "halfday") return 0.5;
      return 1;
    }

    const s = new Date(start);
    const e = new Date(end);
    if (e < s) return 0;

    let count = 0;
    const d = new Date(s);

    while (d <= e) {
      const day = d.getDay();
      if (day !== 0 && day !== 6) count++;
      d.setDate(d.getDate() + 1);
    }

    return count;
  };


  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = { ...formValues, [name]: value };

    updated.duration = calculateDuration(
      updated.fromDate,
      updated.toDate,
      updated.period
    );

    setFormValues(updated);

    if (name === "fromDate") setFromDay(value ? getDayName(value) : "");
    if (name === "toDate") setToDay(value ? getDayName(value) : "");

    const error = leaveValidation(name, value, updated);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    let hasError = false;

    Object.keys(formValues).forEach((key) => {
      const err = leaveValidation(key, formValues[key], formValues);
      if (err) {
        errors[key] = err;
        hasError = true;
      }
    });

    setFormErrors(errors);
    if (hasError) return;

    console.log("SUBMITTED DATA:", formValues);
    // alert("Leave application submitted successfully!");
      setFormValues({
        period: "",
        fromDate: "",
         toDate: "",
        duration: 0,
        reason: ""
        });
  setFormErrors({});
  setFromDay("");
  setToDay("");
    setShowForm(false);
   
  };
   const handleCancel = () => {
  setFormValues({
    period: "",
    fromDate: "",
    toDate: "",
    duration: 0,
    reason: ""
  });
  setFormErrors({});
  setShowForm(false);
};

  /* ---------------- JSX ---------------- */
  return (
    <>
      {showForm && (
        <div className="overlay" onClick={() => setShowForm(false)} />
      )}

      <div className={`userleave ${showForm ? "blurred" : ""}`}>
        {/* SUMMARY */}
        <div className="leave-grid">
          <h3 className="info-box">Total Leave: {totalLeave}</h3>
          <h3 className="info-box">
            Taken: {leaveTaken}/{totalLeave}
          </h3>
          <h3 className="info-box">
            Remaining: {leaveRemaining}/{totalLeave}
          </h3>
        </div>

        {/* TABLE */}
        <div className="leave-table-card-2">
          <button
            className="apply-btn floating-action"
            onClick={() => setShowForm(true)}
          >
            Apply Leave
          </button>

          <table className="leave-table">
            <thead>
              <tr className="leave-row">
                <th className="leave-label">Application Date</th>
                <th className="leave-label">Period</th>
                <th className="leave-label">From Date</th>
                <th className="leave-label">To Date</th> 
                <th className="leave-label">Duration</th>
                <th className="leave-label">Status</th>
              </tr>
            </thead> 
            <tbody className="leave-table-body">
              {leaveResponse.data.map((leave) => (
                <tr key={leave.id} className="leave-row">
                  <td className="leave-value">
                    {leave.applicationDate.split("T")[0]}
                  </td>

                  <td className="leave-value">{leave.period}</td>
                  <td className="leave-value">{leave.fromDate}</td>
                  <td className="leave-value">{leave.toDate}</td>
                  <td className="leave-value">{leave.duration}</td>
                  <td className="leave-value">{leave.leaveStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DRAWER FORM */}
      <div className={`leave-drawer ${showForm ? "open" : ""}`}>
        <h2>Apply Leave</h2>

        <form className="leave-form" onSubmit={handleSubmit} noValidate>
          {/* Period */}
          <label className="leave-form-label">
            <span className="label-text">Period *</span>
            <select
              name="period"
              value={formValues.period}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="fullday">Full Day</option>
              <option value="halfday">Half Day</option>
            </select>
            {formErrors.period && (
              <div className="form-error">{formErrors.period}</div>
            )}
          </label>

          {/* From Date */}
          <label className="leave-form-label">
            <span className="label-text">From Date *</span>
            <input
              type="date"
              name="fromDate"
              value={formValues.fromDate}
              onChange={handleChange}
            />
            {formErrors.fromDate && (
              <div className="form-error">{formErrors.fromDate}</div>
            )}
          </label>

          {/* To Date */}
          <label className="leave-form-label">
            <span className="label-text">To Date *</span>
            <input
              type="date"
              name="toDate"
              value={formValues.toDate}
              onChange={handleChange}
            />
            {formErrors.toDate && (
              <div className="form-error">{formErrors.toDate}</div>
            )}
          </label>

          {/* Duration */}
          <label className="leave-form-label">
            <span className="label-text">Duration (working days)</span>
            <input type="number" value={formValues.duration} readOnly />
          </label>

          {/* Reason */}
          <label className="leave-form-label">
            <span className="label-text">Reason</span>
            <textarea
              name="reason"
              value={formValues.reason}
              onChange={handleChange}
              rows="3"
            />
          </label>

          <div className="form-actions">
            <button
              className="lve-frm-btnns1"
              type="button"
              onClick={()=>{handleCancel()}}
            >
              Cancel
            </button>

            <button
              className="lve-frm-btnns2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserLeave;
