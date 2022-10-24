import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { List } from "./Views/List";
import { Details } from "./Views/Details";
import { AllPokemonContext } from "./context/allPokemonContext";
import "./App.css";

const App = () => {
  return (
    <AllPokemonContext>
      <div className="root">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="details" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </AllPokemonContext>
  );
};

export default App;
