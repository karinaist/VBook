import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!user) {
        navigate("/login");
      }
    };
    checkAuth();
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
