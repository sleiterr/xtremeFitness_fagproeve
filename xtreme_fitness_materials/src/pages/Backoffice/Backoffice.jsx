import React from "react";
import { useNavigate } from "react-router-dom";

const Backoffice = ({ token, onLogout }) => {
  const isLoggedIn = Boolean(token);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth-landing");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    onLogout();
    navigate("/auth-landing");
  };

  return (
    <section className="h-screen flex flex-col items-start justify-start pt-8">
      <div className="py-32 mx-auto md:max-w-7xl">
        <h4 className="font-medium text-3xl text-gray-900">Backoffice</h4>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Backoffice;
