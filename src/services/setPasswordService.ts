import axios from "axios";
import { SET_PASSWORD_API } from "../constants/api"
import type { SetPasswordData } from "../types/type";

// Set Password
export const setPasswordService = async (data:SetPasswordData) => {
    const response = await axios.post(SET_PASSWORD_API.SET_PASSWORD, data);
    return response.data;
};