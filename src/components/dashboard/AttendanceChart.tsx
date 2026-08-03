import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const attendance = [
  { day: "Mon", value: 75 },
  { day: "Tue", value: 90 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 95 },
  { day: "Fri", value: 85 },
  { day: "Sat", value: 45 },
  { day: "Sun", value: 20 },
];

export default function AttendanceChart() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Weekly Attendance</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex h-64 items-end justify-between gap-4">
          {attendance.map((item) => (
            <div
              key={item.day}
              className="flex flex-1 flex-col items-center gap-3"
            >
              <div
                className="w-full rounded-t-lg bg-blue-600 transition-all hover:bg-blue-700"
                style={{
                  height: `${item.value}%`,
                }}
              />

              <span className="text-sm text-slate-500">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}