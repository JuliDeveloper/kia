import React from "react";
import css from "./Header.module.css";
import Logo from "../Logo";
import Button from "../Button";
import Menu from "../Menu";

const Header = () => (
  <header className={css.header}>
    <section className={css.container}>
      <div className={css.autoHolding} />
      <div className={css.address}>
        <span className={css.addressIcon} />
        <address className={css.addressText}>
          Краснодар, Тургеневское шоссе, 25
        </address>
      </div>
    </section>
    <Button title="заказать звонок" buttonClassName={css.button} />
    <Logo />
    <Menu menuClassName={css.menu} />
  </header>
);

export default Header;
