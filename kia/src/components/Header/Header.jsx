import React from 'react';
import css from './Header.module.css';
import Logo from '../Logo/Logo.jsx';
import Button from '../Button/Button.jsx';

const Header = () => {
    return <header className={css.header}>
        <section className={css.container}>
            <div className={css.autoholding}></div>
            <div className={css.address}>
                <span className={css.addressIcon}></span>
                <address className={css.addressText}>Краснодар, Тургеневское шоссе, 25</address>
            </div>
        </section>        
        <Button title='заказать звонок' buttonClassName={css.button} />
        <Logo />
    </header>
}

export default Header;