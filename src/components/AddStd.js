import React, { useState, useContext } from "react";
import "../App.css";
import { StdContext } from "./StdDataProvider";

const AddStd = () => {
  const [stds, setStds] = useContext(StdContext);
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");

  const updateData = (e) => {
    if (e.target.classList.contains("name-input")) {
      setName(e.target.value);
    } else if (e.target.classList.contains("major-input")) {
      setMajor(e.target.value);
    } else if (e.target.classList.contains("email-input")) {
      setEmail(e.target.value);
    }
  };

  const updateStdData = (e) => {
    e.preventDefault();

    setStds((prevStds) => [
      ...prevStds,
      { name: name, major: major, email: email },
    ]);

    setName("");
    setMajor("");
    setEmail("");

    console.log(stds);
  };

  return (
    <div className="add-std-container">
      <h3>Add Student</h3>
      <form onSubmit={updateStdData}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="name-input"
            placeholder="input student name..."
            value={name}
            onChange={updateData}
          />
        </div>
        <div className="input-group">
          <label htmlFor="major">Major</label>
          <input
            type="text"
            id="major"
            className="major-input"
            placeholder="input student major..."
            value={major}
            onChange={updateData}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="email-input"
            placeholder="Example@gmail.com"
            value={email}
            onChange={updateData}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStd;
