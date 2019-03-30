import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { ReactComponent as SvgIconTire } from "../../images/tire.svg";

import css from "./AdvertBanner.module.css";

import Button from "../Button";

const AdvertBanner = ({ title, attract, advertBannerClassName }) => (
  <section className={css.advert}>
    <div className={css.container}>
      <h2 className={css.title}>
        {title}
        &nbsp;
        <span className={css.attract}>{attract}</span>
      </h2>
      <div className={classNames(css.image, advertBannerClassName)} alt="" />
    </div>
    <div className={css.container}>
      <div className={css.stock}>
        <span className={css.square}>
          <SvgIconTire width="31px" height="31px" />
        </span>
        <span className={css.stockText}>Зимняя резина в подарок</span>
      </div>
      <span className={css.text}>Выгода до 60 000 руб.</span>
      <Button
        buttonClassName={classNames(css.credit, css.button)}
        title="В кредит за 3 500 р./мес."
      />
      <Button
        buttonClassName={classNames(css.benefit, css.button)}
        title="получить выгоду"
      />
      <Button
        buttonClassName={classNames(css.special, css.button)}
        title="спецпредложение"
      />
    </div>
  </section>
);

AdvertBanner.propTypes = {
  title: PropTypes.string.isRequired,
  attract: PropTypes.string.isRequired,
  advertBannerClassName: PropTypes.string
};

AdvertBanner.defaultProps = {
  advertBannerClassName: ""
};

export default AdvertBanner;
