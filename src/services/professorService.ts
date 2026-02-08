import { PROFESSOR_API } from "@/constants/api";
import axios from "axios";

// Get token from LocalStorage
const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
};

// Profile
export const getProfile = async () => {
    const response = await axios.get(PROFESSOR_API.PROFILE, {
        headers: getAuthHeader()
    });
    return response.data.data;
};