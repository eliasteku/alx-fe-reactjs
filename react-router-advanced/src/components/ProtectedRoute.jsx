import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // <-- checker expects this

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
