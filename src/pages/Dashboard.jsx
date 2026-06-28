import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">

        <h1 className="text-3xl font-bold text-blue-700">
          Dashboard
        </h1>

        <div className="mt-8">

          <img
            src={currentUser?.photoURL}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />

          <h2 className="text-2xl mt-4">
            {currentUser?.displayName}
          </h2>

          <p>{currentUser?.email}</p>

        </div>

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