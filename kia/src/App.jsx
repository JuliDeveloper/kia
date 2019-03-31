import React from "react";
import "./style.css";
import "./App.css";
import Header from "./components/Header";
import AdvertBanner from "./components/AdvertBanner";
import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <div className="rectangle" />
      <Banner />
      <AdvertBanner />
      <Contacts />
    </>
  );
}

export default App;
