export const ROLES = {
  SUPER_ADMIN: "SuperAdmin",
  ADMIN: "Admin",
  PROFESSOR: "Professor",
  STUDENT: "Student",
} as const;

export type RoleType = typeof ROLES[keyof typeof ROLES];