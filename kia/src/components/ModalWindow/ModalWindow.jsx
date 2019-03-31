import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import css from "./ModalWindow.module.css";

class ModalWindow extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className={css.modalWrapper}>
        <div className={css.overLay} />
        <div className={css.content}>{children}</div>
      </div>
    );
  }
}

ModalWindow.propTypes = {
  children: PropTypes.element.isRequired
};

export default ModalWindow;
