import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://password-reset-server-1-6q3l.onrender.com/api/auth/forgot-password",
        { email },
        { timeout: 15000 }
      );

      setMessage(res.data.message);
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        setMessage("Request timed out. Please try again.");
      } else {
        setMessage(error.response?.data?.message || "Error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
      <form
        className="bg-white p-10 rounded-3xl shadow-2xl w-96 relative overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>

        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          Forgot Password
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Please wait..." : "Send Reset Link"}
        </button>

        {message && (
          <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
        )}

        <p className="text-sm mt-4 text-center text-gray-700">
          Remember your password?{" "}
          <a
            href="/login"
            className="underline text-indigo-600 hover:text-indigo-800 transition"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;