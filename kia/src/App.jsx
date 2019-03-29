import React from "react";
import "./style.css";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="rectangle" />
      <Banner />
    </>
  );
}

export default App;
