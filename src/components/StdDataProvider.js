import React, { useState, useContext, createContext } from "react";
import "../App.css";

export const StdContext = createContext();

export const StdProvider = (props) => {
  const [stds, setStds] = useState([
    {
      name: "M. Daffa Badran Thoriq",
      major: "Computer System",
      email: "daffabadrant@gmail.com",
    },
    {
      name: "Anselma Putri",
      major: "Business Management",
      email: "anselmaptr@gmail.com",
    },
    {
      name: "Sandhika Galih",
      major: "Informatics Engineering",
      email: "sandhikaUnpas@gmail.com",
    },
  ]);

  return (
    <StdContext.Provider value={[stds, setStds]}>
      {props.children}
    </StdContext.Provider>
  );
};
