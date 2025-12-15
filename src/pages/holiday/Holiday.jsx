import "./Holiday.css";

export default function HolidayPage() {

  const holidays = [
    { id: 1, FromDate: "2025-12-25", ToDate: "2025-12-25", Holiday: "Christmas", Year: 2025 },
    { id: 2, FromDate: "2025-01-01", ToDate: "2025-01-01", Holiday: "New Year", Year: 2025 },
    { id: 3, FromDate: "2025-04-18", ToDate: "2025-04-18", Holiday: "Good Friday", Year: 2025 },
    { id: 4, FromDate: "2025-12-25", ToDate: "2025-12-25", Holiday: "Christmas", Year: 2025 },
    { id: 5, FromDate: "2025-01-01", ToDate: "2025-01-01", Holiday: "New Year", Year: 2025 },
    { id: 6, FromDate: "2025-04-18", ToDate: "2025-04-18", Holiday: "Good Friday", Year: 2025 },
    { id: 7, FromDate: "2025-12-25", ToDate: "2025-12-25", Holiday: "Christmas", Year: 2025 },
    { id: 8, FromDate: "2025-01-01", ToDate: "2025-01-03", Holiday: "New Year", Year: 2025 },
    { id: 9, FromDate: "2025-04-18", ToDate: "2025-04-18", Holiday: "Good Friday", Year: 2025 },
    { id: 10, FromDate: "2025-12-25", ToDate: "2025-12-25", Holiday: "Christmas", Year: 2025 },
    { id: 11, FromDate: "2025-04-18", ToDate: "2025-04-18", Holiday: "Good Friday", Year: 2025 },
    { id: 12, FromDate: "2025-12-25", ToDate: "2025-12-25", Holiday: "Christmas", Year: 2025 }
  ];

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

  return (
    <div className="holiday-page-container">
      <div className="holidaypage">
      {/* <h2 className="holiday-title">Holiday List</h2> */}

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
              {holidays.map((h, i) => (
                <tr key={h.id} className="holiday-table-row">
                  <td className="holiday-table-cell">{i + 1}</td>
                  <td className="holiday-table-cell">{h.Holiday}</td>
                  <td className="holiday-table-cell">{formatDate(h.FromDate)}</td>
                  <td className="holiday-table-cell">{formatDate(h.ToDate)}</td>
                  <td className="holiday-table-cell">{h.Year}</td>
                  <td className="holiday-table-cell">
                    {getDayCount(h.FromDate, h.ToDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}
