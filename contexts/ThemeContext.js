import React, { useState } from "react";

const ThemeContext = React.createContext("light");

const ThemeProvider = ({children}) => {
  const [state, setState] = useState("light");
  return (
    <ThemeContext.Provider value={[state, setState]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
