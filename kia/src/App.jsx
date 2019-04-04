import React from "react";
import "./style.css";
import css from "./App.module.css";
import Header from "./components/Header";
import AdvertBanner from "./components/AdvertBanner";
import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";

const App = () => (
  <>
    <Header />
    <div className={css.rectangle} />
    <Banner />
    <AdvertBanner />
    <Contacts />
  </>
);

export default App;
