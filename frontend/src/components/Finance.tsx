import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FinanceProps {
  isLoggedIn: boolean;
  username: string;
}

const Finance: React.FC<FinanceProps> = ({ isLoggedIn, username }) => {
  const today = dayjs().format("YYYY-MM-DD");
  const navigate = useNavigate();
  const [income, setIncome] = useState<number>(0);
  const [expenseToday, setExpenseToday] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  useEffect(() => {
    if (!username) return;
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/finance/${username}`);
        const records = res.data;
        const todayRecord = records.find((r: any) => r.date === today);
        const incomeEntry = records[0]?.income ?? 0;
        setIsNewUser(records.length === 0);
        setIncome(incomeEntry);
        setExpenseToday(todayRecord?.expense ?? 0);
      } catch (err) {
        console.error("Error fetching user data", err);
        setIsNewUser(true);
        setIncome(0);
        setExpenseToday(0);
      }
      setSubmitted(false);
      setLoading(false);
    };
    fetchUserData();
  }, [username, today]);

  const handleSave = async () => {
    if (!username || income <= 0) return;
    try {
      await axios.post("http://localhost:5000/finance", {
        userId: username,
        income,
        date: today,
        expense: expenseToday,
      });
      setSubmitted(true);
    } catch (err: any) {
      console.error("Save error", err);
      alert(err.response?.data?.message || "Failed to save entry");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        💸 {username}&apos;s Daily Finance Tracker
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          {isNewUser && (
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Monthly Income (₹)
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Date</label>
            <input
              type="text"
              value={today}
              disabled
              className="w-full p-2 border border-gray-200 bg-gray-100 rounded-md cursor-not-allowed"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Today&apos;s Expense (₹)
            </label>
            <input
              type="number"
              value={expenseToday}
              onChange={(e) =>
                setExpenseToday(parseFloat(e.target.value) || 0)
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Save Entry
          </button>

          {submitted && (
            <p className="mt-4 text-green-600 text-center font-medium">
              ✅ Saved! ₹{expenseToday.toLocaleString()} spent on {today}.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Finance;
