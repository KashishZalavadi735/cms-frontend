import { DecodedToken } from "@/types/type";
import { jwtDecode } from "jwt-decode";

export const getUserFromToken = (): DecodedToken | null => {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  return jwtDecode<DecodedToken>(token);
};
