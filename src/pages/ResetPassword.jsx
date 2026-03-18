import { useState } from "react";
import axios from "axios";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const token = window.location.pathname.split("/").pop();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not matcimport { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../utils/api";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async () => {
    try {
      await API.post(`/auth/reset-password/${token}`, { password });
      alert("Password updated successfully ✅");
      navigate("/");
    } catch {
      alert("Invalid or expired link ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 
        shadow-2xl rounded-3xl p-10 w-[350px] text-white">

        <h2 className="text-3xl font-bold text-center mb-4">
          Reset Password 🔐
        </h2>

        <p className="text-sm text-center mb-6 opacity-80">
          Enter your new password below
        </p>

        {/* Password Input */}
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleReset}
          className="w-full bg-white text-purple-600 font-semibold 
          p-3 rounded-lg hover:scale-105 transition"
        >
          Reset Password
        </button>

        {/* Back to login */}
        <p className="text-sm text-center mt-4">
          Go back to{" "}
          <Link to="/" className="underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}h");
      return;
    }

    try {
      const res = await axios.post(
        `https://password-reset-server-1-6q3l.onrender.com/api/auth/reset-password/${token}`,
        { password },
      );

      setMessage(res.data.message);

      if (res.data.message === "Password reset successful") {
        alert("Your password has been reset successfully!");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid or expired token");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-96 relative overflow-hidden"
      >
      
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>

        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          Reset Password
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
        >
          Reset Password
        </button>

        {message && (
          <p className="mt-4 text-sm text-center text-red-500">{message}</p>
        )}

        <p className="text-sm mt-4 text-center text-gray-700">
          Remember your password?{" "}
          <a
            href="/login"
            className="underline text-purple-600 hover:text-purple-800 transition"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default ResetPassword;