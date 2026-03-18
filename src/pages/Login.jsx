import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const res = await fetch("https://password-reset-server-1-6q3l.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
import { useState } from "react";
import API from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 
        shadow-2xl rounded-3xl p-10 w-[350px] text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 
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
          onClick={handleLogin}
          className="w-full bg-white text-purple-600 font-semibold 
          p-3 rounded-lg hover:scale-105 transition"
        >
          Login
        </button>

        {/* Links */}
        <div className="text-sm mt-4 flex justify-between">
          <Link to="/forgot" className="hover:underline">
            Forgot Password?
          </Link>

          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </div>

      </div>

    </div>
  );
}
      if (res.ok) {
        window.location.href = "/success";
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
      <form 
        className="bg-white p-10 rounded-3xl shadow-2xl w-96 relative overflow-hidden"
        onSubmit={handleLogin}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>

        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Welcome Back</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center text-gray-700">
          Don’t have an account?{" "}
          <a href="/register" className="underline text-purple-600 hover:text-purple-800 transition">
            Register
          </a>
        </p>

        <p className="text-sm mt-2 text-center text-gray-700">
          <a href="/forgot" className="underline text-pink-600 hover:text-pink-800 transition">
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;