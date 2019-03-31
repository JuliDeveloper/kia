import React from "react";
import PropTypes from "prop-types";
import css from "./MenuItem.module.css";

const MenuItem = ({ text, href, subtext }) => (
  <a className={css.link} href={href}>
    {text}
    {subtext && (
      <span className={css.text}>
        &nbsp;
        {subtext}
      </span>
    )}
  </a>
);

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  subtext: PropTypes.string
};

MenuItem.defaultProps = {
  href: "",
  subtext: ""
};

export default MenuItem;
