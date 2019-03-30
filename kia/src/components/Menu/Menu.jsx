import React from "react";
import css from "./Menu.module.css";

const Menu = () => (
  <nav className={css.menu}>
    <h2 className={css.title}>
      Подберите свой&nbsp;
      <span className={css.titleUpper}>kia</span>
    </h2>
    <div>
      <a className={css.link} href="/">
        Picanto
      </a>
      <a className={css.link} href="/">
        Rio
      </a>
      <a className={css.link} href="/">
        Rio X-Line
      </a>
      <a className={css.link} href="/">
        Ceed&nbsp;
        <span className={css.textUpper}>sw</span>
      </a>
      <a className={css.link} href="/">
        Cerato&nbsp;
        <span className={css.textUpper}>new</span>
      </a>
      <a className={css.link} href="/">
        Optima&nbsp;
        <span className={css.textUpper}>new</span>
      </a>
      <a className={css.link} href="/">
        Stinger
      </a>
      <a className={css.link} href="/">
        Quoris
      </a>
      <a className={css.link} href="/">
        Soul
      </a>
      <a className={css.link} href="/">
        Sportage
      </a>
      <a className={css.link} href="/">
        Sorento
      </a>
      <a className={css.link} href="/">
        Sorento Prime
      </a>
      <a className={css.link} href="/">
        Mohave
      </a>
    </div>
  </nav>
);

export default Menu;
