import React from "react";
import "./style.css";
import "./App.css";
import Header from "./components/Header";
import AdvertBanner from "./components/AdvertBanner";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <div className="rectangle" />
      <Banner />
      <AdvertBanner />
    </>
  );
}

export default App;
