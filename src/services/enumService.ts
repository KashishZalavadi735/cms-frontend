import axios from "axios";
import { ENUM_API } from "@/constants/api";

// Return enum values
export const getEnumByType = async (type:string) => {
    const response = await axios.get(ENUM_API.GET(type));
    return response.data.data;
};