import { ASSIGNMENT_API } from "@/constants/api";
import axios from "axios";

// Get token from LocalStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

// Create Assignment
export const createAssignment = async (data: any) => {
  const response = await axios.post(ASSIGNMENT_API.CREATE, data, {
    headers: getAuthHeader(),
  });
  return response.data;
};

// Get subjects for assignment
export const getSubjectsForAssignment = async (semesterId: string) => {
  const response = await axios.get(ASSIGNMENT_API.SUBJECT(semesterId), {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Get all assignments
export const getAllAssignment = async () => {
  const response = await axios.get(ASSIGNMENT_API.GET_ALL, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

// Update assignment status
export const updateAssignmentStatus = async (
  assignmentId: string,
  statusId: string,
) => {
  const response = await axios.put(
    ASSIGNMENT_API.UPDATE_STATUS(assignmentId),
    { statusId },
    {
      headers: getAuthHeader(),
    },
  );
  return response.data.data;
};

export const viewAssignmentPdf = async (fileUrl: string) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(fileUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: "blob",
  });

  return response.data;
};

// Assignment summary
export const getAssignmentSummary = async () => {
  const response = await axios.get(ASSIGNMENT_API.SUMMARY, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};