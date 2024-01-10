import React, { createContext, useState } from "react";

export const dataArrayContext = createContext();

export const ArrayProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState([]);

  const updateArrayData = (newData) => {
    setDataArray(newData);
  };

  const addTask = (newTask) => {
    setDataArray((prevData) => [...prevData, newTask]);
  };

  return (
    <dataArrayContext.Provider value={{ dataArray, updateArrayData, addTask }}>
      {children}
    </dataArrayContext.Provider>
  );
};
