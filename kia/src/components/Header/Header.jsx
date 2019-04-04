import React, { PureComponent } from "react";

import { ReactComponent as SvgIconMenu } from "../../images/menu.svg";
import { ReactComponent as SvgIconClose } from "../../images/close_white.svg";

import css from "./Header.module.css";
import Logo from "../Logo";
import Button from "../Button";
import Menu from "../Menu";

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isMobileMenuOpen: false };
  }

  toggleMobileMenu = () => {
    const { isMobileMenuOpen } = this.state;
    this.setState({
      isMobileMenuOpen: !isMobileMenuOpen
    });
  };

  render() {
    const { isMobileMenuOpen } = this.state;
    return (
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
        <Button buttonClassName={css.button}>
          <span>заказать звонок</span>
        </Button>
        <Logo />
        <Button
          handleClick={this.toggleMobileMenu}
          buttonClassName={css.menuButton}
        >
          <SvgIconMenu className={css.iconMenu} />
        </Button>
        {isMobileMenuOpen && (
          <div className={css.substrate}>
            <Menu menuClassName={css.menu}>
              <SvgIconClose
                onClick={this.toggleMobileMenu}
                className={css.inputClose}
              />
            </Menu>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
