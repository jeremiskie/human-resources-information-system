import { useState } from "react";
import { mockEmployees } from "@/data/mockEmployees";
import type { Employee } from "@/types/employee";
import EmployeeTable from "@/components/employee/EmployeeTable";
import EmployeeDialog from "@/components/employee/EmployeeDialog";

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // Handlers
  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setIsDialogOpen(true);
  };

  const handleEditEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsDialogOpen(true);
  };

  const handleDeleteEmployee = (id: string) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const handleSaveEmployee = (data: Partial<Employee>) => {
    if (selectedEmployee) {
      // Edit mode
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === selectedEmployee.id ? ({ ...emp, ...data } as Employee) : emp
        )
      );
    } else {
      // Add mode
      const newEmployee: Employee = {
        id: `EMP-00${employees.length + 1}`,
        name: data.name || "",
        email: data.email || "",
        role: data.role || "",
        department: data.department || "Engineering",
        status: data.status || "Active",
        avatar: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 50)}`,
        joinDate: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      setEmployees((prev) => [newEmployee, ...prev]);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Employees
        </h1>
        <p className="text-sm text-slate-500">
          Manage your organization&apos;s workforce, departments, and employee details.
        </p>
      </div>

      {/* Main Table Component */}
      <EmployeeTable
        employees={employees}
        onAddEmployee={handleAddEmployee}
        onEditEmployee={handleEditEmployee}
        onDeleteEmployee={handleDeleteEmployee}
      />

      {/* Add / Edit Dialog Modal */}
      <EmployeeDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        employeeToEdit={selectedEmployee}
        onSave={handleSaveEmployee}
      />
    </div>
  );
}