import React from 'react';
import './Banner.css';
import Menu from '../Menu/Menu.jsx';
import CreditForm from '../CreditForm/CreditForm.jsx';

const Banner = () => {
    return <section className='banner'>
        <h2 className='banner__title'>Только до конца октября <span className='banner__title_increase'>масштабные выгоды</span> на весь модельный ряд!</h2>
        <button className='banner__button'>забрать выгоду!</button>
        <div className='banner__image'></div>
        <div>
            <Menu />
            <CreditForm />
        </div>
    </section>
}

export default Banner;