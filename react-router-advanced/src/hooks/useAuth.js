import { useState } from "react";

// fake authentication hook
export default function useAuth() {
  const [isAuthenticated] = useState(false); // change to true to simulate login
  return { isAuthenticated };
}
