import { useState } from "react";
import API from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", data);
      alert("Registered successfully ✅");
      navigate("/");
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 
        shadow-2xl rounded-3xl p-10 w-[380px] text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account ✨
        </h2>

        {/* Name */}
        <input
          placeholder="Name"
          className="w-full p-3 mb-3 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setData({ ...data, name: e.target.value })}
        />

        {/* Date */}
        <input
          type="date"
          className="w-full p-3 mb-3 rounded-lg bg-white/20 
          text-white outline-none focus:ring-2 focus:ring-white"
          onChange={e => setData({ ...data, date: e.target.value })}
        />

        {/* Mobile */}
        <input
          placeholder="Mobile"
          className="w-full p-3 mb-3 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setData({ ...data, mobile: e.target.value })}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setData({ ...data, email: e.target.value })}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setData({ ...data, password: e.target.value })}
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-white text-purple-600 font-semibold 
          p-3 rounded-lg hover:scale-105 transition"
        >
          Register
        </button>

        {/* Login link */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}