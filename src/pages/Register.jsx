import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://password-reset-server-4fdw.onrender.com/api/auth/register",
        { email, password }
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
      <form
        className="bg-white p-10 rounded-3xl shadow-2xl w-96 relative overflow-hidden"
        onSubmit={handleRegister}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>

        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Create Account</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {message && (
          <p className="text-sm mt-3 text-center text-gray-700">{message}</p>
        )}

        <p className="text-sm mt-4 text-center text-gray-700">
          Already have an account?{" "}
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

export default Register;