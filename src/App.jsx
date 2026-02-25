import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Success from "./pages/Success";

function App() {
  const path = window.location.pathname;

  if (path === "/login") return <Login />;
  if (path === "/register") return <Register />;
  if (path === "/success") return <Success />;
  if (path === "/forgot") return <ForgotPassword />;
  if (path.includes("/reset-password/")) return <ResetPassword />;

  return <Login />; 
}

export default App;