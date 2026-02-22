import axios from "axios";
import { ADMIN_API } from "@/constants/api";
import { AdminProfile, ProfessorData, Subject } from "@/types/type";

// Get token from LocalStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

// Create Professor
export const createProfessor = async (data: ProfessorData) => {
  const response = await axios.post(ADMIN_API.CREATE_PROFESSOR, data, {
    headers: getAuthHeader(),
  });
  return response.data;
};

// Return all Professor
export const getAllProfessor = async (
  page: number = 1,
  limit: number = 5,
  search: string = "",
) => {
  const response = await axios.get(ADMIN_API.GET_ALL_PROFESSOR, {
    params: { page, limit, search },
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Return single Professor
export const getProfessorById = async (id: number) => {
  const response = await axios.get(ADMIN_API.GET_PROFESSOR_BY_ID(id), {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Update Professor
export const updateProfessor = async (id: number, ProfessorData: any) => {
  const response = await axios.put(
    ADMIN_API.UPDATE_PROFESSOR(id),
    ProfessorData,
    {
      headers: getAuthHeader(),
    },
  );
  return response.data.data;
};

// Update Professor subjects
export const updateProfessorSubjects = async (
  id: number,
  data: { subjectIds: number[] },
) => {
  const response = await axios.put(
    ADMIN_API.UPDATE_PROFESSOR_SUBJECTS(id),
    data,
    {
      headers: getAuthHeader(),
    },
  );
  return response.data.data;
};

// Delete Professor
export const deleteProfessor = async (id: number) => {
  const response = await axios.delete(ADMIN_API.DELETE_PROFESSOR(id), {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Branch subjects
export const getBranchSubjects = async (): Promise<Subject[]> => {
  const response = await axios.get(ADMIN_API.GET_BRANCH_SUBJECTS, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Profile
export const getProfile = async () => {
  const response = await axios.get(ADMIN_API.PROFILE, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Update profile
export const updateProfile = async (payload: AdminProfile) => {
  const response = await axios.put(ADMIN_API.PROFILE_UPDATE, payload, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Professor summary
export const getProfessorSummary = async () => {
  const response = await axios.get(ADMIN_API.PROFESSOR_SUMMARY, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Dashboard cards
export const getDashboardStats = async () => {
  const response = await axios.get(ADMIN_API.CARDS, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};