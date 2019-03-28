import React from 'react';
import './Menu.css';

const Menu = () => {
    return <nav className='menu'>
        <h2 className='menu__title'>Подберите свой <span className='menu__title-upper'>kia</span></h2>
        <ul className='menu__list'>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Picanto</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Rio</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Rio X-Line</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Ceed <span className='item__text-upper'>sw</span></a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Cerato <span className='item__text-upper'>new</span></a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Optima <span className='item__text-upper'>new</span></a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Stinger</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Quoris</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Soul</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Sportage</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Sorento</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Sorento Prime</a>
            </li>
            <li className='menu__list_item'>
                <a className='menu__list_item-link' href='#'>Mohave</a>
            </li>
        </ul>
    </nav>
}

export default Menu;