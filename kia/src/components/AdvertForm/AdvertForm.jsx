import React from 'react';
import './AdvertForm.css';

const AdvertForm = () => {
    return <form className='advert'>
        <h2 className='advert__title'>Супер кредит 0,1%</h2>
        <h3 className='advert__subtitle'>на <span className='fadvert__subtitle-upper'>kia sportage, stringer, sorento prime</span></h3>
        <input className='advert__input' type="tel" placeholder='Введите телефон' id='phone'/>
        <button className='advert__button' htmlFor="phone">получить кредит</label>
    </form>
}

export default CreditForm;