import React from "react";

import menuConfigData from "./configData";
import css from "./Menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => (
  <nav className={css.menu}>
    <h2 className={css.title}>
      Подберите свой&nbsp;
      <span className={css.titleUpper}>kia</span>
    </h2>
    <div className={css.list}>
      {menuConfigData.map(menuItem => (
        <MenuItem {...menuItem} />
      ))}
    </div>
  </nav>
);

export default Menu;
