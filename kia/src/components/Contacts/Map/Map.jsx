import React, { PureComponent } from "react";
import css from "./Map.module.css";
import mapInitConfig from "./mapInitConfig";

class Map extends PureComponent {
  componentDidMount() {
    window.ymaps.ready(mapInitConfig);
  }

  render() {
    return <div id="map" className={css.container} />;
  }
}

export default Map;
