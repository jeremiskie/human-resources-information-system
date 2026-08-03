import type { Employee } from "@/types/employee";

// Pinalitan ng "export const" mula sa "export className"
export const mockEmployees: Employee[] = [
  {
    id: "EMP-001",
    name: "John Doe",
    email: "john.doe@company.com",
    avatar: "https://i.pravatar.cc/100?img=11",
    role: "Software Engineer",
    department: "Engineering",
    status: "Active",
    joinDate: "Jan 15, 2023",
  },
  {
    id: "EMP-002",
    name: "Sarah Wilson",
    email: "sarah.w@company.com",
    avatar: "https://i.pravatar.cc/100?img=5",
    role: "HR Manager",
    department: "Human Resources",
    status: "On Leave",
    joinDate: "Mar 01, 2022",
  },
  {
    id: "EMP-003",
    name: "Michael Johnson",
    email: "michael.j@company.com",
    avatar: "https://i.pravatar.cc/100?img=3",
    role: "Accountant",
    department: "Finance",
    status: "Active",
    joinDate: "Jul 10, 2021",
  },
];