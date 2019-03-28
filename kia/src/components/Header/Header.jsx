import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo.jsx';

const Header = () => {
    return <header className='header'>
        <section className='header__container'>
            <div className='header__container_autoholding'></div>
            <div className='header__container_address'>
                <span className='header__container_address-icon'></span>
                <address className='header__container_address-text'>Краснодар, Тургеневское шоссе, 25</address>
            </div>
        </section>
        <button className='header__button'>заказать звонок</button>
        <Logo />
    </header>
}

export default Header;