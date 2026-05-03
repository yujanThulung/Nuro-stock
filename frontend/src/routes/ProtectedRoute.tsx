import GlobalLoader from "@/pages/GlobalLoader";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { usePermissionContext } from "@/context/PermissionContext";
import { ROUTES } from "./routes";

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const location = useLocation();
  const { isAuthenticated, user, isLoading: authLoading } = useAuth();
  const { permissions, isLoading: permLoading } = usePermissionContext();

  const loading = authLoading || permLoading;
  const userRole = user?.role ?? permissions?.role;

  if (loading) return <GlobalLoader />;

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  if (allowedRoles && (!userRole || !allowedRoles.includes(userRole))) {
    return <Navigate to={ROUTES.UNAUTHORIZED} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;