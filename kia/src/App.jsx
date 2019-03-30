import React from "react";
import "./style.css";
import css from "./App.module.css";

import Header from "./components/Header/Header";
import AdvertBanner from "./components/AdvertBanner/AdvertBanner";

function App() {
  return (
    <>
      <Header />
      <div className={css.container}>
        <AdvertBanner
          title="KIA Rio X-Line"
          advertBannerClassName={css.imageRio}
        />
        <AdvertBanner
          title="KIA Ceed"
          attract="New"
          advertBannerClassName={css.imageCeed}
        />
      </div>
    </>
  );
}

export default App;
