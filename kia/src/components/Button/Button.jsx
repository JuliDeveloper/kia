import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Button.module.css";

const Button = ({ children, buttonClassName }) => (
  <button type="button" className={classNames(css.button, buttonClassName)}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  buttonClassName: PropTypes.string
};

Button.defaultProps = {
  buttonClassName: ""
};

export default Button;
