import axiosInstance from "./axiosInstance";

export const getdetails = (userid) => {
  return axiosInstance.get(`/UserDashboard/userdetails/${userid}`);
};
