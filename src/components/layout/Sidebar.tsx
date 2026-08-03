import {
  LayoutDashboard,
  Users,
  Clock3,
  CalendarDays,
  Wallet,
  Building2,
  Briefcase,
  FileBarChart2,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    icon: Users,
  },
  {
    title: "Attendance",
    icon: Clock3,
  },
  {
    title: "Leave",
    icon: CalendarDays,
  },
  {
    title: "Payroll",
    icon: Wallet,
  },
  {
    title: "Departments",
    icon: Building2,
  },
  {
    title: "Recruitment",
    icon: Briefcase,
  },
  {
    title: "Reports",
    icon: FileBarChart2,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    // Ginamit ang h-dvh (Dynamic Viewport Height) + max-h-screen para eksaktong sumukat sa screen
    <aside className="hidden h-dvh max-h-screen sticky top-0 w-72 border-r bg-white lg:flex lg:flex-col shrink-0 overflow-hidden">
      {/* Logo Header */}
      <div className="flex h-16 shrink-0 items-center px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
          H
        </div>

        <div className="ml-3">
          <h1 className="text-lg font-bold text-slate-900">
            OmniPeople HR
          </h1>

          <p className="text-xs text-slate-500">
            Human Resources
          </p>
        </div>
      </div>

      <Separator className="shrink-0" />

      {/* Navigation - min-h-0 para hayaang mag-scroll ang menu kapag kulang ang space */}
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full px-3 py-4">
          <nav className="space-y-1">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <Button
                  key={menu.title}
                  variant={menu.title === "Dashboard" ? "default" : "ghost"}
                  className={`h-11 w-full justify-start gap-3 ${
                    menu.title === "Dashboard"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : ""
                  }`}
                >
                  <Icon className="h-5 w-5" />

                  <span>{menu.title}</span>
                </Button>
              );
            })}
          </nav>
        </ScrollArea>
      </div>

      <Separator className="shrink-0" />

      {/* User Section - May p-4 + pb-6 para siguradong may gap/space sa pinakailalim */}
      <div className="p-4 pb-6 shrink-0 bg-white">
        <div className="flex items-center gap-3 rounded-xl border p-3">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="User"
            className="h-11 w-11 rounded-full object-cover shrink-0"
          />

          <div className="min-w-0 flex-1">
            <p className="truncate font-medium text-slate-900">
              Jeremy
            </p>

            <p className="truncate text-sm text-slate-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}