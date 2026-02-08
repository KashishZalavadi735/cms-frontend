import axios from "axios";
import { BRANCH_STUDENT_API } from "@/constants/api";

// Get token from LocalStorage
const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
};

// View students
export const ViewStudents = async (page: number = 1, limit: number = 5, search: string = "") => {
    const response = await axios.get(BRANCH_STUDENT_API.VIEW_STUDENT, {
        params: { page, limit, search },
        headers: getAuthHeader()
    });
    return response.data.data;
};