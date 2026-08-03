// src/components/employee/EmployeeRow.tsx
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Employee } from "@/types/employee";
interface EmployeeRowProps {
  employee: Employee;
  onEdit?: (employee: Employee) => void;
  onDelete?: (id: string) => void;
}

export default function EmployeeRow({
  employee,
  onEdit,
  onDelete,
}: EmployeeRowProps) {
  const getStatusBadge = (status: Employee["status"]) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 shadow-none border-none">Active</Badge>;
      case "On Leave":
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 shadow-none border-none">On Leave</Badge>;
      case "Terminated":
        return <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100 shadow-none border-none">Terminated</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <TableRow className="hover:bg-slate-50/80 transition-colors">
      {/* Name & Avatar */}
      <TableCell className="py-3">
        <div className="flex items-center gap-3">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="h-9 w-9 rounded-full object-cover shrink-0"
          />
          <div>
            <p className="font-medium text-slate-900 text-sm">{employee.name}</p>
            <p className="text-xs text-slate-500">{employee.email}</p>
          </div>
        </div>
      </TableCell>

      {/* Role */}
      <TableCell className="text-sm text-slate-600">{employee.role}</TableCell>

      {/* Department */}
      <TableCell className="text-sm text-slate-600">{employee.department}</TableCell>

      {/* Status */}
      <TableCell>{getStatusBadge(employee.status)}</TableCell>

      {/* Joined Date */}
      <TableCell className="text-sm text-slate-500">{employee.joinDate}</TableCell>

      {/* Actions Dropdown */}
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-100">
              <MoreHorizontal className="h-4 w-4 text-slate-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            <DropdownMenuItem onClick={() => onEdit?.(employee)} className="gap-2 cursor-pointer">
              <Pencil className="h-4 w-4 text-slate-500" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete?.(employee.id)}
              className="gap-2 text-rose-600 focus:text-rose-600 cursor-pointer"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}