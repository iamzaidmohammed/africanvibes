import { useState, useContext, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const signup = async (name, email, password) => {
    try {
      const response = await fetch("/api/routes/auth.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "signup", name, email, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setUser(data.user);
        return true;
      }
    } catch (error) {
      console.error("Sign Up Error:", error);
    }

    return false;
  };

  const signin = async (email, password) => {
    try {
      const response = await fetch("/api/routes/auth.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "signin", email, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setUser(data.user);
        return true;
      }
    } catch (error) {
      console.error("Sign In Error:", error);
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
