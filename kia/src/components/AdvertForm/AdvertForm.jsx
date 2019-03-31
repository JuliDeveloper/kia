import React from "react";
import css from "./AdvertForm.module.css";
import Input from "../Input/Input";
import Button from "../Button";

const AdvertForm = () => (
  <form className={css.advert}>
    <h2 className={css.title}>Супер кредит 0,1%</h2>
    <h3 className={css.subtitle}>
      на&nbsp;
      <span className={css.subtitleUpper}>
        kia sportage, stringer, sorento, sorento prime
      </span>
    </h3>
    <div className={css.container}>
      <Input inputClassName={css.input} />
      <Button title="получить кредит" buttonClassName={css.button} />
    </div>
  </form>
);

export default AdvertForm;
