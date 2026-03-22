import "./App.css";
import {
  Navigate,
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
// Custom hook to manage token in local storage
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import ContactConfirmation from "../src/components/Contact/ContactConfirmation ";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AuthLanding from "./components/AuthLanding/AuthLanding";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import Backoffice from "./pages/Backoffice/Backoffice";
import MyPage from "./pages/MyPage/MyPage";
import BlogFormUpdate from "./pages/Backoffice/BlogFormUpdate";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // useLocalStorage is a custom hook that manages the token in local storage
  const [token, setToken] = useLocalStorage("token", null);
  // location react hook to get the current path and determine if the header should be shown
  const location = useLocation();
  const navigate = useNavigate();
  // Define routes where the header should be hidden
  const hideHeaderRoutes = ["/contact-confirmation", "/backoffice"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  const handleLogin = (newToken) => {
    setToken(newToken);
    navigate("/my-page");
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    // localStorage.removeItem("favorites");
    navigate("/");
  };

  return (
    <>
      {showHeader && <Header token={token} onLogout={handleLogout} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact-confirmation"
            element={<ContactConfirmation />}
          />
          <Route
            path="/auth-landing"
            element={<AuthLanding onLogin={handleLogin} />}
          />
          <Route
            path="/backoffice"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Backoffice token={token} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          <Route />
          <Route
            path="/my-page"
            element={
              <ProtectedRoute allowedRoles={["member", "admin"]}>
                <MyPage token={token} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          <Route />
          <Route path="/blogs/edit/:id" element={<BlogFormUpdate />} />
        </Routes>
      </main>
      {showHeader && <Footer />}
      <ToastContainer position="top-center" autoClose={2500} />
    </>
  );
}

export default App;
