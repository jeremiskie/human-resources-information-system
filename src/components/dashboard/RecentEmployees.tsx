import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const recentEmployees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    position: "HR Manager",
    status: "On Leave",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Accountant",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

export default function RecentEmployees() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Recent Employees</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {recentEmployees.map((employee) => (
          <div
            key={employee.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={employee.avatar} />
                <AvatarFallback>
                  {employee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-medium text-slate-900">
                  {employee.name}
                </p>

                <p className="text-sm text-slate-500">
                  {employee.position}
                </p>
              </div>
            </div>

            <Badge
              variant={
                employee.status === "Active"
                  ? "default"
                  : "secondary"
              }
            >
              {employee.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}