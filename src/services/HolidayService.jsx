import axiosInstance from "./axiosInstance";

export const getHolidays = () => {
  return axiosInstance.get("/UserDashboard/holiday");
};
