import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
// Create a context to store authentication state
const AuthContext = createContext();

// Custom hook to access authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const accessToken = Cookies.get("refresh_token");
    setIsAuthenticated(accessToken ? true : false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
