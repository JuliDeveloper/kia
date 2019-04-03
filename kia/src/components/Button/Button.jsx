import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Button.module.css";

const Button = ({ children, buttonClassName, handleClick }) => (
  <button
    onClick={handleClick}
    type="button"
    className={classNames(css.button, buttonClassName)}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  buttonClassName: PropTypes.string,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  buttonClassName: "",
  handleClick: null
};

export default Button;
