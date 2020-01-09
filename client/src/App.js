import React from 'react';
import './App.css';
import NavBar from "./components/nav/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
      <Router>
          <NavBar/>
      </Router>
  );
};

export default App;
