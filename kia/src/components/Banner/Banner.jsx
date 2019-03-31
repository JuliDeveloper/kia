import React from "react";
import css from "./Banner.module.css";
import Menu from "../Menu/Menu";
import AdvertForm from "../AdvertForm/AdvertForm";
import Button from "../Button";
import ModalWindow from "../ModalWindow";
import BenefitModal from "../BenefitModal/BenefitModal";

const Banner = () => (
  <section className={css.banner}>
    <div className={css.container}>
      <div className={css.titleBox}>
        <span className={css.title}>Только до конца октября</span>
        <span className={css.titleIncrease}>масштабные выгоды</span>
        <span className={css.title}>на весь модельный ряд!</span>
        <Button title="забрать выгоду!" buttonClassName={css.button} />
      </div>

      <div className={css.image} />
    </div>
    <div className={css.box}>
      <Menu />
      <AdvertForm />
    </div>
    <ModalWindow>
      <BenefitModal />
    </ModalWindow>
  </section>
);

export default Banner;
