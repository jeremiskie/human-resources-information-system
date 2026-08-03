import type { ReactNode } from "react";
import { Outlet } from "react-router"; // or "react-router-dom"

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children?: ReactNode; // <- Dinagdagan ng '?' para maging optional
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6">
          {/* Kung may ipinasang children gagamitin iyon, kapag wala (sa React Router) Outlet ang lilitaw */}
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  );
}