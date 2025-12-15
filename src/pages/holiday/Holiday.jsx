import "./Holiday.css";

export default function HolidayPage() {

  // Example API-response holidays
  const holidays = [
     {
      id: 1,
      FromDate: "2025-12-25",
      ToDate: "2025-12-25",
      Holiday: "Christmas",
      day: "4",
      Year: 2025
    },
    {
      id: 2,
      FromDate: "2025-01-01",
      ToDate: "2025-01-01",
      Holiday: "New Year",
      day: "3",
      Year: 2025
    },
    {
      id: 3,
      FromDate: "2025-04-18",
      ToDate: "2025-04-18",
      Holiday: "Good Friday",
      day: "5",
      Year: 2025
    },
    {
      id: 4,
      FromDate: "2025-12-25",
      ToDate: "2025-12-25",
      Holiday: "Christmas",
      day: "4",
      Year: 2025
    },
    {
      id: 5,
      FromDate: "2025-01-01",
      ToDate: "2025-01-01",
      Holiday: "New Year",
      day: "3",
      Year: 2025
    },
    {
      id: 6,
      FromDate: "2025-04-18",
      ToDate: "2025-04-18",
      Holiday: "Good Friday",
      day: "5",
      Year: 2025
    },
     {
      id: 7,
      FromDate: "2025-12-25",
      ToDate: "2025-12-25",
      Holiday: "Christmas",
      day: "4",
      Year: 2025
    },
    {
      id: 8,
      FromDate: "2025-01-01",
      ToDate: "2025-01-01",
      Holiday: "New Year",
      day: "3",
      Year: 2025
    },
    {
      id: 9,
      FromDate: "2025-04-18",
      ToDate: "2025-04-18",
      Holiday: "Good Friday",
      day: "5",
      Year: 2025
    },
     {
      id: 10,
      FromDate: "2025-12-25",
      ToDate: "2025-12-25",
      Holiday: "Christmas",
      day: "4",
      Year: 2025
    },
    {
      id: 11,
      FromDate: "2025-01-01",
      ToDate: "2025-01-01",
      Holiday: "New Year",
      day: "3",
      Year: 2025
    },
    {
      id: 12,
      FromDate: "2025-04-18",
      ToDate: "2025-04-18",
      Holiday: "Good Friday",
      day: "5",
      Year: 2025
    }
  ];

  // Convert date to readable format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Convert day number → weekday name
  const getDayName = (dayNum) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[Number(dayNum)];
  }; 

  return (
    <div className="holiday-page-container">
      <h2 className="holiday-title">Holiday List</h2>

      <div className="holiday-table-card">
        <table className="holiday-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Holiday Name</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Year</th>
              <th>Days</th>
            </tr>
          </thead>

          <tbody>
            {holidays.map((h, i) => (
              <tr key={h.id}>
                <td>{i + 1}</td>
                <td>{h.Holiday}</td>
                <td>{formatDate(h.FromDate)}</td>
                <td>{formatDate(h.ToDate)}</td>
                <td>{h.Year}</td>
                <td>{getDayName(h.day)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
