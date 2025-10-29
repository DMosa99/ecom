import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

interface ProtectedRouteProps {
  onRequireLogin: () => void;
}

export const ProtectedRoute = ({ onRequireLogin }: ProtectedRouteProps) => {
  const { token } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!token) onRequireLogin();
  }, []);

  if (!token) {
    return <Navigate to={location.state?.from?.pathname || "/"} replace />;
  }

  return <Outlet />;
};
