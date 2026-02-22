import { STUDENT_API } from "@/constants/api";
import { StudentProfile } from "@/types/type";
import axios from "axios";

// Get token from LocalStorage
const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
};

// Profile
export const getProfile = async () => {
    const response = await axios.get(STUDENT_API.PROFILE, {
        headers: getAuthHeader()
    });
    return response.data.data;
};

// Update profile
export const updateProfile = async (payload: StudentProfile) => {
  const response = await axios.put(STUDENT_API.PROFILE_UPDATE, payload, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Dashboard cards
export const getDashboardStats = async () => {
  const response = await axios.get(STUDENT_API.CARDS, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};