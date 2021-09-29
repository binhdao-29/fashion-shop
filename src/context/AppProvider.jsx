import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [categoryName, setCategoryName] = useState("");

  return (
    <AppContext.Provider value={{ categoryName, setCategoryName }}>
      {children}
    </AppContext.Provider>
  );
}
