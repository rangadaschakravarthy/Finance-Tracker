import { DollarSign, BarChart, User, CreditCard } from "lucide-react"; // Import relevant icons

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">Finance Tracker</div>
          <div>
            <a href="/profile" className="mr-4 hover:text-blue-300">
              <User className="inline mr-1" /> Profile
            </a>
            <a href="/settings" className="hover:text-blue-300">
              Settings
            </a>
          </div>
        </div>
      </nav>
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Finance Tracker</h1>
        <p className="text-lg">Keep track of your income, expenses, and savings in one place</p>
      </section>
      <section className="py-10 bg-gray-200">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="text-green-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold">Income</h3>
            <p className="text-2xl font-bold">$5,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <CreditCard className="text-red-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold">Expenses</h3>
            <p className="text-2xl font-bold">$2,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <BarChart className="text-yellow-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold">Savings</h3>
            <p className="text-2xl font-bold">$1,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="text-blue-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold">Investments</h3>
            <p className="text-2xl font-bold">$10,000</p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Description</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4 text-sm text-gray-600">04/25/2025</td>
                <td className="px-6 py-4 text-sm text-gray-600">Salary Payment</td>
                <td className="px-6 py-4 text-sm text-green-500">$5,000</td>
                <td className="px-6 py-4 text-sm text-gray-600">Income</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 text-sm text-gray-600">04/24/2025</td>
                <td className="px-6 py-4 text-sm text-gray-600">Electricity Bill</td>
                <td className="px-6 py-4 text-sm text-red-500">-$100</td>
                <td className="px-6 py-4 text-sm text-gray-600">Expenses</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 text-sm text-gray-600">04/23/2025</td>
                <td className="px-6 py-4 text-sm text-gray-600">Invested in Stocks</td>
                <td className="px-6 py-4 text-sm text-blue-500">-$200</td>
                <td className="px-6 py-4 text-sm text-gray-600">Investments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2025 Finance Tracker. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
