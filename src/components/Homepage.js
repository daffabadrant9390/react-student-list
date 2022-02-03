import React, { useContext } from "react";
import "../App.css";
import StdShow from "./StdShow";
import { StdContext } from "./StdDataProvider";
import StdList from "./StdList";

const Homepage = () => {
  const [stds, setStds] = useContext(StdContext);
  return (
    <div className="home-container">
      <div className="std-list-details">
        <h1>Students Data</h1>
        <p>
          Number of Students : <span>{stds.length}</span>
        </p>
      </div>
      <StdList />
    </div>
  );
};

export default Homepage;
