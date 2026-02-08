// For Header 
export interface HeaderProps {
  toggleSidebar: () => void;
}

// For Sidebar 
export interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

// For Set password data
export interface SetPasswordData {
  token: string;
  password: string;
}

// For Login data
export interface LoginData {
  email: string;
  password: string;
}

// For Signup data
export interface SignupData {
  name: string;
  email: string;
  contactNumber: string;
  password: string;
  branchId: number | string;
  semesterId: number | string;
  yearId: number | string;
}

// For token decode
export interface DecodedToken {
  id: number;
  roleId: number;
  branchId: number;
  semesterId?: number;
}

// For enums
export interface EnumOption {
  id: number;
  enumType: string;
  enumValue: string;
}

// For Subject
export interface Subject {
  id: number;
  name: string;
  semester: {
    enumValue: string;
  };
}

// For admin data of form input
export interface AdminData {
  name: string;
  email: string;
  contactNumber: string;
  branchValue: string;
  statusId: number;
}

// Admin list props
export interface AdminListProps {
  search: string;
}

// For Admin list data
export interface AdminListData {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
  branch: { enumValue: string };
  status: { enumValue: string };
  code: string;
}

// For Admin data
export interface Admin {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
  branch: { enumValue: string };
  status: { enumValue: string };
  code: string;
}
// For professor props
export interface ProfessorProps {
  search: string;
}

// For professor data of form input
export interface ProfessorData {
  name: string;
  email: string;
  contactNumber: string;
  branchValue: string;
  subjectIds: number[];
  statusId: number;
}

// For Professor list data
export interface ProfessorListData {
  id: number;
  code: string;
  name: string;
  email: string;
  contactNumber: string;

  branch: {
    id: number;
    enumValue: string;
  };

  status: {
    id: number;
    enumValue: string;
  };

  professorSubjects: {
    id: number;
    subject: {
      id: number;
      name: string;
      semester: {
        id: number;
        enumValue: string;
      };
    };
  }[];
}

// For student props
export interface StudentProps {
  search: string;
}

// For Student list data
export interface StudentListData {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
  branch: { enumValue: string };
  semester: { enumValue: string };
  year: { enumValue: string };
  status: { enumValue: string };
  code: string;
}

// For Assignment props
export interface AssignmentProps {
  search: string;
}

// For Assignment data of form input
export interface AssignmentData {
  title: string;
  description: string;
  dueDate: string;
  subjectId: string;
  semesterId: string;
  attachment?: string;
}

// For Assignment Filter tabs
export interface AssignmentFilterTabProps {
  active: string;
  setActive: (value: string) => void;
}

// For Assignment card
export interface AssignmentCardProps {
  assignments: any[];
}

// For Profile
export interface Profile {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
  role: {
    enumValue: string;
  };
  code: string;
  branch: {
    enumValue: string;
  };
  semester: {
    enumValue: string;
  };
  year: {
    enumValue: string;
  };
}

// For super admin profile
export interface SuperAdminProfile {
  name: string;
  contactNumber: string;
  newPassword?: string;
}

// For admin profile
export interface AdminProfile {
  name: string;
  email: string;
  contactNumber: string;
  newPassword?: string;
}