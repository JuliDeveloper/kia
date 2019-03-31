import React from "react";
import css from "./Contacts.module.css";
import Map from "./Map";
import ContactForm from "./ContactForm";

const Contacts = () => (
  <section className={css.container}>
    <Map />
    <ContactForm />
  </section>
);

export default Contacts;
