import axios from "axios";
import { AUTH_API } from "../constants/api"
import type { LoginData, SignupData } from "../types/type";

// Login
export const loginService = async (data:LoginData) => {
    const response = await axios.post(AUTH_API.LOGIN, data);
    return response.data;
};

// Signup
export const signupService = async (data:SignupData) => {
    const response = await axios.post(AUTH_API.SIGNUP, data);
    return response.data;
};