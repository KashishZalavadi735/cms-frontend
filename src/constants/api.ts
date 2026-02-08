const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const AUTH_API = {
  LOGIN: `${BASE_URL}/api/auth/login`,
  SIGNUP: `${BASE_URL}/api/auth/signup`,
};

export const SET_PASSWORD_API = {
  SET_PASSWORD: `${BASE_URL}/api/set-password`,
};

export const FORGOT_PASSWORD_API = {
  SEND_OTP: `${BASE_URL}/api/forgot-password/send-otp`,
  VERIFY_OTP: `${BASE_URL}/api/forgot-password/verify-otp`,
  CHANGE_PASSWORD: `${BASE_URL}/api/forgot-password/change-password`,
};

export const SUPER_ADMIN_API = {
  CREATE_ADMIN: `${BASE_URL}/api/super-admin/admin`,
  GET_ALL_ADMIN: `${BASE_URL}/api/super-admin/admin`,
  GET_ADMIN_BY_ID: (id: number) => `${BASE_URL}/api/super-admin/admin/${id}`,
  UPDATE_ADMIN: (id: number) => `${BASE_URL}/api/super-admin/admin/${id}`,
  DELETE_ADMIN: (id: number) => `${BASE_URL}/api/super-admin/admin/${id}`,
  PROFILE: `${BASE_URL}/api/super-admin/me`,
  PROFILE_UPDATE: `${BASE_URL}/api/super-admin/me`,
  CARDS: `${BASE_URL}/api/super-admin/dashboard-cards`,
  ADMIN_SUMMARY: `${BASE_URL}/api/super-admin/admin/summary`,
};

export const ADMIN_API = {
  CREATE_PROFESSOR: `${BASE_URL}/api/admin/professor`,
  GET_ALL_PROFESSOR: `${BASE_URL}/api/admin/professor`,
  GET_PROFESSOR_BY_ID: (id: number) => `${BASE_URL}/api/admin/professor/${id}`,
  UPDATE_PROFESSOR: (id: number) => `${BASE_URL}/api/admin/professor/${id}`,
  DELETE_PROFESSOR: (id: number) => `${BASE_URL}/api/admin/professor/${id}`,
  UPDATE_PROFESSOR_SUBJECTS: (id: number) =>
    `${BASE_URL}/api/admin/professor/${id}/subjects`,
  GET_BRANCH_SUBJECTS: `${BASE_URL}/api/admin/subjects`,
  PROFILE: `${BASE_URL}/api/admin/me`,
  PROFILE_UPDATE: `${BASE_URL}/api/admin/me`,
};

export const PROFESSOR_API = {
  PROFILE: `${BASE_URL}/api/professor/me`,
};

export const STUDENT_API = {
  PROFILE: `${BASE_URL}/api/student/me`,
};

export const ASSIGNMENT_API = {
  CREATE: `${BASE_URL}/api/assignment`,
  SUBJECT: (semesterId: number) =>
    `${BASE_URL}/api/assignment/for-assignment?semesterId=${semesterId}`,
  GET_ALL: `${BASE_URL}/api/assignment/students`,
  UPDATE_STATUS: (id: number) => `${BASE_URL}/api/assignment/${id}/status`,
  DOWNLOAD: (fileName: string) =>
    `${BASE_URL}/api/assignment/download/${fileName}`,
};

export const BRANCH_STUDENT_API = {
  VIEW_STUDENT: `${BASE_URL}/api/branch-student`,
};

export const ENUM_API = {
  GET: (type: string) => `${BASE_URL}/api/enums/${type}`,
};
