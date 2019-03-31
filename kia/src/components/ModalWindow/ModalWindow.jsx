import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";
import css from "./ModalWindow.module.css";

const KEY_CODE_ESC = 27;

class ModalWindow extends PureComponent {
  constructor(props) {
    super(props);

    this.documentBody = document.body;
    this.rootModal = document.createElement("div");
  }

  componentDidMount() {
    this.documentBody.appendChild(this.rootModal);
    document.addEventListener("keydown", this.closeByEsc);
  }

  componentWillUnmount() {
    this.documentBody.removeChild(this.rootModal);
    document.removeEventListener("keydown", this.closeByEsc);
  }

  closeByEsc = e => {
    const { handleClickModalClose } = this.props;
    if (e.keyCode === KEY_CODE_ESC) {
      handleClickModalClose();
    }
  };

  render() {
    const { children, handleClickModalClose } = this.props;

    const content = (
      <div className={css.modalWrapper}>
        <div
          className={css.overLay}
          onClick={handleClickModalClose}
          role="none"
        />
        <div className={css.content}>{children}</div>
      </div>
    );

    return ReactDom.createPortal(content, this.rootModal);
  }
}

ModalWindow.propTypes = {
  children: PropTypes.element.isRequired,
  handleClickModalClose: PropTypes.func.isRequired
};

export default ModalWindow;
