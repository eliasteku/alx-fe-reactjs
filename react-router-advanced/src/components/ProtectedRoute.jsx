import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // fake authentication check
  const isAuthenticated = false; // change to true to allow access

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
