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
  branchId: string;
  semesterId: string;
  yearId: string;
}

// For token decode
export interface DecodedToken {
  id: string;
  roleId: string;
  branchId: string;
  semesterId?: string;
}

// For enums
export interface EnumOption {
  id: string;
  enumType: string;
  enumValue: string;
}

// For Subject
export interface Subject {
  id: string;
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
  statusId: string;
}

// Admin list props
export interface AdminListProps {
  search: string;
}

// For Admin list data
export interface AdminListData {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  branch: { enumValue: string };
  status: { enumValue: string };
  code: string;
}

// For Admin data
export interface Admin {
  id: string;
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
  subjectIds: string[];
  statusId: string;
}

// For Professor list data
export interface ProfessorListData {
  id: string;
  code: string;
  name: string;
  email: string;
  contactNumber: string;

  branch: {
    id: string;
    enumValue: string;
  };

  status: {
    id: string;
    enumValue: string;
  };

  professorSubjects: {
    id: string;
    subject: {
      id: string;
      name: string;
      semester: {
        id: string;
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
  id: string;
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
  id: string;
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

// For professor profile
export interface ProfessorProfile {
  name: string;
  email: string;
  contactNumber: string;
  newPassword?: string;
}

// For student profile
export interface StudentProfile {
  name: string;
  email: string;
  contactNumber: string;
  newPassword?: string;
}

// For recent admin
export interface RecentAdmin {
  id: string;
  name: string;
  branch: string;
}

// For recent professor
export interface RecentProfessor {
  id: string;
  name: string;
  subjects: string[];
}

// For Professor summary
export interface ProfessorSummary {
  totalProfessor: number;
  branchName: string;
  totalSubjects: number;
  recentProfessor: RecentProfessor[];
}

// For recent assignment
export interface RecentAssignment {
  id: string;
  title: string;
  subject: {
    id: string;
    name: string;
  };
  semester: {
    id: string;
    enumType: string;
    enumValue: string; 
  };
  dueDate: string;
}

// For notification
export interface AppNotification {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  readStatus: {
    enumValue: "READ" | "UNREAD";
  };
  isRead?: boolean;
}
