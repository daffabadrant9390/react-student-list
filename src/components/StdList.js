import React, { useContext } from "react";
import StdShow from "./StdShow";
import "../App.css";
import { StdContext } from "./StdDataProvider";
import AddStd from "./AddStd";

const StdList = () => {
  const [stds, setStds] = useContext(StdContext);

  return (
    <div className="std-container">
      <h1>Student Lists</h1>
      {stds.map((std) => {
        return (
          <StdShow
            name={std.name}
            major={std.major}
            email={std.email}
            key={std.name}
          />
        );
      })}
    </div>
  );
};

export default StdList;
