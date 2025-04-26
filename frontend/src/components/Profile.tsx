import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { CalendarDays, Mail, User as UserIcon } from "lucide-react";

interface ProfileProps {
  username: string; 
}

interface FinanceRecord {
  date: string;
  expense: number;
}

const Profile: React.FC<ProfileProps> = ({ username }) => {
  const [records, setRecords] = useState<Record<string, number>>({});
  const current = dayjs();

  const displayName = username.split("@")[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/finance/${username}`);
        const map: Record<string, number> = {};
        res.data.forEach((entry: FinanceRecord) => {
          map[entry.date] = entry.expense;
        });
        setRecords(map);
      } catch (err) {
        console.error("Failed to fetch finance records:", err);
      }
    };

    fetchData();
  }, [username]);

  const daysInMonth = current.daysInMonth();
  const firstDay = current.startOf("month").day();
  const days = Array.from({ length: daysInMonth }, (_, i) => current.date(i + 1));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* User Info */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-2">
          <UserIcon className="mr-2 text-blue-500" /> {displayName}
        </h2>
        <p className="text-gray-600 flex items-center">
          <Mail className="mr-2 text-gray-500" /> {username}
        </p>
      </div>

      {/* Calendar Title */}
      <div className="flex items-center mb-4">
        <CalendarDays className="mr-2 text-green-500" />
        <h3 className="text-xl font-semibold">
          {current.format("MMMM YYYY")} Expenses
        </h3>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {days.map((day) => {
          const date = day.format("YYYY-MM-DD");
          const expense = records[date];
          return (
            <div
              key={date}
              className="p-2 border rounded bg-gray-50 hover:bg-blue-100 transition"
            >
              <div className="font-semibold">{day.date()}</div>
              <div className="text-sm text-gray-700">
                ₹{expense !== undefined ? expense : "--"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
