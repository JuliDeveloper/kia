import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./AdvertBannerItem.module.css";

import { ReactComponent as SvgIconTire } from "../../images/tire.svg";
import Button from "../Button";
import ModalWindow from "../ModalWindow";
import BenefitModal from "../BenefitModal/BenefitModal";

class AdvertBannerItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isModalWindowOpen: false };
  }

  toggleModalWindow = () => {
    const { isModalWindowOpen } = this.state;
    this.setState({
      isModalWindowOpen: !isModalWindowOpen
    });
  };

  render() {
    const { title, image, subtext, status, buttons, text } = this.props;
    const { isModalWindowOpen } = this.state;
    return (
      <section className={css.advert}>
        <div className={css.container}>
          <h2 className={css.title}>
            {title}
            &nbsp;
            {status && <span className={css.status}>{status}</span>}
          </h2>
          <img className={css.image} src={image} alt="" />
        </div>
        <div className={css.container}>
          <div className={css.stock}>
            <span className={css.square}>
              <SvgIconTire width="31px" height="31px" />
            </span>
            <span className={css.stockText}>{text}</span>
          </div>
          <span className={css.text}>{subtext}</span>
          {buttons.map(button => (
            <Button
              handleClick={
                button.type === "benefit" ? this.toggleModalWindow : null
              }
              title={button.title}
              buttonClassName={classNames(css.button, {
                [css.credit]: button.type === "credit",
                [css.benefit]: button.type === "benefit",
                [css.special]: button.type === "special"
              })}
            />
          ))}
        </div>
        {isModalWindowOpen && (
          <ModalWindow handleClickModalClose={this.toggleModalWindow}>
            <BenefitModal handleToggleModal={this.toggleModalWindow} />
          </ModalWindow>
        )}
      </section>
    );
  }
}

AdvertBannerItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.string
};

AdvertBannerItem.defaultProps = {
  status: ""
};

export default AdvertBannerItem;
