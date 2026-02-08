import { FORGOT_PASSWORD_API } from "@/constants/api";
import axios from "axios";

// Send OTP
export const sendOtpService = async (email: string) => {
    const response = await axios.post(FORGOT_PASSWORD_API.SEND_OTP, { email });
    return response.data;
};

// Verify OTP
export const verifyOtpService = async (email: string, otp: string) => {
    const response = await axios.post(FORGOT_PASSWORD_API.VERIFY_OTP, { email, otp });
    return response.data;
};

// Change Password
export const changePasswordService = async (email: string, newPassword: string, confirmPassword: string) => {
    const response = await axios.post(FORGOT_PASSWORD_API.CHANGE_PASSWORD, { email, newPassword, confirmPassword });
    return response.data;
};