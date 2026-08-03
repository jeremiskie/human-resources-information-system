import {
  CalendarDays,
  Clock3,
  Users,
  Wallet,
} from "lucide-react";

import StatsCard from "@/components/dashboard/StatsCard";
import AttendanceChart from "@/components/dashboard/AttendanceChart";
import RecentEmployees from "@/components/dashboard/RecentEmployees";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Employees"
          value={238}
          description="12 hired this month"
          icon={Users}
        />

        <StatsCard
          title="Present Today"
          value={214}
          description="90% attendance"
          icon={Clock3}
        />

        <StatsCard
          title="Leave Requests"
          value={18}
          description="Awaiting approval"
          icon={CalendarDays}
        />

        <StatsCard
          title="Monthly Payroll"
          value="₱100,250,000"
          description="July Payroll"
          icon={Wallet}
        />
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>

        <RecentEmployees />
      </div>
    </div>
  );
}