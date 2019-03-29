import React from 'react';
import css from './Button.module.css';
import classNames from "classnames";

const Button = ({ title, buttonClassName }) => (
    <button className={classNames(css.button, buttonClassName)}>
        {title}</button>
);

export default Button;