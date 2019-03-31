import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import menuConfigData from "./configData";
import css from "./Menu.module.css";
import MenuItem from "./MenuItem";

const Menu = ({ menuClassName }) => (
  <nav className={classNames(css.menu, menuClassName)}>
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

Menu.propTypes = {
  menuClassName: PropTypes.string
};

Menu.defaultProps = {
  menuClassName: ""
};

export default Menu;
