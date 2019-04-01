import React from "react";
import css from "./Banner.module.css";
import Menu from "../Menu/Menu";
import AdvertForm from "../AdvertForm/AdvertForm";
import Button from "../Button";

const Banner = () => (
  <section className={css.banner}>
    <div className={css.container}>
      <div className={css.titleBox}>
        <span className={css.title}>Только до конца октября</span>
        <span className={css.titleIncrease}>масштабные выгоды</span>
        <span className={css.title}>на весь модельный ряд!</span>
        <Button buttonClassName={css.button}>забрать выгоду!</Button>
      </div>
      <div className={css.image} />
    </div>
    <div className={css.box}>
      <Menu />
      <AdvertForm />
    </div>
  </section>
);

export default Banner;
