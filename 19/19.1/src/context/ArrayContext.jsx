import { createContext, useContext, useState } from "react";

export const ArrayContext = createContext();

export const ArrayProvider = ({ children }) => {

  const [arr , setArr] = useState([])

  function updateArr(newArray){
    setArr(newArray)
  }

  return (
    <ArrayContext.Provider value={{arr , updateArr}} >
      {children}
    </ArrayContext.Provider>
  );
};

export const useArray = () => useContext(ArrayContext);
