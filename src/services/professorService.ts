import { PROFESSOR_API } from "@/constants/api";
import { ProfessorProfile } from "@/types/type";
import axios from "axios";

// Get token from LocalStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

// Profile
export const getProfile = async () => {
  const response = await axios.get(PROFESSOR_API.PROFILE, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Update profile
export const updateProfile = async (payload: ProfessorProfile) => {
  const response = await axios.put(PROFESSOR_API.PROFILE_UPDATE, payload, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Dashboard cards
export const getDashboardStats = async () => {
  const response = await axios.get(PROFESSOR_API.CARDS, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};