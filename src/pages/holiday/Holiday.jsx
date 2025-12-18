import { useEffect, useState } from "react";
import "./Holiday.css";
import { getHolidays } from "../../services/HolidayService";

export default function HolidayPage() {

  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = async () => {
    try {
      const response = await getHolidays();
        setHolidays(response.data.data ?? []);
    } catch (error) {
      console.error("Error fetching holidays:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const getDayCount = (from, to) => {
    const start = new Date(from);
    const end = new Date(to);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    return Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
  };

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading holidays...</p>;
  }

  return (
    <div className="holiday-page-container">
      <div className="holidaypage">
        <div className="holiday-table-card">
          <div className="holiday-table-wrapper">
            <table className="holiday-table">
              <thead className="holiday-table-head">
                <tr className="holiday-table-row holiday-table-row-head">
                  <th className="holiday-table-cell holiday-table-head-cell">S.No</th>
                  <th className="holiday-table-cell holiday-table-head-cell">Holiday Name</th>
                  <th className="holiday-table-cell holiday-table-head-cell">From Date</th>
                  <th className="holiday-table-cell holiday-table-head-cell">To Date</th>
                  <th className="holiday-table-cell holiday-table-head-cell">Year</th>
                  <th className="holiday-table-cell holiday-table-head-cell">Days</th>
                </tr>
              </thead>

              <tbody className="holiday-table-body">
                {holidays.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center" }}>
                      No holidays found
                    </td>
                  </tr>
                ) : (
                  holidays.map((h, i) => (
                    <tr key={h.id} className="holiday-table-row">
                      <td className="holiday-table-cell">{i + 1}</td>
                      <td className="holiday-table-cell">{h.holiday}</td>
                      <td className="holiday-table-cell">{formatDate(h.fromDate)}</td>
                      <td className="holiday-table-cell">{formatDate(h.toDate)}</td>
                      <td className="holiday-table-cell">{h.year}</td>
                      <td className="holiday-table-cell">
                        {getDayCount(h.fromDate, h.toDate)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
