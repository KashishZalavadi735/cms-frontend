import axios from "axios";
import { SUPER_ADMIN_API } from "@/constants/api";
import { SuperAdminProfile } from "@/types/type";

// Get token from LocalStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

// Create Admin
export const createAdmin = async (AdminData: any) => {
  const response = await axios.post(SUPER_ADMIN_API.CREATE_ADMIN, AdminData, {
    headers: getAuthHeader(),
  });
  return response.data;
};

// Return all admin
export const getAllAdmins = async (
  page: number = 1,
  limit: number = 5,
  search: string = "",
) => {
  const response = await axios.get(SUPER_ADMIN_API.GET_ALL_ADMIN, {
    params: { page, limit, search },
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Return single admin
export const getAdminById = async (id: number) => {
  const response = await axios.get(SUPER_ADMIN_API.GET_ADMIN_BY_ID(id), {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Update admin
export const updateAdmin = async (id: number, AdminData: any) => {
  const response = await axios.put(
    SUPER_ADMIN_API.UPDATE_ADMIN(id),
    AdminData,
    {
      headers: getAuthHeader(),
    },
  );
  return response.data.data;
};

// Delete admin
export const deleteAdmin = async (id: number) => {
  const response = await axios.delete(SUPER_ADMIN_API.DELETE_ADMIN(id), {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Profile
export const getProfile = async () => {
  const response = await axios.get(SUPER_ADMIN_API.PROFILE, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Update profile
export const updateProfile = async (payload: SuperAdminProfile) => {
  const response = await axios.put(SUPER_ADMIN_API.PROFILE_UPDATE, payload, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Dashboard cards
export const getDashboardStats = async () => {
  const response = await axios.get(SUPER_ADMIN_API.CARDS, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Admin summary
export const getAdminSummary = async () => {
  const response = await axios.get(SUPER_ADMIN_API.ADMIN_SUMMARY, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};
