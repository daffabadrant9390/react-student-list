import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import StdList from "./components/StdList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import activeLink from "./helpers/activeLink";
import { StdProvider } from "./components/StdDataProvider";
import AddStd from "./components/AddStd";

function App() {
  activeLink();
  return (
    <Router>
      <StdProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/student" component={AddStd} />
          </Switch>
        </div>
      </StdProvider>
    </Router>
  );
}

export default App;
