function Success() {
  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Login Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome back! You have logged in successfully.
        </p>

        <a
          href="/login"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Go Back
        </a>
      </div>
    </div>
  );
}

export default Success;import { useEffect, useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/auth/profile")
      .then(res => setMsg(res.data.msg))
      .catch(() => setMsg("Unauthorized ❌"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-4 bg-white/20 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          🚀 Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:scale-105 transition"
        >
          Logout
        </button>
      </div>

      {/* Center Card */}
      <div className="flex justify-center items-center mt-24">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-10 w-[400px] text-center text-white">

          <h2 className="text-3xl font-bold mb-4">
            Welcome 🎉
          </h2>

          <p className="text-lg opacity-90 mb-6">
            {msg}
          </p>

          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-sm opacity-80">
              🔐 Secure Password Reset System
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}