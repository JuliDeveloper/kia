import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import menuConfigData from "./configData";
import css from "./Menu.module.css";
import MenuItem from "./MenuItem";

const Menu = ({ children, menuClassName }) => (
  <nav className={classNames(css.menu, menuClassName)}>
    {children}
    <h2 className={css.title}>
      Подберите свой&nbsp;
      <span className={css.titleUpper}>kia</span>
    </h2>
    <div className={css.list}>
      {menuConfigData.map(menuItem => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </div>
  </nav>
);

Menu.propTypes = {
  menuClassName: PropTypes.string,
  children: PropTypes.objectOf(PropTypes.any)
};

Menu.defaultProps = {
  menuClassName: "",
  children: null
};

export default Menu;
