import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Input.module.css";

const Input = ({ inputClassName }) => (
  <input
    className={classNames(css.input, inputClassName)}
    type="tel"
    placeholder="Введите телефон"
  />
);

Input.propTypes = {
  inputClassName: PropTypes.string
};

Input.defaultProps = {
  inputClassName: ""
};

export default Input;
