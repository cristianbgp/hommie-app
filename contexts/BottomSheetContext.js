import React, { useRef } from "react";

const BottomSheetContext = React.createContext("light");

const BottomSheetProvider = ({ children }) => {
  const bottomSheetRef = useRef(null);
  return (
    <BottomSheetContext.Provider value={bottomSheetRef}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export { BottomSheetContext, BottomSheetProvider };
