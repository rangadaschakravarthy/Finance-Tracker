import React from "react";
import { HomeIcon, TrendingUp, CalendarCheck } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <HomeIcon className="text-green-500 mr-2" />
        <h1 className="text-3xl font-bold">Welcome to Finance Tracker</h1>
      </div>
      <p className="text-gray-700 mb-4">
        Stay on top of your money! This app helps you track expenses, manage monthly budgets,
        and plan savings easily.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div className="p-4 bg-blue-100 rounded-lg flex items-start gap-3">
          <TrendingUp className="text-blue-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold">Track Expenses</h2>
            <p className="text-sm text-gray-600">
              Record your daily spending and understand where your money goes.
            </p>
          </div>
        </div>
        <div className="p-4 bg-green-100 rounded-lg flex items-start gap-3">
          <CalendarCheck className="text-green-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold">Monthly Planner</h2>
            <p className="text-sm text-gray-600">
              Save each month's budget and review your financial history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
