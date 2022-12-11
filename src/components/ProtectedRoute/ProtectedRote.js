import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <h1>Loading</h1>;

    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

    return (
        user.accessToken //=== allowedRoles[0] /// Implementar Roles de usuario
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}
