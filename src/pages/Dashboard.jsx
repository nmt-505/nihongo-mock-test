import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import StatCard from "../components/dashboard/StatCard";

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-700 text-white p-6">
        <h1 className="text-3xl font-bold">
          Welcome, {currentUser?.displayName}
        </h1>

        <p>{currentUser?.email}</p>
      </div>

      <div className="max-w-6xl mx-auto p-6">

        {/* Profile */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-5">

          <img
            src={currentUser?.photoURL}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {currentUser?.displayName}
            </h2>

            <p className="text-gray-500">
              Free Member
            </p>
          </div>

        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-5 mt-8">

          <StatCard
            title="Tests Taken"
            value="0"
          />

          <StatCard
            title="Average Score"
            value="0%"
          />

          <StatCard
            title="Study Hours"
            value="0h"
          />

          <StatCard
            title="Premium"
            value="Free"
          />

        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">

  <Link
    to="/free"
    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
  >
    Start Free Test
  </Link>

  <Link
    to="/premium"
    className="border border-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50"
  >
    Premium Tests
  </Link>

  <Link
    to="/results"
    className="border border-gray-400 px-5 py-3 rounded-lg hover:bg-gray-100"
  >
    View Results
  </Link>

</div>
        {/* Logout */}
        <button
          onClick={logout}
          className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;