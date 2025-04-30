import { createContext, useContext, useState } from "react";

// Create the context
const AuthContext = createContext();

// Create the provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to set the user (after login/signup)
  const setAuth = (authUser) => {
    setUser(authUser);
  };

  // Function to update user data
  const setUserData = (userData) => {
    console.log("old user", user)
    setUser({...userData})
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);
