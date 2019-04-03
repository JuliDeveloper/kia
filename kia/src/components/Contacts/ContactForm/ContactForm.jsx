import React from "react";
import css from "./ContactForm.module.css";
import Input from "../../Input/Input";
import Button from "../../Button";

const ContactForm = () => (
  <div className={css.container}>
    <h2 className={css.title}>Контакты</h2>
    <address className={css.address}>Краснодар Тургеневское шоссе, 25</address>
    <a className={css.phone} href="tel: +78612123492">
      +7 (861) 212-34-92
    </a>
    <Input inputClassName={css.input} />
    <Button buttonClassName={css.button}>заказать звонок</Button>
  </div>
);

export default ContactForm;
