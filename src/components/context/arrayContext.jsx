import React, { createContext, useState } from "react";

export const dataArrayContext = createContext();

export const ArrayProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState([]);

  const addTask = (newTask) => {
    setDataArray((prevData) => [...prevData, newTask]);
  };

  return (
    <dataArrayContext.Provider value={{ addTask, setDataArray, dataArray }}>
      {children}
    </dataArrayContext.Provider>
  );
};
