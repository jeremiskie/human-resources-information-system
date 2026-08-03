// src/components/employee/EmployeeDialog.tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEmployeeForm, type EmployeeFormData } from "@/hooks/useEmployeeForm";
import type { Employee, EmployeeStatus } from "@/types/employee";

interface EmployeeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employeeToEdit?: Employee | null;
  onSave: (employeeData: EmployeeFormData) => void;
}

export default function EmployeeDialog({
  open,
  onOpenChange,
  employeeToEdit,
  onSave,
}: EmployeeDialogProps) {
  const formKey = employeeToEdit ? `edit-${employeeToEdit.id}` : "add-new";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogForm
          key={formKey}
          employeeToEdit={employeeToEdit}
          onSave={onSave}
          onOpenChange={onOpenChange}
        />
      </DialogContent>
    </Dialog>
  );
}

function DialogForm({
  employeeToEdit,
  onSave,
  onOpenChange,
}: Omit<EmployeeDialogProps, "open">) {
  const { formData, updateField, handleSubmit } = useEmployeeForm(
    employeeToEdit,
    onSave,
    onOpenChange
  );

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {employeeToEdit ? "Edit Employee" : "Add New Employee"}
        </DialogTitle>
        <DialogDescription>
          {employeeToEdit
            ? "Update the employee details below."
            : "Fill in the details to add a new employee to your organization."}
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4 py-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="e.g. john@company.com"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
          />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <Label htmlFor="role">Role / Job Title</Label>
          <Input
            id="role"
            placeholder="e.g. Software Engineer"
            value={formData.role}
            onChange={(e) => updateField("role", e.target.value)}
            required
          />
        </div>

        {/* Department */}
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Select
            value={formData.department}
            onValueChange={(val) =>
              updateField("department", val ?? "Engineering")
            }
          >
            <SelectTrigger id="department">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Human Resources">Human Resources</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select
            value={formData.status}
            onValueChange={(val) =>
              updateField("status", (val as EmployeeStatus) ?? "Active")
            }
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="On Leave">On Leave</SelectItem>
              <SelectItem value="Terminated">Terminated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {employeeToEdit ? "Save Changes" : "Add Employee"}
          </Button>
        </DialogFooter>
      </form>
    </>
  );
}