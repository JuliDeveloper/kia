import React from "react";
import css from "./BenefitModal.module.css";
import Input from "../Input/Input";
import Button from "../Button";

import { ReactComponent as SvgIconClose } from "../../images/close.svg";

const BenefitModal = () => (
  <div className={css.wrapper}>
    <SvgIconClose className={css.icon} width="16px" height="17px" />
    <h2 className={css.title}>Получите все выгоды!</h2>
    <Input inputClassName={css.input} />
    <Button title="Получить все выгоды" buttonClassName={css.button} />
    <p className={css.text}>
      Нажав на кнопку &quot;Отправить заявку&quot;, я даю согласие на обработку
      моих персональных данных и получение рекламных предложений. С условиями
      обработки персональных данных и получения предложений - ознакомлен и
      согласен.
    </p>
  </div>
);

export default BenefitModal;
