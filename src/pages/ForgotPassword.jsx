import { useState } from "react";
import API from "../utils/api";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSend = async () => {
    try {
      await API.post("/auth/forgot-password", { email });
      alert("Reset link sent to your email 📩");
    } catch {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 
        shadow-2xl rounded-3xl p-10 w-[350px] text-white">

        <h2 className="text-3xl font-bold text-center mb-4">
          Forgot Password 🔑
        </h2>

        <p className="text-sm text-center mb-6 opacity-80">
          Enter your email to receive reset link
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 
          placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          onChange={e => setEmail(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleSend}
          className="w-full bg-white text-purple-600 font-semibold 
          p-3 rounded-lg hover:scale-105 transition"
        >
          Send Reset Link
        </button>

        {/* Back to login */}
        <p className="text-sm text-center mt-4">
          Remember password?{" "}
          <Link to="/" className="underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}