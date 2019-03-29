import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Button.module.css";

const Button = ({ title, buttonClassName }) => (
  <button type="button" className={classNames(css.button, buttonClassName)}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string
};

Button.defaultProps = {
  buttonClassName: ""
};

export default Button;
