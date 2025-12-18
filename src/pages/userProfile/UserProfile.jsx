import { useEffect, useState } from "react";
import "./UserProfile.css";
import employeeQR from "../../assets/images/QR-image.png";
import { getdetails } from "../../services/userProfileService";
import BeatLoader from "react-spinners/BeatLoader";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // TEMP: replace with logged-in user id later
  const userId = 1;

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const response = await getdetails(userId);
      setUserProfile(response.data.data ?? response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setUserProfile(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="userprofile-container">
      {/* Loader overlay */}
      {loading && (
        <div className="loader-overlay">
          <BeatLoader color="white" loading={loading} size={15} margin={4} />
        </div>
      )}

      {/* QR Code */}
      <div className="qr-section">
        <img src={employeeQR} alt="Employee QR" className="qr-image" />
      </div>

      {/* Profile Table */}
      <div className="profile-table-card">
        <table className="profile-table">
          <tbody className="profile-table-body">
            {!userProfile ? (
              <tr>
                <td colSpan={2} style={{ textAlign: "center", padding: "20px" }}>
                  No user details found
                </td>
              </tr>
            ) : (
              <>
                <tr>
                  <td className="profile-label">Name</td>
                  <td className="profile-value">{userProfile.name}</td>
                </tr>
                <tr>
                  <td className="profile-label">Designation</td>
                  <td className="profile-value">{userProfile.designation}</td>
                </tr>
                <tr>
                  <td className="profile-label">Department</td>
                  <td className="profile-value">{userProfile.department}</td>
                </tr>
                <tr>
                  <td className="profile-label">Email</td>
                  <td className="profile-value">{userProfile.email}</td>
                </tr>
                <tr>
                  <td className="profile-label">Phone Number</td>
                  <td className="profile-value">{userProfile.phoneNumber}</td>
                </tr>
                <tr>
                  <td className="profile-label">Emergency Contact</td>
                  <td className="profile-value">{userProfile.emergencyContactNumber}</td>
                </tr>
                <tr>
                  <td className="profile-label">Address</td>
                  <td className="profile-value">{userProfile.address}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserProfile;
