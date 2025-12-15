import "./UserProfile.css";
import employeeQR from "../../assets/images/QR-image.png";

function UserProfile() {
  const userProfile = {
    name: "Kishore Kumar",
    email: "kishore@example.com",
    phoneNumber: "+91 98765 43210",
    dob: "2002-06-14",
    bloodGroup: "O+",
    emergencyContactNumber: "+91 91234 56789",
    department: "Computer Science",
    designation: "Software Engineer",
    address: "12, Anna Nagar, Tirunelveli, Tamil Nadu - 627001"
  };

  return (
    <div className="userprofile-container">

      {/* QR Code Section */}
      <div className="qr-section">
        <img src={employeeQR} alt="Employee QR" className="qr-image" />
      </div>

      {/* Profile Details Table */}
      <div className="profile-table-card">
        <table className="profile-table">
          <tbody className="profile-table-body">

            <tr className="profile-row">
              <td className="profile-label">Name</td>
              <td className="profile-value">{userProfile.name}</td>
            </tr>

            <tr className="profile-row">
              <td className="profile-label">Designation</td>
              <td className="profile-value">{userProfile.designation}</td>
            </tr>

            <tr className="profile-row">
              <td className="profile-label">Department</td>
              <td className="profile-value">{userProfile.department}</td>
            </tr>

            <tr className="profile-row">
              <td className="profile-label">Email</td>
              <td className="profile-value">{userProfile.email}</td>
            </tr>

            <tr className="profile-row">
              <td className="profile-label">Phone Number</td>
              <td className="profile-value">{userProfile.phoneNumber}</td>
            </tr>

            <tr className="profile-row">
              <td className="profile-label">Emergency Contact</td>
              <td className="profile-value">{userProfile.emergencyContactNumber}</td>
            </tr>

            <tr className="profile-row">
              <td className="profile-label">Address</td>
              <td className="profile-value">{userProfile.address}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserProfile;