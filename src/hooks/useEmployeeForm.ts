// src/hooks/useEmployeeForm.ts
import { useState } from "react";
import type { Employee, EmployeeStatus } from "@/types/employee";

export interface EmployeeFormData {
  name: string;
  email: string;
  role: string;
  department: string;
  status: EmployeeStatus;
}

const initialForm: EmployeeFormData = {
  name: "",
  email: "",
  role: "",
  department: "Engineering",
  status: "Active",
};

export function useEmployeeForm(
  employeeToEdit?: Employee | null,
  onSave?: (data: EmployeeFormData) => void,
  onOpenChange?: (open: boolean) => void
) {
  const [formData, setFormData] = useState<EmployeeFormData>(() => {
    if (employeeToEdit) {
      return {
        name: employeeToEdit.name,
        email: employeeToEdit.email,
        role: employeeToEdit.role,
        department: employeeToEdit.department,
        status: employeeToEdit.status,
      };
    }
    return initialForm;
  });

  const updateField = <K extends keyof EmployeeFormData>(
    field: K,
    value: EmployeeFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave?.(formData);
    onOpenChange?.(false); // Ito ang nagco-close ng dialog kusa!
  };

  return {
    formData,
    updateField,
    handleSubmit,
  };
}