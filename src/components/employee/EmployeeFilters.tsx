import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmployeeFiltersProps {
  selectedDepartment: string;
  selectedStatus: string;
  onDepartmentChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function EmployeeFilters({
  selectedDepartment,
  selectedStatus,
  onDepartmentChange,
  onStatusChange,
}: EmployeeFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Department Filter */}
      <Select
        value={selectedDepartment}
        onValueChange={(val) => onDepartmentChange(val ?? "all")}
      >
        <SelectTrigger className="w-[160px] bg-white">
          <SelectValue placeholder="Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Departments</SelectItem>
          <SelectItem value="Engineering">Engineering</SelectItem>
          <SelectItem value="Human Resources">Human Resources</SelectItem>
          <SelectItem value="Finance">Finance</SelectItem>
          <SelectItem value="Marketing">Marketing</SelectItem>
        </SelectContent>
      </Select>

      {/* Status Filter */}
      <Select
        value={selectedStatus}
        onValueChange={(val) => onStatusChange(val ?? "all")}
      >
        <SelectTrigger className="w-[140px] bg-white">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="On Leave">On Leave</SelectItem>
          <SelectItem value="Terminated">Terminated</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}