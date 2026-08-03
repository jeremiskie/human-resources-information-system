// src/types/employee.ts
export type EmployeeStatus = "Active" | "On Leave" | "Terminated";

export interface Employee {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  department: string;
  status: EmployeeStatus;
  joinDate: string;
}