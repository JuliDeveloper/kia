import React from "react";

import { ReactComponent as SvgIconMenu } from "../../images/menu.svg";
import { ReactComponent as SvgIconClose } from "../../images/close_white.svg";

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
    <Button buttonClassName={css.button}>заказать звонок</Button>
    <Logo />
    <div className={css.menuMobile}>
      <Button buttonClassName={css.menuButton}>
        <SvgIconMenu className={css.iconMenu} />
      </Button>
      <div className={css.substrate}>
        <Menu menuClassName={css.menu}>
          <SvgIconClose className={css.inputClose} />
        </Menu>
      </div>
    </div>
  </header>
);

export default Header;
