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
  const appEnv = import.meta.env.VITE_APP_ENV;
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const signup = async (
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword
  ) => {
    const fetchUrl = appEnv === 'local' ? `/api/auth` : `${api}/auth`;

    try {
      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "signup",
          firstName,
          lastName,
          username,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error("Sign Up Error:", error);
      return { success: false, message: "An error occurred during signup." };
    }
  };

  const signin = async (email, password) => {
    const fetchUrl = appEnv === 'local' ? `/api/auth` : `${api}/auth`;

    try {
      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "signin", email, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error("Sign In Error:", error);
      return { success: false, message: "An error occurred during signin." };
    }
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
