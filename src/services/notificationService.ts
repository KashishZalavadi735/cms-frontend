import { NOTIFICATION_API } from "@/constants/api";
import { AppNotification } from "@/types/type";
import axios from "axios";

// Get token from LocalStorage
const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
};

// All notification
export const getAllNotification = async (): Promise<AppNotification[]> => {
    const response = await axios.get(NOTIFICATION_API.GET_NOTIFICATION, {
        headers: getAuthHeader()
    });
    return response.data.data;
};

// Unread notification
export const countUnreadNotification = async (): Promise<number>=> {
    const response = await axios.get(NOTIFICATION_API.UNREAD_NOTIFICATION, {
        headers: getAuthHeader()
    });
    return response.data.data;
};

// Mark as read notification
export const markmarkNotificationAsRead = async (id: number) => {
    const response = await axios.patch(NOTIFICATION_API.MARK_AS_READ(id), {}, {
        headers: getAuthHeader()
    });
    return response.data.data;
};