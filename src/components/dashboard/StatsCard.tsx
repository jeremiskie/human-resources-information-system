import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  description,
  icon: Icon,
}: StatsCardProps) {
  return (
    <TooltipProvider>
      <Card className="border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <Tooltip>
                {/* Nilagay ang truncate at block/w-full sa TooltipTrigger mismo */}
                <TooltipTrigger className="block w-full truncate text-left cursor-default">
                  <p className="truncate text-sm font-medium text-slate-500">
                    {title}
                  </p>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="mt-3 block w-full truncate text-left cursor-default">
                  <h2 className="truncate text-3xl font-bold tracking-tight text-slate-900">
                    {value}
                  </h2>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{value}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="mt-2 block w-full truncate text-left cursor-default">
                  <p className="truncate text-sm text-slate-500">
                    {description}
                  </p>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <Icon className="h-5 w-5 shrink-0 text-blue-600" />
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}