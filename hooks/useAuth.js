import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";

const AuthContext = createContext({
  //initial state ...
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: "Joel",
      }}
    >
      {children}
      {/* me  */}
    </AuthContext.Provider>
  );
};

//custom hook

export default function useAuth() {
  return useContext(AuthContext);

  //me
}
