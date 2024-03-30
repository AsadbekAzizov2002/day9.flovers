import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Sale from "./Sale";
import Footers from "./Footers";

const App = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Sale/>
      <Footers/>
    </div>
  );
};

export default App;
